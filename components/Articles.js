import Article from "@/components/Article";
import articles from "../Data/articles";
import styled from "styled-components";

const ArticleList = styled.ul`
  margin: 0.5rem 0;
  display: flex;
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
          >
            {article.title}
          </Article>
        </ArticleItem>
      ))}
    </ArticleList>
  );
}
