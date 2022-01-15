import { useCallback, useState } from 'react';
import './App.css';

import { useFetchTopMangas } from './services/requests/useFetchTopMangas';
import { useFavoriteMangas } from './store/useFavoriteMangas';

function App() {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const { data } = useFetchTopMangas();
  const { favorites, favoriteManga } = useFavoriteMangas();

  const toggleShowOnlyFavorites = useCallback(() => {
    setShowOnlyFavorites((prev) => !prev)
  }, [])

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <button onClick={toggleShowOnlyFavorites}>
        Show favorites
      </button>

      {data?.top.filter((manga) => !showOnlyFavorites || favorites.includes(manga.mal_id)).map((manga) => (
        <div key={manga.mal_id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '250px' }}>
          
          <img src={manga.image_url} alt={manga.title} style={{ height: '300px' }}/>
          
          {favorites.includes(manga.mal_id) ? '⭐️' : ''}

          <p>{manga.title}</p>
        
          <button onClick={() => favoriteManga(manga.mal_id)}>
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
