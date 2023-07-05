import { useSession } from "next-auth/react";

export function useCheckUser() {
  const session = useSession();

  return session.data?.user ? true : false;
}
