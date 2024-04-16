import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../queries/getAllNews";
import request from "graphql-request";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import style from "./Frontpage.module.scss";
import { getCategoryNews } from "../queries/getCategoryNews";
import { useContext } from "react";
import { LinkContext } from "../context/LinkContext";

export const FrontPage = () => {
  const { selectedCategory } = useContext(LinkContext);

  let baseUrl = `https://api-eu-west-2.hygraph.com/v2/clutfuhnv12or07wbrgkrwtvm/master`;

  const { data, error, isLoading } = useQuery({
    queryKey: ["allNews", selectedCategory],
    queryFn: async () =>
      request(baseUrl, getCategoryNews, {
        category: selectedCategory.toLowerCase(),
      }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className={style.articleContainer}>
      {data.articles.map((article) => {
        return (
          <ArticleCard
            headline={article.headline}
            text={article.markdownContent}
            date={article.date}
            author={"Kasper"}
            imgUrl={article.image?.url}
            imgAlt={article?.headline}
            id={article.id}
          />
        );
      })}
    </section>
  );
};
