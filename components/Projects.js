import { FaSquareGithub, FaArrowUpRightFromSquare } from "react-icons/fa6"

const projects = [
    {
        id: 1,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    {
        id: 2,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    {
        id: 3,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    {
        id: 4,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    {
        id: 5,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    {
        id: 6,
        name: 'Basic Tee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        description: 'Just a project',
        gitUrl: "https://github.com/Ngumi22",
        demoUrl: "https://github.com/Ngumi22"
    },
    // More projects...
]

export default function Projects() {
    return (
        <div className="p-10 border-b-[2px] border-t-[1px] border-black bg-white h-auto" id="projects">
            <h2 className="pb-10 text-center">My Projects</h2>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-auto gap-5">
                {projects.map((project) => (
                    <div className="card overflow-hidden h-auto border-black border-[2px] flex justify-between" key={project.id}>
                        <img src={project.imageSrc} alt={project.imageAlt} className="object-cover w-full h-48" />
                        <div className="card-body m-auto">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="flex justify-around gap-5 mt-4">
                                <a href={project.gitUrl} className="flex gap-1 cursor-pointer">
                                    Code <FaSquareGithub className="m-auto" />
                                </a>
                                <a href={project.demoUrl} className="flex gap-1 cursor-pointer">
                                    Demo <FaArrowUpRightFromSquare className="m-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}