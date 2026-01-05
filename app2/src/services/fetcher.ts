import axios from "axios";

export const fetcher = async (url: string, data: RequestInit) => {
  const res = await axios(url, {
    data: data.method !== "GET" ? data.body : undefined,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return res.data;
};
