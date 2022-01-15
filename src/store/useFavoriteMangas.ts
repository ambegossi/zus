import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  favorites: number[];
};

export const useFavoriteMangas = create<State>(
  persist(
    () => 
      ({ 
        favorites: [] 
      } as State), 
    { 
      name: 'useFavoriteMangas' 
    }
  )
)