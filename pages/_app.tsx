import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Layout from '../component/Layout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider> 
    
  );
};

export default App;