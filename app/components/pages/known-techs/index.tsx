import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../../section-tittle"
import {KnowTech} from "./known-tech"



export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos"/>

            <div>
                <KnowTech tech={{
                    icon: <TbBrandNextjs/>,
                    name : 'Next.js',
                    startDate: '2022-09-06'
                }} />
            </div>
        </section>


    )
}