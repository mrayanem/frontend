import { http } from "utils/http";
import { User } from "../models/User";

export const get = () => {
  return http.get<User[]>(`/users`);
};

export const create = (data: Omit<User, "id">) => {
  return http.post<User>("/user", data);
};

export const update = (id: string, data: Omit<User, "id">) => {
  return http.put<User>(`/user/${id}`, data);
};

export const remove = (id: string) => {
  return http.delete<String>(`/user/${id}`);
};

