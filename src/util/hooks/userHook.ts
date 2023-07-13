import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi, fetchUserListApi } from "util/api/userApi";

// https://veil-tanker-0ca.notion.site/React-Query-e7ad91fd96fe4be5b17265e5c00c6414?pvs=4 참고
export const userKeys = {
  all: ["user"],
  list: (page = 1, size = 20, username: undefined | string = undefined) => [
    ...userKeys.all,
    "list",
    { page, size, username },
  ],
};

export const useUserList = (
  page: number,
  size: number,
  username: string | undefined = undefined,
) => {
  return useQuery(userKeys.list(page, size, username), () =>
    fetchUserListApi(page, size, username),
  );
};

export const useUserDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUserApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
