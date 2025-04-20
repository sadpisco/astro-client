
interface Page {
    __typename: string;
    name: string;
    slug: string;
    phosphorIcon: string;
    documentId: string;
    locale?: string;
    defaultLocale?: string;
};

//Get locales code
export function getLocalesCode(locales: []) {
    return locales.map(((lang: any) => lang.code));
};

//Parse lang from browser
export function parseLangCode(lang: string | undefined): any {
    if (!lang) {
        return 'en'
    };
    if (lang.includes('es')) {
        return 'es'
    };
    if (lang.includes('en')) {
        return 'en'
    };
};

export function getBlockFromManyLocales(data: any, blockName: string): any[] {
    if (!data) return [];
    const blocksToReturn = data.map((pageLang: any) => {
        const response = {
            lang: pageLang.data.locale,
            block: pageLang.data.blocks.find((block: any) => block.__component === blockName)
        };
        return response;
    });
    return blocksToReturn;
};

export function getBlockNames(data: any, defaultLocale: string) {
    const pageDefaultLocale = data.find((localesPages: any) => localesPages.data.locale === defaultLocale);
    return pageDefaultLocale.data.blocks.map((block: any) => block.__component);
};

interface PageWithLocales extends Page {
    locales: Record<string, string>;
}

export function combinePageData(inputOne: Page[][], inputTwo: Page[]): PageWithLocales[] {
    // Primero, creamos un mapa de las páginas por documentId para fácil acceso
    // const defaultPagesMap = new Map(
    //     inputTwo.map(page => [page.documentId, page])
    // );

    // Luego, creamos un mapa de las traducciones por documentId y locale
    const translationsMap = new Map<string, Record<string, string>>();

    inputOne.forEach(localeGroup => {
        localeGroup.forEach(page => {
            if (!translationsMap.has(page.documentId)) {
                translationsMap.set(page.documentId, {});
            }
            translationsMap.get(page.documentId)![page.locale!] = page.name;
        });
    });

    // Finalmente, combinamos la información
    return inputTwo.map(defaultPage => {
        const translations = translationsMap.get(defaultPage.documentId) || {};
        // Eliminamos la traducción del idioma por defecto ya que no la necesitamos
        delete translations[defaultPage.defaultLocale!];

        return {
            ...defaultPage,
            locales: translations
        };
    });
}

