import loading from "../../assets/loading.svg";
import { Header } from "../../features/Header";
import { useFetchGithubUser } from "../../hooks/fetch/useFetchGithubUser";
import { useFetchGithubRepos } from "../../hooks/fetch/useFetchGithubRepos";
import { PersonalData } from "../../features/PersonalData/PersonalData";
import { RepoInsights } from "../../features/RepoInsights";
import { BannerInfo, BANNER_TYPES } from "../../components/BannerInfo";

export const Home = () => {
  const { isLoading, handleSetUser, gitHubUser, error } = useFetchGithubUser();
  const { isLoading: isLoadingRepos, repoList } = useFetchGithubRepos(
    gitHubUser?.login
  );
  console.log("isLoading", isLoadingRepos);
  console.log("repoList", repoList);
  const {
    followers = 0,
    following = 0,
    location = "",
    avatar_url = "",
  } = gitHubUser || {};
  return (
    <>
      <Header onChangeUserName={handleSetUser} />
      {isLoading && (
        <div className="flex justify-center h-max mt-20">
          <img className="w-30" src={loading} alt="loading data" />
        </div>
      )}
      {!isLoading && !error && !gitHubUser?.login && (
        <BannerInfo type={BANNER_TYPES.initial} />
      )}
      {!isLoading && error && <BannerInfo type={BANNER_TYPES.noFound} />}
      {!isLoading && gitHubUser?.login && (
        <>
          <div className="pl-10 pr-10">
            <PersonalData
              followers={followers}
              following={following}
              avatar={avatar_url}
              location={location}
            />
            {!!repoList?.length && <RepoInsights repoList={repoList} />}
          </div>
        </>
      )}
    </>
  );
};
