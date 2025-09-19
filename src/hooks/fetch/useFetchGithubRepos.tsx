import { useEffect, useState } from "react";
import { serviceGetUserRepoList } from "../../services/user/user";
import type { GitHubRepos } from "../../services/user/user.types";

export const useFetchGithubRepos = (userName?: string) => {
  const [repoList, setRepoList] = useState<GitHubRepos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFetchRepos = async () => {
    if (!userName || isLoading) return;
    try {
      setIsLoading(true);
      const data = await serviceGetUserRepoList(userName);
      setRepoList(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log("error", e);
    }
  };
  useEffect(() => {
    if (userName) {
      handleFetchRepos();
    }
  }, [userName]);
  return {
    isLoading,
    repoList,
  };
};
