import axios, { AxiosError } from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

export async function fetchFilmTitle(
  url: string,
  retries = 3
): Promise<string> {
  try {
    const response = await axios.get(url, { timeout: 10000 }); // Aumentando o timeout para 10 segundos
    return response.data.title;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.code === "ECONNABORTED" &&
      retries > 0
    ) {
      console.warn(
        `Timeout ao obter título do filme ${url}. Tentando novamente...`
      );
      return fetchFilmTitle(url, retries - 1); // Tentativa novamente com uma tentativa a menos
    } else {
      console.error(`Erro ao obter título do filme ${url}:`, error);
      throw error; // Lança o erro para ser tratado na camada superior
    }
  }
}
