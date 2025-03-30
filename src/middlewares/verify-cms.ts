import getPages from '@/hooks/getAllPages';
import { defineMiddleware } from 'astro:middleware';
import LodashPackage from 'lodash';

const { isEmpty } = LodashPackage;

export const onRequest = defineMiddleware(async (context, next) => {
    if (context.url.pathname === '/404') {
        return next();
    };
    const { pages } = await getPages();
    if (isEmpty(pages)) {
        return new Response(null, {
            status: 302,
            headers: {
                'Location': '/404'
            }
        });
    };
    return next();
});

