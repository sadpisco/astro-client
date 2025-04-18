import useLang from '@/hooks/useLang';

export default async function usePage() {
    const { fetchLocales, fetchPageByLocale } = await useLang();


    async function fetchPageByDocId(documentId: string = "", page: string = "") {
        const locales = await fetchLocales();
        if (locales?.length) {
            const result = await Promise.all(
                locales.map(async (code: string) => {
                    try {
                        return await fetchPageByLocale(documentId, code)
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
    }
}