import { MainColumn } from "@primitives";
import { styled } from "@theme";

export const PageWrapper = styled(MainColumn, {
  paddingY: "24px",
  "@sm": {
    paddingY: "40px",
  },
  "@md": {
    paddingY: "80px",
  },
});
