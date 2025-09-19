export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepos {
  id: number;
  node_id: string;
  name: string;
  private: false;
  description: string;
  fork: false;
  url: string;
  updated_at: string;
  git_url: string;
  stargazers_count: number;
  forks_count: number;
}
