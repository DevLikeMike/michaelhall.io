import { MDXProvider } from "@mdx-js/react";
import Code from "@/components/elements/Code";
import H1 from "@/components/elements/H1";
import Paragraph from "@/components/elements/Paragraph";
import Layout from "./Layout";
import IndexContainer from "@/components/elements/IndexContainer";

const components = {
  h1: H1,
  p: Paragraph,
  code: Code,
};

export default function BlogIndex({ children }) {
  return (
    <Layout>
      <IndexContainer>
        <MDXProvider components={components}>{children}</MDXProvider>
      </IndexContainer>
    </Layout>
  );
}
