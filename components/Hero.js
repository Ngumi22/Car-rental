import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"


export default function Hero() {
    return (
        <section className="flex justify-between h-[90vh]" id="home">
            <div className='m-auto'>

                <p className='text-[20px]'>Hi, I'm Peter Mwaura. </p>
                <p>A Freelance Web Developer</p>
                <span className='text-green-400 text-[35px] hover:text-blue-600 cursor-pointer'>Based in Nairobi, Kenya</span>
                <div className='flex gap-2 mt-4'>
                    <Link href="https://github.com/Ngumi22">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/peterngumimwaura">
                        <FaLinkedinIn />
                    </Link>
                    <Link href="https://twitter.com/ngumi21">
                        <FaXTwitter />
                    </Link>
                </div>
            </div>
            <div className='m-auto'>
                <Image
                    src="/logo.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />
            </div>
        </section>
    )
}
