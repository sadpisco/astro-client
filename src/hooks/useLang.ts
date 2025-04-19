import GET_LANGS from '@/graphql/queries/getLangs';
import client from "@/lib/apollo-client";
import { getLocalesCode } from '@/utils/parsing';

export default async function useLang() {
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

    async function fetchPageBlocksByLocale(documentId: string, code: string) {
        const endPoint = `${import.meta.env.LOCAL_CMS}/api/pages/${documentId}?populate[blocks][populate]=*&locale=${code}`;
        const response = await fetch(endPoint)
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
    };

    return { fetchLocales, fetchPageBlocksByLocale };
}
