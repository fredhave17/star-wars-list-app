// src/api/services/characterService.ts

import axios from "axios";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[]; // Array de URLs dos filmes
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export async function fetchCharacterFilms(
  characterId: number
): Promise<Character> {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/${characterId}/`
    );
    const characterData: Character = response.data;
    return characterData;
  } catch (error) {
    console.error("Erro ao obter detalhes do personagem:", error);
    throw error;
  }
}
