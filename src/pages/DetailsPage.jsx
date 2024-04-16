import { useLocation, useParams } from "react-router-dom";
import { getByID } from "../queries/getByID";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

export const DetailsPage = () => {
  const { id } = useParams();

  let baseUrl = `https://api-eu-west-2.hygraph.com/v2/clutfuhnv12or07wbrgkrwtvm/master`;

  const { data, error, isLoading } = useQuery({
    queryKey: ["articleDetails", id],
    queryFn: async () =>
      request(baseUrl, getByID, {
        articleID: id,
      }),
  });

  if (isLoading) return <p>Loading...</p>;

  console.log(id);
  console.log("Vores data", data);

  return (
    <div>
      <section>
        <h1>{data.article.headline}</h1>
        <p>{data.article.markdownContent}</p>
      </section>
    </div>
  );
};
