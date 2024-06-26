// src/api/services/characterService.ts

import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export interface Character {
  id: number;
  name: string;
  gender: string;
  birth_year: string;
}

export async function fetchCharacters(page: number): Promise<Character[]> {
  try {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return response.data.results.map((character: any) => ({
      id: extractIdFromUrl(character.url),
      name: character.name,
      gender: character.gender,
      birth_year: character.birth_year,
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
