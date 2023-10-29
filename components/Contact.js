import { HiMap, HiChatBubbleLeft } from "react-icons/hi2";
import { FaRegCopyright } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="h-[520px] bg-white-700 border-t-[1px] border-black">

            <h2 className="flex justify-center pt-5 text-[25px] m-auto">Contact Me</h2>
            <div className="grid place-content-center w-full gap-y-10 h-96">
                <div className="flex gap-3 m-auto">
                    <HiMap className="m-auto text-[25px]" />
                    <div>
                        <h3>Location</h3>
                        <p>Based in Nairobi, Kenya</p>
                    </div>
                </div>
                <div className="flex gap-3 m-auto">
                    <HiMap className="m-auto text-[25px]" />
                    <div>
                        <h3>Phone</h3>
                        <p>+254-(0)-713494521</p>
                    </div>
                </div>
                <div className="flex gap-3 m-auto">
                    <HiChatBubbleLeft className="m-auto text-[25px]" />
                    <div>
                        <h3>Email</h3>
                        <p>johndoe@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center m-auto py-5 bg-white-700 border-t-[1px] border-black">
                <div className="flex gap-1">
                    <p>Copyright</p>
                    <FaRegCopyright className="m-auto" />
                </div>
                <p>2023</p>
            </div>
        </section>
    )
}