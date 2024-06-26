// src/viewmodels/CharacterDetailViewModel.ts

import { useState, useEffect } from "react";
import {
  fetchCharacterFilms,
  Character,
} from "../api/services/characterFilmsService";

interface CharacterDetailViewModel {
  isLoading: boolean;
  character: Character | null;
  error: string | null;
  loadCharacterDetails: (peopleId: number) => void;
}

export function useCharacterDetailViewModel(): CharacterDetailViewModel {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadCharacterDetails = async (peopleId: number) => {
    setIsLoading(true);
    try {
      const characterData = await fetchCharacterFilms(peopleId);
      setCharacter(characterData);
      setError(null);
    } catch (error) {
      setError("Erro ao carregar detalhes do personagem.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    character,
    error,
    loadCharacterDetails,
  };
}
