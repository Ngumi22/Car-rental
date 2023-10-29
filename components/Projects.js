const projects = [
    {
        id: 1,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    {
        id: 2,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    {
        id: 3,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    {
        id: 4,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    {
        id: 5,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    {
        id: 6,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project'
    },
    // More projects...
]

export default function Projects() {
    return (
        <div className="p-10 border-b-[2px] border-t-[1px] border-black bg-white h-auto" id="projects">
            <h2 className="pb-10 text-center">My Projects</h2>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-auto gap-5" >


                {projects.map((project) => (
                    <div className="card h-auto border-black border-[2px] flex justify-around">
                        <img src={project.imageSrc} alt={project.imageAlt} height={300} width={400} className="object-cover w-1/2 hover:scale-104 overflow-hidden" />
                        <div className="card-body m-auto">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>

                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}