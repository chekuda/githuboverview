import { render, screen } from "@testing-library/react";
import { DataBadge } from "./DataBadge";
import { BADGED_TITLES } from "./constants";

describe("DataBadge", () => {
  describe("when data is passed", () => {
    it("should display the badge with right data", () => {
      const props = {
        title: BADGED_TITLES.followers,
        data: 1235,
      };
      render(<DataBadge {...props} />);

      expect(screen.getByText(props.title)).toBeInTheDocument();
      expect(screen.getByText(props.data)).toBeInTheDocument();
    });
  });
});
