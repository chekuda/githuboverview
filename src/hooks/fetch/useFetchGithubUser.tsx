import { useState } from "react";
import { serviceGetUserByUserName } from "../../services/user/user";
import type { GithubUser } from "../../services/user/user.types";

export const useFetchGithubUser = () => {
  const [gitHubUser, setGitHubUser] = useState<Partial<GithubUser>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleFetchUserData = async (userName: string) => {
    if (!userName) {
      setGitHubUser({});
      return;
    }
    try {
      setIsLoading(true);
      const data = await serviceGetUserByUserName(userName);
      setGitHubUser(data);
      setIsLoading(false);
      setError("");
    } catch (e) {
      setIsLoading(false);
      setGitHubUser({});
      setError("No User Found");
      console.log("error", e);
    }
  };
  return {
    handleSetUser: handleFetchUserData,
    isLoading,
    gitHubUser,
    error,
  };
};
