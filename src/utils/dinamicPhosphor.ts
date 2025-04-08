export default async function DinamicPhosphor(iconName: string) {
    const module = await import(/* @vite-ignore */`@phosphor-icons/react/${iconName}`);
    let result = { default: module[iconName] };
    return result;
};