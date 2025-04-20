export type PageType = {
    __typename: string;
    name: string;
    slug: string;
    phosphorIcon: string;
    defaultLocale: string;
    documentId: string;
    locales: Record<string, string>;
}