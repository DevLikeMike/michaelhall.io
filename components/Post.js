import { MDXProvider } from "@mdx-js/react";
import BlogContainer from "@/components/elements/BlogContainer";
import Code from "@/components/elements/Code";
import H1 from "@/components/elements/H1";
import H2 from "@/components/elements/H2";
import Ul from "@/components/elements/Ul";
import A from "@/components/elements/A";
import Blockquote from "@/components/elements/Blockquote";
import Paragraph from "@/components/elements/Paragraph";
import Layout from "./Layout";

const components = {
  h1: H1,
  h2: H2,
  p: Paragraph,
  code: Code,
  a: A,
  ul: Ul,
  blockquote: Blockquote,
};

export default function Post({ children, title, keywords, description }) {
  return (
    <Layout
      title={`Blog | ${title}`}
      description={description}
      keywords={keywords}
    >
      <BlogContainer>
        <MDXProvider components={components}>{children}</MDXProvider>
      </BlogContainer>
    </Layout>
  );
}
