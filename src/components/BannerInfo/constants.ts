export const BANNER_TYPES = {
  noFound: "noFound",
  initial: "initial",
} as const;

export const BANNER_TYPE_DATA = {
  noFound: {
    name: "noFound",
    title: "User no found",
    message: "Please try another user",
  },
  initial: {
    name: "initial",
    title: "Search for any GitHub user",
    message: "Which user do you want to stalk?",
  },
};
