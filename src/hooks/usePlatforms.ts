//import useData from './useData';
import { useQuery } from '@tanstack/react-query';
import platform from '../data/platform';
import apiClient, { FetchResponse } from '../services/api-client';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlatforms2 = () => ({ data: platform, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
