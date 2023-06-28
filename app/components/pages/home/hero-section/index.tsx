import Image from "next/image"
export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
         <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-[530px]:">
                    <p className="font-mono text-emerald-400">Oi , meu nome é</p>
                    <h2 className="text4xl font-medium mt-2"> Ingrid Gama </h2>

                   <p className="text-gray-400 my-6 text-sm sm:text-base">Oi meu nome é Ingrid gama eu sou Desenvolvedor Beck-And 
                      </p>

                <div>
                    techs
                </div>

                <div>
                    contato
                </div>
            </div>

                <Image
                className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover" 
                width={420}
                height={404}
                src="/images/profile-pic.png"
                alt="Foto Perfil Ingrid Gama"
                />
            </div>
        </section>
    )
}