import { serviceGetUserByUserName } from "./user";
import axios from "axios";

jest.mock("axios");

describe("serviceGetUserByUserName", () => {
  describe("when success call", () => {
    it("should return the userData", async () => {
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { name: "jose" },
      });

      const user = await serviceGetUserByUserName("mockUser");

      expect(user).toEqual({ name: "jose" });
    });
    it("should return the error on fail", async () => {
      axios.get = jest.fn().mockRejectedValue({ message: "custom error" });

      try {
        await serviceGetUserByUserName("mockUSer");
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });
  });
});
