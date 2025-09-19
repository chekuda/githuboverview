import { DataBadge, type DataBadgeProps } from "../../components/DataBadge";

type PersonalDataType = {
  followers: string | number | null;
  following: string | number | null;
  avatar: string;
  location: string | null;
};

export const PersonalData = ({
  followers,
  following,
  location,
  avatar,
}: PersonalDataType) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="card p-3 bg-gray-900 inline-block -mt-10 mr-15 w-30 mb-5">
        <figure>
          <img src={avatar} className="bg-black" />
        </figure>
      </div>
      {Object.entries({ followers, following, location }).map(
        ([title, value]) => {
          return (
            <DataBadge
              key={title}
              title={title as DataBadgeProps["title"]}
              data={value}
            />
          );
        }
      )}
    </div>
  );
};
