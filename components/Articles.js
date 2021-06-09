import Article from "@/components/Article";
import articles from "../Data/articles";
import styled from "styled-components";

const ArticleList = styled.ul`
  margin: 0.5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ArticleItem = styled.li`
  margin: 1rem 0.2rem;
`;

export default function Articles() {
  return (
    <ArticleList>
      {articles.map((article) => (
        <ArticleItem key={article.slug}>
          <Article
            slug={article.slug}
            thumbnail={article.thumbnail}
            category={article.category}
            author={article.author}
            description={article.description}
            date={article.date}
          >
            {article.title}
          </Article>
        </ArticleItem>
      ))}
    </ArticleList>
  );
}
