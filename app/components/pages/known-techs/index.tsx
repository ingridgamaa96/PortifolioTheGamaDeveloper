import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../../section-tittle"
import {KnowTech} from "./known-tech"



export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos"/>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({length:8}).map((_,index)=> (
                      <KnowTech key={index} tech={{
                        icon: <TbBrandNextjs/>,
                        name : 'Next.js',
                        startDate: '2022-09-06'
                    }} />
                ))}
            </div>
        </section>


    )
}