import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContectUs = () => {
    return (
        <div className='grid md:grid-cols-2 max-w-6xl m-auto pb-10 '>
           <div className="">
            <div className="flex m-3 items-center gap-4 text-xl"><FaLocationDot /> Khulna, Kushtia, Bangladesh</div>
            <div className="flex m-3 items-center  gap-4 text-xl">
            <FaPhoneAlt /> +8801858179115(WhatsApp)
            </div>
            <div className="flex m-3 items-center  gap-4 text-xl">
            <HiOutlineMail /> mdhelal6775@gmail.com
            </div>
           </div>
           <div>
           <form className=''>
                <div className=''>
                    <div className="w-full">
                        <label className='block'>
                            <span>Name</span>
                        </label>
                        <input type="text" className="md:w-96 px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Name' required />
                    </div>
                    <div className="w-full">
                        <label className='block'>
                            <span>Email</span>
                        </label>
                        <input type="email"  className="md:w-96 px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Message</span>
                        </label>
                        <textarea  className="md:w-96  px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Message' required />
                    </div>
                </div>
                <button className="py-3 bg-primary-500 hover:bg-primary-600 text-white px-5 rounded my-2 ">SignUp</button>
            </form>
           </div>
        </div>
    );
};

export default ContectUs;