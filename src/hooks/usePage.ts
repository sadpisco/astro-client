import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import useLang from '@/hooks/useLang';
import client from "@/lib/apollo-client";
import { orderByHome } from '@/utils/reorder';

export default async function usePage() {

    const { fetchLocales, fetchPageBlocksByLocale } = await useLang();

    async function fetchAllPages() {
        // Get all locales
        const locales = await fetchLocales();

        // Get all pages from all locales
        async function getPagesFromLocales() {
            const allPagesFromAllLocales = await Promise.all(
                locales.codes.map(async (code: string) => {
                    const { data } = await client.query({
                        query: GET_ALL_PAGES,
                        variables: {
                            locale: code
                        }
                    });
                    return data;
                })
            )
            return allPagesFromAllLocales;
        };

        // Get all slugs from all locales (unrepeated)
        async function allLangsSlugs() {
            const allPagesFromAllLocales = await getPagesFromLocales();
            const slugsFromLocales = allPagesFromAllLocales.map((pages: any) => {
                return pages.pages.map((page: any) => {
                    return page.slug
                });
            });
            return Array.from(new Set(slugsFromLocales.flat()));
        };

        //Principal function to fetch all pages from default Strapi's locale
        try {
            const { data } = await client.query({
                query: GET_ALL_PAGES,
                variables: {
                    //locales.codes[0] === Strapi's default locale
                    locale: locales.codes[0]
                }
            });
            return {
                pages: orderByHome(data.pages),
                allPagesLocales: await getPagesFromLocales(),
                allLangsSlugs: await allLangsSlugs(),
                error: null
            };
        } catch (error) {
            console.error("Error fetching pages at usePage.ts", error);
            return {
                pages: [],
                allPagesLocales: [],
                allLangsSlugs: [],
                error
            };
        };
    };

    async function fetchPageByDocId(documentId: string = "", page: string = "") {
        const locales = await fetchLocales();
        if (locales?.codes?.length) {
            const result = await Promise.all(
                locales.codes.map(async (code: string) => {
                    try {
                        return await fetchPageBlocksByLocale(documentId, code)
                    } catch (error) {
                        console.error(`Locale "${code}" has not been found in page: "${page}", documentId: "${documentId}".`);
                    }
                }
                ));
            return result;
        };
    };
    return {
        fetchPageByDocId,
        fetchAllPages
    };
};