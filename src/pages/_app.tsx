import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClientProvider, QueryClient} from "@tanstack/react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}



const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
