import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

//const useGenres = () => useData<Genre>('/genres');
//const useGenres2 = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24'), //24 * 60 * 60 * 1000, //24h
    initialData: genres, //{ count: genres.length, results: genres, next: null },
  });

export default useGenres;
