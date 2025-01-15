import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import client from "@/lib/apollo-client";

export default async function getPages() {
  const { data } = await client.query({
    query: GET_ALL_PAGES,
  });
  return {
    pages: data.pages.map((element: any) => element.name),
    raw: data.pages,
  };
}
