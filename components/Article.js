import styled from "styled-components";
import Link from "next/link";
import Sub from "./elements/Sub";

const ArticleContainer = styled.div`
  height: 28rem;
  background-color: #fff;
  max-width: 25rem;
  position: relative;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
`;

const ThumbContainer = styled.div`
  width: 100%;
  height: 12rem;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 18rem;
  padding: 3rem 1rem 1rem;
`;

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

const ContentPara = styled.p`
  margin-top: 1rem;
`;

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  position: absolute;
  border-radius: 50%;
  top: calc(42% - 2.5rem);
  left: 2rem;
`;

const Category = styled.span`
  background-color: #eea511;
  color: #fff;
  padding: 0.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 8px;
`;

const ReadMore = styled.a`
  display: block;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Article = ({
  children,
  slug,
  author,
  thumbnail,
  category,
  description,
}) => {
  return (
    <ArticleContainer className='flex col'>
      <Link href={`/blog/${slug}`}>
        <ThumbContainer>
          <img src={thumbnail} alt='thumbnail' />
        </ThumbContainer>
      </Link>
      <ContentContainer>
        <Avatar src={"/images/personalPic.jpg"} />
        <Category>{category}</Category>
        <Link href={`/blog/${slug}`}>
          <StyledLink>{children}</StyledLink>
        </Link>
        <ContentPara>{description}</ContentPara>
        <Sub>{author}</Sub>
        <Link href={`/blog/${slug}`}>
          <ReadMore>Read More</ReadMore>
        </Link>
      </ContentContainer>
    </ArticleContainer>
  );
};

export default Article;
