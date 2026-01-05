import { fetcher } from "../fetcher";

const routeUser = {
  user: "/api/user",
};

export const getUsers = async () => {
  const users = await fetcher(routeUser.user, {});
  return users;
};
export const createUser = async (data: { name: string; idType: string }) => {
  const user = await fetcher(routeUser.user, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return user;
};
