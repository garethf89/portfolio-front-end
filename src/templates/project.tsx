import { IProjectFields } from "../../@types/generated/contentful"
import React from "react"
import { graphql } from "gatsby"

interface ProjectProps {
    id: string
    data: {
        page: IProjectFields
    }
}

const ProjectTemplate = ({ id, data }: ProjectProps): React.ReactElement => {
    const { title, slug } = data.page

    return <div>{title}</div>
}

export const query = graphql`
    query($id: String!) {
        page: contentfulProject(id: { eq: $id }) {
            id
            title
            slug
        }
    }
`
export default ProjectTemplate
