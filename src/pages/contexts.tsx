import { createContext, useContext } from "react";
import type { User } from "../App";

export const UserContext = createContext<{
  users: User[];
  setUsers: (users: User[]) => void;
  index: number;
}>({
  users: [],
  setUsers: (users: User[]) => {
    console.log(users);
  },
  index: 0,
});

export const useUsers = () => useContext(UserContext);