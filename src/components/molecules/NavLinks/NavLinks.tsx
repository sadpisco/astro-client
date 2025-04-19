import Button from "@/components/atoms/Button/Button";
import DinamicIcon from "@/components/atoms/DinamicIcon";
import { type PageType } from "@/types/pages";

interface NavLinksProps {
    pages: PageType[];
}

export default function NavLinks({ pages }: NavLinksProps) {
    return (
        <div>
            {pages.map((page: PageType) => {
                return (
                    <a href={`/${page.slug === "home" ? "" : page.slug}`}>
                        <Button
                            variant="link"
                            className="dark:text-white dark:hover:text-light-200 gap-2"
                        >
                            <DinamicIcon
                                iconname={page.phosphorIcon}
                                className="size-5"
                                weight="bold"
                            />
                            {page.name}
                        </Button>
                    </a>
                );
            })}
        </div>
    )
};