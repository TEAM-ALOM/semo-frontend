import { useQuery } from '@tanstack/react-query';
import {
  API_CHECK_LOGIN,
  checkLoginRequest,
} from '../../services/remotes/checkLoginRequest';

export const useLoginQuery = () => {
  return useQuery({
    queryKey: [API_CHECK_LOGIN],
    queryFn: checkLoginRequest,
  });
};
