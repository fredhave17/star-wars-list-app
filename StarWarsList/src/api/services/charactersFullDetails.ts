import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export interface Character {
  id: number;
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  films: string[];
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

export async function fetchCharacterFullDetails(
  peopleId: number
): Promise<Character> {
  try {
    const response = await axios.get(`${BASE_URL}/people/${peopleId}/`);
    const character = response.data;
    return {
      id: peopleId,
      name: character.name,
      gender: character.gender,
      birth_year: character.birth_year,
      height: character.height,
      mass: character.mass,
      hair_color: character.hair_color,
      skin_color: character.skin_color,
      eye_color: character.eye_color,
      homeworld: character.homeworld,
      films: character.films,
    };
  } catch (error) {
    console.error("Erro ao buscar detalhes do personagem:", error);
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
