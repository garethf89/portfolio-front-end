"use client"

import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { Project } from "@schema"

export const ProjectContext = createContext<Project[]>([])

const ProjectProvider: FC<{
    value: Project[]
    children?: ReactNode
}> = ({ value, children }) => {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        setProjects(value)
    }, [value])

    return (
        <ProjectContext.Provider value={projects}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider

export const useProjects = () => {
    const projects = useContext(ProjectContext)
    return {
        projects,
    }
}
