import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import useLang from '@/hooks/useLang';
import client from "@/lib/apollo-client";
import { orderByHome } from '@/utils/reorder';

export default async function usePage() {

    const { fetchLocales, fetchPageBlocksByLocale } = await useLang();

    async function fetchAllPages() {
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
        };
    };

    async function fetchPageByDocId(documentId: string = "", page: string = "") {
        const locales = await fetchLocales();
        if (locales?.length) {
            const result = await Promise.all(
                locales.map(async (code: string) => {
                    try {
                        return await fetchPageBlocksByLocale(documentId, code)
                    } catch (error) {
                        console.error(`Locale "${code}" has not been found in page: "${page}", documentId: "${documentId}".`);
                    }
                }
                ));
            return result;
        }
    };
    return {
        fetchPageByDocId,
        fetchAllPages
    }
}