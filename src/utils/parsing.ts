export function getLocalesCode(locales: []) {
    return locales.map(((lang: any) => lang.code));
};