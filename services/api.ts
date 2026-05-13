import axios from "axios";

import { User } from "@/types/user";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function fetchUsers(): Promise<User[]> {
  const response = await api.get("/users");
  return response.data;
}

export async function fetchUserById(id: string): Promise<User> {
  const response = await api.get(`/users/${id}`);
  return response.data;
}

export async function fetchPosts() {
  const response = await api.get("/posts");
  return response.data;
}

export async function fetchTodos() {
  const response = await api.get("/todos");
  return response.data;
}
