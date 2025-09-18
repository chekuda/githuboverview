import { useState, useCallback, type ChangeEvent, useMemo } from "react";
import { debounce } from "../../utils/debounce";

type HeaderType = {
  onChangeUserName: (userName: string) => void;
};

export const Header = ({ onChangeUserName }: HeaderType) => {
  const [userName, setUserName] = useState<string>("");

  const debouncedChangeUser = useMemo(
    () => debounce(onChangeUserName, 500),
    [onChangeUserName]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event?.currentTarget || {};

      setUserName(value);
      debouncedChangeUser(value);
    },
    [debouncedChangeUser]
  );

  return (
    <div className="h-30 bg-[url(/src/assets/hero-image-github-profile-sm.jpg)] bg-bottom md:h-50 md:bg-[url(/src/assets/hero-image-github-profile.jpg)] ">
      <div className="flex justify-center max-w-[500px]">
        <div className="relative m-4">
          <input
            name="username"
            placeholder="username"
            type="text"
            value={userName}
            className="input pl-9"
            onChange={handleChange}
          />
          <span className="absolute bg-[url(/src/assets/Search.svg)] h-100% w-6 h-5 left-2 top-2 z-index:2"></span>
        </div>
      </div>
    </div>
  );
};
