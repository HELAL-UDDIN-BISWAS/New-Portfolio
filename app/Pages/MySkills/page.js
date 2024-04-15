"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
import 'swiper/css';
import image from "../../../public/html-5.png"
import image1 from "../../../public/css-3.png"
import image2 from "../../../public/javascript.png"
import image3 from "../../../public/react.gif"
import image4 from "../../../public/node.png"
import image5 from "../../../public/express.png"
import image6 from "../../../public/mongodb.png"
import Image from 'next/image';


const Skills = () => {
    return (
        <div className='max-w-6xl mx-auto'>

            <div>
                <Swiper
                    className='text-2xl hover:cursor-pointer text-center'
                    spaceBetween={50}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className=' border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>90%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image1}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>92%</h3>
                        <p className='my-4'>CSS 3</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image2}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>80%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image3}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>90%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image4}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>90%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image5}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>90%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
                        <Image
                            className='items-center justify-center text-center my-4 mx-auto'
                            src={image6}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        ></Image>
                        <h3>90%</h3>
                        <p className='my-4'>HTML 5</p>
                    </div></SwiperSlide>

                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;