import loading from "../../assets/loading.svg";
import { Header } from "../../features/Header";
import { useFetchGithubUser } from "../../hooks/fetch/useFetchGithubUser";

export const Home = () => {
  const { isLoading, handleSetUser } = useFetchGithubUser();
  return (
    <>
      <Header onChangeUserName={handleSetUser} />
      {isLoading && (
        <div className="flex justify-center h-max mt-20">
          <img className="w-30" src={loading} alt="loading data" />
        </div>
      )}
    </>
  );
};
