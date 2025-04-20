import GET_ALL_PAGES from "@/graphql/queries/getAllPages";
import useLang from '@/hooks/useLang';
import client from "@/lib/apollo-client";
import { combinePageData } from "@/utils/parsing";
import { orderByHome } from '@/utils/reorder';

export default async function usePage() {

    const { fetchLocales, fetchPageBlocksByLocale } = await useLang();

    async function fetchAllPages() {
        // 1. Get all locales
        const locales = await fetchLocales();

        // 2. Get all pages from all locales
        async function getPagesFromLocales() {
            const allPagesFromAllLocales = await Promise.all(
                locales.codes.map(async (code: string) => {
                    const { data } = await client.query({
                        query: GET_ALL_PAGES,
                        variables: {
                            locale: code
                        }
                    });
                    return data.pages.map((page: any) => {
                        return {
                            ...page,
                            locale: code
                        }
                    })
                })
            );
            return allPagesFromAllLocales;
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
            const dataPlusLocale = data.pages.map((page: any) => {
                return {
                    ...page,
                    defaultLocale: locales.codes[0],
                }
            });

            return {
                pages: combinePageData(await getPagesFromLocales(), orderByHome(dataPlusLocale)),
                defaultLocale: locales.codes[0],
                allPagesLocales: await getPagesFromLocales(),
                error: null
            };
        } catch (error) {
            console.error("Error fetching pages - usePage.ts");
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