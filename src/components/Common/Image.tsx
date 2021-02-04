import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

import * as React from "react";

const Image = (props: GatsbyImageProps): React.ReactElement => {
    return <GatsbyImage {...props} />
}

export default Image
