import { useState, useEffect } from "react";
import {
  fetchCharactersName,
  Character,
} from "../api/services/characterNameService";
import axios from "axios";

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
  const [endReached, setEndReached] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  useEffect(() => {
    loadCharacters();
  }, []);

  const fetchCharacters = async (pageNum: number): Promise<Character[]> => {
    try {
      const response = await fetchCharactersName(pageNum);
      return response;
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      throw error;
    }
  };

  const loadCharacters = async () => {
    setIsLoading(true);
    try {
      const loadedCharacters = await fetchCharacters(page);
      setCharacters(loadedCharacters);
      setHasError(false);
      setEndReached(false);

      const response = await fetchCharacters(page + 1);
      setHasNextPage(response.length > 0);
    } catch (error) {
      console.error("Erro ao carregar personagens:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreCharacters = async () => {
    if (isLoading || !hasNextPage) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;

      if (!nextPage) {
        setEndReached(true);
        setHasNextPage(false);
        return;
      }

      const loadedCharacters = await fetchCharacters(nextPage);

      if (loadedCharacters.length === 0) {
        setEndReached(true);
        setHasNextPage(false);
      } else {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...loadedCharacters,
        ]);
        setPage(nextPage);
      }
      setHasError(false);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setEndReached(true);
        setHasNextPage(false);
        console.error("Página não encontrada:", error);
      } else {
        console.error("Erro ao carregar mais personagens:", error);
        setHasError(true);
      }
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
