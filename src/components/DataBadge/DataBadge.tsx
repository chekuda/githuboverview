import { BADGED_TITLES } from "./constants";

export type DataBadgeProps = {
  title: keyof typeof BADGED_TITLES;
  data: string | number | null;
};
export const DataBadge = ({ title, data }: DataBadgeProps) => {
  return (
    <div>
      <div className="badge badge-neutral badge-xl mb-3 mr-3 mt-3 p-5 capitalize">
        <span>{title}</span>
        <span className="divider divider-start divider-accent divider-vertical" />
        <span>{data}</span>
      </div>
    </div>
  );
};
