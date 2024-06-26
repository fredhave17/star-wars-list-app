import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export interface Character {
  id: number;
  name: string;
}

export async function fetchCharactersName(page: number): Promise<Character[]> {
  try {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return response.data.results.map((character: any) => ({
      id: extractIdFromUrl(character.url),
      name: character.name,
    }));
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
}

function extractIdFromUrl(url: string): number {
  const idRegex = /\/(\d+)\/$/;
  const matches = url.match(idRegex);
  if (matches && matches.length > 1) {
    return parseInt(matches[1], 10);
  }
  return 0;
}

export async function fetchCharacterNameById(
  id: number
): Promise<string | undefined> {
  try {
    const response = await axios.get(`${BASE_URL}/people/${id}/`);
    return response.data.name;
  } catch (error) {
    console.error(`Erro ao buscar o nome do personagem com o ID ${id}:`, error);
    return undefined;
  }
}
