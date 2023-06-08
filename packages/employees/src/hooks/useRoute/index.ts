import { Ziggy } from './routes';

export type Route = keyof typeof Ziggy.routes;

/**
 * Please DO NOT use this hook, use `useRouter` from `@php-beam/packages/frontend/src/hooks/useRouter`
 * @deprecated
 */
const useRoute = () => {
    return (name: Route, params: Record<string, string | number> = {}) => {
        const uri = Ziggy.routes[name]?.uri;

        if (!uri) {
            throw new Error(`Route ${name} does not exist`);
        }

        return (
            '/' +
            uri.replaceAll(/{([^}]+)}/g, (match, key) => String(params[key]) || match)
        ).replaceAll('//', '/');
    };
};

export default useRoute;
