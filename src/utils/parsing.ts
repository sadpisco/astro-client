
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

export function getAllBlocksFromPage(data: any) {
    if (!data) return [];
    // console.log('getAllBlocksFromPage', data);
};

