import Image from 'next/image';
import React from 'react';
import img from './../../../public/Helal.png'

const Banner = () => {
    return (
        <div className="">
            <div className='grid grid-cols-2'>
                <div className='text-xl '>
                    <div>
                    Hi I'M MD HELAL UDDIN BISWAS <br></br>
                    MERN Stack Developer
                    </div>
                </div>
                <div className='flex items-center justify-center'><Image
                    src={img}
                    width={450}
                    height={450}
                    alt="Picture of the author"
                /></div>

            </div>
        </div>
    );
};

export default Banner;