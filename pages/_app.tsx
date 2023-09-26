// import { AppProps } from "next/app";

// const App = ({ Component, pageProps }: AppProps) => {
//   return <Component {...pageProps} />;
// };

// export default App;

import { Session } from "next-auth";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

type AppPropsType = AppProps<{ session: Session }>;

const App = ({ Component, pageProps }: AppPropsType) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
