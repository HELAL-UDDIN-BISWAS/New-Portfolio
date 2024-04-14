import Image from 'next/image'
import image from "../../../public/site1.png"
import image1 from "../../../public/site2.png"
import Link from 'next/link';
const Project = () => {
    return (
        <div className='max-w-6xl m-auto pb-10 flex items-center justify-center'>
            <div>
                <div className='shadow-sm shadow-white m-2 grid lg:grid-cols-2 sm:grid-cols-1 border border-white rounded py-5 px-4'>
                    <div className='grid-cols-1'>
                        <Image className='items-center justify-center'
                            src={image1}
                            width={550}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='grid-cols-1 ml-5 max-w-[500px]'>
                        <h3 className='text-2xl mb-4'><samp className='text-lime-600 text-2xl'>Top</samp>Tea | A Online Trading Platform (Team Project).</h3>
                        <p>Welcome to TOP | TEA, your ultimate destination for the finest selection of tea
                            and coffee. This site is responsive. Our site defines the User and Admin routes. Admin
                            adds new products and updates prevent products. any
                        </p>
                        <div className='flex gap-4 my-4'>
                            <p className='border-b border-sky-500'><Link href='https://streme-eight.vercel.app/'>Live Site</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-client-side?fbclid=IwAR3IKWQWThNtTbiCSfRc0n3yIFwQiAMPf6c8t18_F0JhapuBoi1hYTKLjK0'>Clint Code</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-server-side?fbclid=IwAR0_WLN0cwIRb41lErexmFrSDmWZMTXv346CQxgZcuqBy3B9kiEYW5kZiPc'>Server Code</Link></p>
                        </div>
                    </div>
                </div>
                <div className='shadow-sm shadow-white m-2 grid lg:grid-cols-2 sm:grid-cols-1 border border-white rounded py-5 px-4'>
                    <div className='grid-cols-1'>
                        <Image className='items-center justify-center'
                            src={image}
                            width={550}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='grid-cols-1 ml-5 max-w-[500px]'>
                        <h3 className='text-2xl mb-4'>NexTrade | A Online Trading Platform (Team Project).</h3>
                        <p>Create a robust and scalable video streaming platform that delivers high-
                            quality,seamless, and on-demand video content to users, providing an immersive and
                            engaging viewing experience. The platform should support a variety of devices and
                            screen sizes, ensuring accessibility for a diverse user base.
                        </p>
                        <div className='flex gap-4 my-4'>
                            <p className='border-b border-sky-500'><Link href='https://streme-eight.vercel.app/'>Live Site</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-client-side?fbclid=IwAR3IKWQWThNtTbiCSfRc0n3yIFwQiAMPf6c8t18_F0JhapuBoi1hYTKLjK0'>Clint Code</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-server-side?fbclid=IwAR0_WLN0cwIRb41lErexmFrSDmWZMTXv346CQxgZcuqBy3B9kiEYW5kZiPc'>Server Code</Link></p>
                        </div>
                    </div>
                </div>
                <div className='shadow-sm shadow-white m-2 grid lg:grid-cols-2 sm:grid-cols-1 border border-white rounded py-5 px-4'>
                    <div className='grid-cols-1'>
                        <Image className='items-center justify-center'
                            src={image}
                            width={550}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='grid-cols-1 ml-5 max-w-[500px]'>
                        <h3 className='text-2xl mb-4'>NexTrade | A Online Trading Platform (Team Project).</h3>
                        <p>Create a robust and scalable video streaming platform that delivers high-
                            quality,seamless, and on-demand video content to users, providing an immersive and
                            engaging viewing experience. The platform should support a variety of devices and
                            screen sizes, ensuring accessibility for a diverse user base.
                        </p>
                        <div className='flex gap-4 my-4'>
                            <p className='border-b border-sky-500'><Link href='https://streme-eight.vercel.app/'>Live Site</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-client-side?fbclid=IwAR3IKWQWThNtTbiCSfRc0n3yIFwQiAMPf6c8t18_F0JhapuBoi1hYTKLjK0'>Clint Code</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/sajalbiswas1/video-stream-server-side?fbclid=IwAR0_WLN0cwIRb41lErexmFrSDmWZMTXv346CQxgZcuqBy3B9kiEYW5kZiPc'>Server Code</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;