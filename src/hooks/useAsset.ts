export default function useAsset() {
    const endPoint = import.meta.env.CMS_URL;
    const getImageUrl = (url: string) => {
        return `${endPoint}${url}`;
    }

    return {
        getImageUrl
    }
}