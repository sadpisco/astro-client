import GET_LANGS from '@/graphql/queries/getLangs';
import client from "@/lib/apollo-client";
import { getLocalesCode } from '@/utils/parsing';

export default async function usePage() {

    async function fetchPageByLocale(documentId: string, code: string) {
        const endPoint = `${import.meta.env.LOCAL_CMS}/api/pages/${documentId}?populate[blocks][populate]=*&locale=${code}`;
        const response = await fetch(endPoint)
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
    };

    async function fetchLocales() {
        try {
            const { data: langs } = await client.query({
                query: GET_LANGS,
            });
            return getLocalesCode(langs.i18NLocales);
        } catch (error) {
            console.log(error);
        }
    };

    async function fetchPageByDocId(documentId: string = "") {
        const locales = await fetchLocales();
        if (locales?.length) {
            const result = await Promise.all(
                locales.map(async (code: string) => {
                    try {
                        return await fetchPageByLocale(documentId, code)
                    } catch (error) {
                        console.error(`Locale "${code}" has not been found in documentId "${documentId}".`);
                    }
                }
                ));
            return result;
        }
    };
    return {
        fetchPageByDocId,
    }
}