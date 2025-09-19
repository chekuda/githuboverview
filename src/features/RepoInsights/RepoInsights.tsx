import { type GitHubRepos } from "../../services/user/user.types";

type RepoInsights = {
  repoList: GitHubRepos[];
};

export const RepoInsights = ({ repoList }: RepoInsights) => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-4xl font-bold">GitHub</h2>
      <p>How people build sofware</p>
      <div className="divider divide-amber-50 w-full h-2"></div>
      <div className="flex flex-wrap gap-5 flex-1">
        {repoList.map((repo) => {
          return (
            <div
              key={repo.id}
              className="card bg-gray-800 shadow-sm flex-[1_1_300px]"
            >
              <div className="card-body">
                <h3 className="card-title">{repo.name}</h3>
                <p className="max-h-5 overflow-hidden">{repo.description}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
