import { Spacer } from "@primitives";
import { WpImageProps } from "@types";
import React from "react";

import { CallToAction } from "./CallToAction";
import { CallToActionProps } from "./CallToAction/CallToAction";
import { SearchInput } from "./SearchInput";
import { PageWrapper } from "./style";

export type ItemProps = {
  type?: string;
  title?: string;
  excerpt?: string;
  featuredImage?: WpImageProps;
  uri?: string;
  slug?: string;
};

interface IProps {
  items: ItemProps[];
  callToAction: CallToActionProps;
}
function HomeScreen({ items, callToAction }: IProps) {
  console.log("items:", items);

  return (
    <PageWrapper>
      <SearchInput />
      <Spacer height={[32, null, 40]} />
      <CallToAction {...callToAction} />
    </PageWrapper>
  );
}

export default HomeScreen;
