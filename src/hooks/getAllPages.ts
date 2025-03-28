import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import client from "@/lib/apollo-client";

export default async function getPages() {
  try {
    const { data } = await client.query({
      query: GET_ALL_PAGES,
    });
    return {
      pages: data.pages,
      error: null
    };
  } catch (error) {
    console.log("Error", error);
    return {
      pages: [],
      error: error
    };
  }
}
