import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import client from "@/lib/apollo-client";
import { orderByHome } from '@/utils/reorder';

export default async function getPages() {
  try {
    const { data } = await client.query({
      query: GET_ALL_PAGES,
    });
    // console.log("pages", data);
    return {
      pages: orderByHome(data.pages),
      error: null
    };
  } catch (error) {
    console.error("Error fetching pages", error);
    return {
      pages: [],
      error
    };
  }
}
