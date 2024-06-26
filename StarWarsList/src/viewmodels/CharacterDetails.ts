import { useState } from "react";
import {
  fetchCharacterFullDetails,
  Character,
} from "../api/services/charactersFullDetails";

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
      const characterData = await fetchCharacterFullDetails(peopleId);
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
