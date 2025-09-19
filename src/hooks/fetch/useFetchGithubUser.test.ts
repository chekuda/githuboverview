import { renderHook, waitFor } from "@testing-library/react";
import * as services from "../../services/user/user";
import { useFetchGithubUser } from "./useFetchGithubUser";
import type { GithubUser } from "../../services/user/user.types";
import { act } from "react";

jest.mock("../../services/user/user");

describe("useFetchGithubUser", () => {
  describe("when service is succeeded", () => {
    it("should return the user and isLoading false", async () => {
      jest
        .spyOn(services, "serviceGetUserByUserName")
        .mockResolvedValue({ name: "jose" } as GithubUser);
      const { result } = renderHook(() => useFetchGithubUser());

      act(() => {
        result.current.handleSetUser("jose");
      });

      await waitFor(() => {
        expect(result.current).toEqual({
          isLoading: true,
          gitHubUser: undefined,
          error: "",
          handleSetUser: expect.any(Function),
        });
      });

      await waitFor(() => {
        expect(result.current).toEqual({
          isLoading: false,
          gitHubUser: { name: "jose" },
          error: "",
          handleSetUser: expect.any(Function),
        });
      });
    });
    it("should set loading false when error is fired", async () => {
      jest
        .spyOn(services, "serviceGetUserByUserName")
        .mockRejectedValue("my-mocked-error");

      const { result } = renderHook(() => useFetchGithubUser());

      act(() => {
        result.current.handleSetUser("jose");
      });

      await waitFor(() => {
        expect(result.current).toEqual({
          isLoading: false,
          gitHubUser: undefined,
          handleSetUser: expect.any(Function),
          error: "No User Found",
        });
      });
    });
  });
});
