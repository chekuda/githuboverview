import axios, { AxiosError } from "axios";
import { type GithubUser } from "./user.types";

export const serviceGetUserByUserName = async (
  userName: string
): Promise<GithubUser> => {
  try {
    const response = await axios.get<GithubUser>(
      `https://api.github.com/users/${userName}`
    );
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    throw new Error(`Error on getting github user: ${error.message}`);
  }
};
