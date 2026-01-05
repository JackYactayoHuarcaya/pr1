import { useQuery as useQueryTanstack } from "@tanstack/react-query";
type UseQueryProps = {
  queryKey: string[];
  queryFn: () => Promise<any>;
};
export const useQuery = <T>({ queryKey, queryFn }: UseQueryProps) => {
  const { data, isLoading, error } = useQueryTanstack<T>({
    queryKey,
    queryFn,
    staleTime: 1000 * 60,
  });
  return {
    data,
    isLoading,
    error,
  };
};
