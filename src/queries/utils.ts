import { ContentTypeCollection } from "contentful"

export const getSingleItem = (items: ContentTypeCollection) => {
    return items.items[0]
}
