"use client"
import Image from "next/image";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {


    return (

        <nav className="flex items-center justify-between p-6 px-5 shadow-sm border-b-[1px] fixed w-full bg-green-700 opacity-100">

            <div>
                <Link>
                    <Image src="/logo.png" alt="Logo" height={350} width={100} />
                </Link>
            </div>
            <div className="hidden md:flex">
                <ul className="flex gap-5 justify-between nav-item">
                    <li className="hover:bg-cyan-950 px-3 cursor-pointer p-2 hover:text-white rounded-sm">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-105}
                            duration={500}
                            delay={200}
                            spyThrottle={500}
                        >Home</Link>
                    </li>
                    <li className="hover:bg-cyan-950 px-3 cursor-pointer p-2 hover:text-white rounded-sm">
                        <Link
                            activeClass="false"
                            to="about"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-105}
                            duration={500}
                            delay={200}
                            spyThrottle={500}
                        >About</Link>
                    </li>
                    <li className="hover:bg-cyan-950 px-3 cursor-pointer p-2 hover:text-white rounded-sm">
                        <Link
                            activeClass="false"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-105}
                            duration={500}
                            delay={200}
                            spyThrottle={500}
                        >Projects</Link>
                    </li>
                    <li className="hover:bg-cyan-950 px-3 cursor-pointer p-2 hover:text-white rounded-sm">
                        <Link
                            activeClass="false"
                            to="skills"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-105}
                            duration={500}
                            delay={200}
                            spyThrottle={500}
                        >Skills</Link>
                    </li>
                    <li className="hover:bg-cyan-950 px-3 cursor-pointer p-2 hover:text-white rounded-sm">
                        <Link
                            activeClass="false"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-105}
                            duration={500}
                            delay={200}
                            spyThrottle={500}
                        >Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>

    )
}
