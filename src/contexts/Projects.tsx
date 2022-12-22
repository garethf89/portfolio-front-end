import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { IProjectFields } from "../../@types/generated/contentful"

export const ProjectContext = createContext<IProjectFields[]>([])

const ProjectProvider: FC<{
    value: IProjectFields[]
    children?: ReactNode
}> = ({ value, children }) => {
    const [projects, setProjects] = useState([])

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
