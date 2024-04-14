"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
import 'swiper/css';
import image from "../../../public/html-5.png"
import Image from 'next/image';

const Skills = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            my Skills page
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className='border border-white rounded-sm items-center justify-center text-center'>
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
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;