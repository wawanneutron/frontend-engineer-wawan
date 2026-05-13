import { User } from "./user";

export interface UserOperation extends User {
  totalPosts: number;
  completedTodos: number;
  pendingTodos: number;
}
