import Image from "next/image";

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width = {420} 
                height ={304}
                src = "https://www.swagencia.com.br/wp-content/uploads/2016/04/criacao-de-site-para-academia.jpg"
                alt="academia"
                className="object-cover rounded-lg"
                 />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                    width={20}
                    height={20}
                    alt =""
                    src="/images/icons/dev-svgrepo-com.svg" 
                    
                    />
                   Academia
                </h3>

                <p className="text-gray-400 my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos omnis incidunt recusandae fugit similique veniam voluptatem molestias eaque, minima temporibus libero. Velit totam non ipsum iusto, aliquam ducimus error quam praesentium expedita temporibus, similique eius! Reiciendis nisi eveniet sint? Voluptatibus cum velit id repellat consequatur magnam, officiis magni laboriosam!</p>

            </div>
        </div>
    );
}