import Image from 'next/image'
import image from "../../../public/site1.png"
import image1 from "../../../public/site2.png"
import image2 from "../../../public/blog.png"
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
                        <h3 className='text-2xl mb-4'><samp className='text-lime-600 text-2xl'>Top</samp>Tea | A Online E-commerce site.</h3>
                        <p>Create a robust and scalable video streaming platform that delivers high-
                            quality,seamless, and on-demand video content to users, providing an immersive and

                            engaging viewing experience. The platform should support a variety of devices and screen sizes,
                            ensuring accessibility for a diverse user base.
                        </p>
                        <div className='flex gap-4 my-4'>
                            <p className='border-b border-sky-500'><Link href='https://tea-and-coffee-16045.web.app/'>Live Site</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/HELAL-UDDIN-BISWAS/tea-coffee-clint'>Clint Code</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/HELAL-UDDIN-BISWAS/tea-coffee-server'>Server Code</Link></p>
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
                        <h3 className='text-2xl mb-4'>Strame | A Online video Strame Platform (Team Project).</h3>
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
                            src={image2}
                            width={550}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='grid-cols-1 ml-5 max-w-[500px]'>
                        <h3 className='text-2xl mb-4'>Blog Platform </h3>
                        <p>This Blog site. you can see the blog and add a wishlist page to your choice of blog. You
can read any time your wishlist blog.
                        </p>
                        <div className='flex gap-4 my-4'>
                            <p className='border-b border-sky-500'><Link href='https://materialistic-place.surge.sh/'>Live Site</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/HELAL-UDDIN-BISWAS/Blog-Site-Clint'>Clint Code</Link></p>
                            <p className='border-b border-sky-500'><Link href='https://github.com/HELAL-UDDIN-BISWAS/Blog-Site-Server'>Server Code</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;