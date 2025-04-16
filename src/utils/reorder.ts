import { type PageType } from "@/types/pages";
import PackageLodash from "lodash";

const { isEmpty } = PackageLodash;

export const orderByHome = function (pages: PageType[]) {
    if (isEmpty(pages)) return [];
    return [...pages].sort((a, b) => (a.name === "Home" ? -1 : b.name === "Home" ? 1 : 0));
};

