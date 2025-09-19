import { BANNER_TYPES, BANNER_TYPE_DATA } from "./constants";

type BannerInfoType = {
  type: keyof typeof BANNER_TYPES;
};
export const BannerInfo = ({ type }: BannerInfoType) => {
  const { title, message } = BANNER_TYPE_DATA[type];
  return (
    <div className="hero pt-30">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{message}</p>
        </div>
      </div>
    </div>
  );
};
