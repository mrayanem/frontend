import { http } from 'utils/http'
import { User } from '../models/User'

export async function getUsers() {
  const res = await http.get<User[]>(`/users`)

  if (res.status === 200) {
    return res.data
  }
}

export const createUser = async (data: Omit<User, 'id'>) => {
  const res = await http.post<User>(`/users`, data)

  if (res.status === 200) {
    return res.data
  }
}

export const updateUser = async (id: string, data: Omit<User, 'id'>) => {
  const res = await http.put<User>(`/user/${id}`, data)

  if (res.status === 200) {
    return res.data
  }
}

export const removeUser = async (id: string) => {
  const res = await http.delete(`/users/${id}`)

  if (res.status === 204) {
    return
  }
}
