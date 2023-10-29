import { HiMap, HiChatBubbleLeft } from "react-icons/hi2";
import { FaRegCopyright } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="h-auto bg-white-700 border-t-[1px] border-black">

            <h2 className="flex justify-center  text-[25px] m-auto">Contact Me</h2>
            <div className="flex justify-between pb-48">
                <div className="flex gap-3 m-auto">
                    <HiMap className="m-auto" />
                    <div>
                        <h3>Location</h3>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className="flex gap-3 m-auto">
                    <HiChatBubbleLeft className="m-auto" />
                    <div>
                        <h3>Send mail To:</h3>
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