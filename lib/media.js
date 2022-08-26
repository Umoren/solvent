import { getStrapiURL } from "../lib/api";

export function getStrapiMedia(media) {
    const { url } = media.data.attributes
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
    return imageUrl
}