import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Article = ({ children, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default Article;
