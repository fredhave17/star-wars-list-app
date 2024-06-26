import { useState } from "react";
import { fetchFilmTitle } from "../api/services/filmService";

interface FilmViewModel {
  filmTitles: { [key: string]: string };
  error: string | null;
  loadFilmTitle: (filmUrl: string) => void;
}

export function useFilmViewModel(): FilmViewModel {
  const [filmTitles, setFilmTitles] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);

  const loadFilmTitle = async (filmUrl: string) => {
    try {
      const title = await fetchFilmTitle(filmUrl);
      setFilmTitles((prevTitles) => ({
        ...prevTitles,
        [filmUrl]: title,
      }));
      setError(null);
    } catch (error) {
      console.error(`Erro ao obter título do filme ${filmUrl}:`, error);
      setError(`Erro ao obter título do filme ${filmUrl}: ${error.message}`);
    }
  };

  return {
    filmTitles,
    error,
    loadFilmTitle,
  };
}
