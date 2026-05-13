import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/services/api";

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
}
