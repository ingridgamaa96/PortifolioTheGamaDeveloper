import {ReactNode} from "react"
type KnowTechProps ={
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}
export const KnowTech = ({tech}: KnowTechProps) => {
    return (
        <div>
            <div>
                <p>{tech.name}</p>
                {tech.icon}
            </div>
            <span></span>
        </div>
    )
}