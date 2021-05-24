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
        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
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
