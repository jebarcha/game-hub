//import useData from './useData';
import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platform';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlatforms2 = () => ({ data: platform, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms, //{ count: platform.length, results: platform },
  });

export default usePlatforms;
