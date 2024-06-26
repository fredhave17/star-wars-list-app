import { create } from "zustand";

interface FavoritesStore {
  favorites: number[];
  toggleFavorite: (characterId: number) => void;
  isFavorite: (characterId: number) => boolean;
  getFavoriteCharacters: () => number[];
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  toggleFavorite: (characterId) => {
    const isFavorite = get().favorites.includes(characterId);
    if (!isFavorite) {
      set((state) => ({
        favorites: [...state.favorites, characterId],
      }));
    } else {
      set((state) => ({
        favorites: state.favorites.filter((id) => id !== characterId),
      }));
    }
  },
  isFavorite: (characterId) => get().favorites.includes(characterId),
  getFavoriteCharacters: () => get().favorites,
}));
