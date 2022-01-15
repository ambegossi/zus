import { useQuery } from 'react-query';

import api from '../../api';
import { TopMangaApiResponse } from './types';

async function getTopMangas() {
  const { data } = await api.get<TopMangaApiResponse>('top/manga');

  return data;
}

export function useFetchTopMangas() {
  return useQuery('topMangas', getTopMangas);
}