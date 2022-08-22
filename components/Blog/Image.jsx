import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
    const { alternativeText, width, height } = image?.data?.attributes

    // const loader = () => {
    //   return getStrapiMedia(image)
    // }

    return (
        <NextImage
            // loader={loader}
            layout="responsive"
            width={width || "100%"}
            height={height || "100px"}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
            background="#000"
        />
    )
}

export default Image
