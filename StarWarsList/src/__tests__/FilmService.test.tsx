import { AxiosError } from "axios";
import { fetchFilmTitle } from "../api/services/filmService";

describe("fetchFilmTitle", () => {
  const mockSuccessfulRequest = (url: string) => ({
    data: { title: "A New Hope" },
  });

  const mockFailedRequest = (url: string) => {
    const error = new Error("Network Error");

    (error as AxiosError).code = "ECONNABORTED";
    return Promise.reject(error);
  };

  jest.mock("axios");
  // @ts-ignore
  import axios from "axios";
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch film title successfully", async () => {
    const url = "https://swapi.dev/api/films/1/";

    mockedAxios.get.mockResolvedValue(mockSuccessfulRequest(url));

    const title = await fetchFilmTitle(url);

    expect(title).toBe("A New Hope");
    expect(mockedAxios.get).toHaveBeenCalledWith(url, { timeout: 10000 });
  });

  it("should retry fetching film title on timeout", async () => {
    const url = "https://swapi.dev/api/films/1/";

    mockedAxios.get
      .mockRejectedValueOnce(mockFailedRequest(url))
      .mockResolvedValue(mockSuccessfulRequest(url));

    const title = await fetchFilmTitle(url);

    expect(title).toBe("A New Hope");
    expect(mockedAxios.get).toHaveBeenCalledWith(url, { timeout: 10000 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
  });

  it("should throw error when retries are exhausted", async () => {
    const url = "https://swapi.dev/api/films/1/";

    mockedAxios.get.mockRejectedValue(mockFailedRequest(url));

    await expect(fetchFilmTitle(url, 2)).rejects.toThrowError(
      "Error: Network Error"
    );

    expect(mockedAxios.get).toHaveBeenCalledWith(url, { timeout: 10000 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(3);
  });
});
