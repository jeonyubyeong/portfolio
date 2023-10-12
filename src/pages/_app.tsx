import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "portfolio | web Dev",
  description: "안녕하세요, 정보보호학과 전유병입니다.",
  canonical: "https://portfolio-rho-snowy-84.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-rho-snowy-84.vercel.app/",
    title: "portfolio | web Dev",
    site_name: "portfolio | web Dev",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "portfolio | web Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "portfolio | web Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
