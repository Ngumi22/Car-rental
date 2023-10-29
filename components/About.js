import Image from "next/image"
import { FaSquareFacebook, FaSquareGithub, FaSquareInstagram, FaSquareWhatsapp, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";


export default function About() {
    return (
        <section id="about" className="block justify-between h-[500px] border-t-[2px] border-red-600 bg-white-500">
            <div className="text-center py-10">
                <h1 className="text-[25px]">About Me</h1>
            </div>
            <div className="flex justify-between">
                <div className="flex-1 hidden sm:block p-5">
                    <Image src='/logo.png' alt="about" className="m-auto" height={400} width={400} />
                </div>
                <div className="flex-1 p-5">
                    <p className="text-[25px] md:text-[30px] my-5 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.400),theme(colors.red.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">A dedicated Front-end Developer</p>
                    <p>
                        As a Web Designer & Web Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                    <div className="pt-4">
                        <ul className="flex gap-4 text-[25px]">
                            <li><a><FaSquareGithub /></a></li>
                            <li><a><FaSquareFacebook /></a></li>
                            <li><a><FaSquareInstagram /></a></li>
                            <li><a><FaSquareWhatsapp /></a></li>
                            <li><a><FaXTwitter /></a></li>
                            <li><a><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}