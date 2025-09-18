import { useState } from "react";
import { serviceGetUserByUserName } from "../../services/user/user";
import type { GithubUser } from "../../services/user/user.types";

export const useFetchGithubUser = () => {
  const [user, setUser] = useState<GithubUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFetchUserData = async (userName: string) => {
    if (!userName) return;
    try {
      setIsLoading(true);
      const data = await serviceGetUserByUserName(userName);
      setUser(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log("error", e);
    }
  };
  return {
    handleSetUser: handleFetchUserData,
    isLoading,
    user,
  };
};
