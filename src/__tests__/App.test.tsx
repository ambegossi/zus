import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import App from '../App';
import Provider from '../Provider';

import { topMangas } from '../__mocks__/topMangas';

nock('https://api.jikan.moe/v3/')
  .persist()
  .defaultReplyHeaders({
    'access-control-allow-origin': '*'
  })
  .get('/top/manga').reply(200, topMangas)

test('renders mangas successfully', async () => {
  render(
    <Provider>
      <App />
    </Provider>
  );

  const firstTopManga = topMangas.top[0];

  await waitFor(() => {
    const firstMangaElement = screen.getByText(firstTopManga.title);
    expect(firstMangaElement).toBeInTheDocument();
  })
});

test('favorite manga successfully', async () => {
  render(
    <Provider>
      <App />
    </Provider>
  );

  const firstTopManga = topMangas.top[0];
  const secondTopManga = topMangas.top[1];

  const favoriteFirstMangaButton = screen.getByTestId(`Favorite-Button-${firstTopManga.mal_id}`);
  const showFavoritesButton = screen.getByText(/Show favorites/i);

  favoriteFirstMangaButton.click();
  showFavoritesButton.click();

  await waitFor(() => {
    const firstMangaElement = screen.getByText(firstTopManga.title);

    expect(firstMangaElement).toBeInTheDocument();
  })


  await waitFor(() => {
    const secondMangaElement = screen.queryByText(secondTopManga.title);

    expect(secondMangaElement).not.toBeInTheDocument();
  })
});

test('match snapshot', () => {
  const { container } = render(
    <Provider>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});