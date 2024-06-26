import axios from "axios";

export const fetchFilmTitle = async (filmUrl: string): Promise<string> => {
  try {
    const response = await axios.get(filmUrl, { timeout: 10000 });
    return response.data.title; // Supondo que o título do filme está em response.data.title
  } catch (error) {
    console.error(`Erro ao obter título do filme ${filmUrl}:`, error);
    throw new Error(
      `Erro ao obter título do filme ${filmUrl}: ${error.message}`
    );
  }
};
