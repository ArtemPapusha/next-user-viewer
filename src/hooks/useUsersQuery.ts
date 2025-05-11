import { User } from "@/types/app"
import { useQuery } from "@tanstack/react-query"

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

      return res.json()
    },
  })
}
