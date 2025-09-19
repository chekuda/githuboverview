import { renderHook, waitFor } from "@testing-library/react";
import * as services from "../../services/user/user";
import { useFetchGithubRepos } from "./useFetchGithubRepos";
import type { GitHubRepos } from "../../services/user/user.types";

jest.mock("../../services/user/user");

describe("useFetchGithubRepos", () => {
  describe("when service is succeeded", () => {
    it("should return the user and isLoading false", async () => {
      jest
        .spyOn(services, "serviceGetUserRepoList")
        .mockResolvedValue([{ name: "myrepo" }] as GitHubRepos[]);
      const { result } = renderHook(() => useFetchGithubRepos("jose"));

      await waitFor(() => {
        expect(result.current).toEqual({
          isLoading: false,
          repoList: [{ name: "myrepo" }],
        });
      });
    });
    it("should set loading false when error is fired", async () => {
      jest
        .spyOn(services, "serviceGetUserRepoList")
        .mockRejectedValue("my-mocked-error");

      const { result } = renderHook(() => useFetchGithubRepos("jose"));

      await waitFor(() => {
        expect(result.current).toEqual({
          isLoading: false,
          repoList: [],
        });
      });
    });
  });
});
