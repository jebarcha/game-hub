import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platform';
import APIClient from '../services/api-client';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlatforms2 = () => ({ data: platform, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24'), //24 * 60 * 60 * 1000, //24h
    initialData: platforms, //{ count: platform.length, results: platform },
  });

export default usePlatforms;
