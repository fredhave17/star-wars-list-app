import { useState, useEffect } from "react";
import {
  fetchCharactersName,
  Character,
} from "../api/services/characterNameService";

interface CharacterListViewModel {
  isLoading: boolean;
  hasError: boolean;
  characters: Character[];
  loadCharacters: () => void;
  loadMoreCharacters: () => void;
}

const PAGE_SIZE = 10;

export function useCharacterNameListViewModel(): CharacterListViewModel {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    setIsLoading(true);
    try {
      const loadedCharacters = await fetchCharactersName(page);
      setCharacters(loadedCharacters);
      setHasError(false);
    } catch (error) {
      console.error("Erro ao carregar personagens:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreCharacters = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const loadedCharacters = await fetchCharactersName(nextPage);
      setCharacters([...characters, ...loadedCharacters]);
      setPage(nextPage);
      setHasError(false);
    } catch (error) {
      console.error("Erro ao carregar mais personagens:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    hasError,
    characters,
    loadCharacters,
    loadMoreCharacters,
  };
}
