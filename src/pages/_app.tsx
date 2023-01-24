import { ApolloProvider } from "@apollo/react-hooks";
import WordPressProvider from "@utils/WordPressProvider";
import type { AppProps } from "next/app";
import { useState } from "react";
import { client } from "src/utils/apolloClient";

import globalStyles from "@theme/globalStyles";

interface AppPageProps extends AppProps {
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppPageProps) {
  globalStyles();

  const { post, siteOptions } = pageProps;

  const [wp] = useState({
    siteOptions,
  });

  const componentProps = {
    post: {
      ...post,
      siteOptions,
    },
  };

  return (
    <ApolloProvider client={client}>
      <WordPressProvider value={wp}>
        <Component {...componentProps} />
      </WordPressProvider>
    </ApolloProvider>
  );
}

export default MyApp;
