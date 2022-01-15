import './App.css';

import useFetchTopMangas from './services/requests/useFetchTopMangas';

function App() {
  const { data } = useFetchTopMangas();

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data?.top.map((manga) => (
        <div key={manga.mal_id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '250px' }}>
          <img src={manga.image_url} alt={manga.title} style={{ height: '300px' }}/>
          <p>{manga.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
