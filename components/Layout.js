// React/next imports
import Head from "next/head";
// Component imports
import Header from "./navigation/Header";
// Style imports

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: "Michael Hall | Web Developer",
  description:
    "Web Developer located in the Columbus, Ohio area. Primariliy working with Reactjs/NextJs to find web solutions for small businesses.",
  keywords:
    "React, Redux, Nextjs, SEO, Web Developer, Portfolio, Blog, Styled-Components",
};
