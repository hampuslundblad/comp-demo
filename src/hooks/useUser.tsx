import { useQuery, useQueryClient } from "@tanstack/react-query";
import useLocalStorage from "./useLocalStorage";

const USER_KEY = "user";

function useUser() {
  const { getItem, setItem } = useLocalStorage();
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: [USER_KEY],
    queryFn: () => getItem(USER_KEY),
    initialData: getItem(USER_KEY),
  });

  const setUser = (username: string) => {
    setItem(USER_KEY, username);
    queryClient.setQueryData([USER_KEY], username);
  };

  return { user, setUser };
}

export { useUser };
