import { renderHook, act } from "@testing-library/react-native";
import { useFavoritesStore } from "../store/favoriteStore";

describe("useFavoritesStore", () => {
  it("should toggle favorite correctly", () => {
    const { result } = renderHook(() => useFavoritesStore());

    expect(result.current.getFavoriteCharacters()).toEqual([]);

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(true);
    expect(result.current.getFavoriteCharacters()).toEqual([1]);

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(false);
    expect(result.current.getFavoriteCharacters()).toEqual([]);
  });

  it("should correctly determine if a character is favorite", () => {
    const { result } = renderHook(() => useFavoritesStore());

    expect(result.current.isFavorite(1)).toBe(false);

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(true);

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(false);
  });

  it("should return favorite characters correctly", () => {
    const { result } = renderHook(() => useFavoritesStore());

    expect(result.current.getFavoriteCharacters()).toEqual([]);

    act(() => {
      result.current.toggleFavorite(1);
    });

    act(() => {
      result.current.toggleFavorite(2);
    });

    expect(result.current.getFavoriteCharacters()).toEqual([1, 2]);
  });
});
