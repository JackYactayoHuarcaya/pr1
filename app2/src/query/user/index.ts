import { getUsers } from "../../services/user";
import { useQuery } from "../query";

export const queryUser = () => {
  const { data, isLoading, error } = useQuery<
    {
      id: number;
      nombre: string;
      idType: string;
    }[]
  >({
    queryKey: ["user"],
    queryFn: getUsers,
  });
  return {
    data,
    isLoading,
    error,
  };
};
