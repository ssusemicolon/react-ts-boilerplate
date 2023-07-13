import axios from "axios";

export const fetchUserListApi = async (
  page: number,
  size: number,
  username: undefined | string = undefined,
) => {
  const { data } = await axios.get(`/admin/user`, {
    params: {
      page,
      size,
      username,
    },
  });
  return data.data;
};

export const fetchUserAccountApi = async (
  page: number,
  size: number,
  id: number,
) => {
  const { data } = await axios.get(`/admin/user/account/${id}`, {
    params: {
      page,
      size,
    },
  });
  return data.data;
};

export const fetchUserOrderApi = async (
  page: number,
  size: number,
  id: number,
) => {
  const { data } = await axios.get(`/admin/user/order/${id}`, {
    params: {
      page,
      size,
    },
  });
  return data.data;
};

export const deleteUserApi = async (id: number) => {
  const { data } = await axios.delete(`/admin/user/${id}`);
  return data.data;
};
