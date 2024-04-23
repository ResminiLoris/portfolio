"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { SkillData } from '@/app/constants'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { AnimatedBackground } from '@/app/components/AnimatedBackground'

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/bg-about-me.jpg)" }}
            className="h-screen w-screen flex items-center justify-around bg-cover bg-center"
        >
            {/* sx col */}
            <div className='flex flex-col gap-20 max-w-[60%] text-center items-center'>
                <div className='flex flex-col items-center gab-4'>
                    <h1 className='font-semibold text-white text-[50px] '>
                        About {" "}
                        <span className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#172050] to-[#3655c9]">
                            me
                        </span>
                    </h1>
                    <p className='text-gray-300 text-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem totam sint tempora hic provident beatae,
                        ab fugit voluptatibus quisquam aut praesentium, quas cum dolores nihil, obcaecati laudantium tempore facere esse!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt, esse doloribus ducimus sed nemo, ab optio aspernatur deleniti molestias itaque dolorem laboriosam iure alias quas? Molestias est itaque perferendis.
                        Optio sequi velit porro consectetur accusamus laboriosam libero suscipit blanditiis excepturi veritatis eum ad, soluta hic eius nisi totam mollitia, aliquam, quod ullam possimus labore id iste. Laudantium, dolores dolorum!
                    </p>
                </div>
                <Swiper
                    slidesPerView={8}
                    loop
                    autoplay={{
                        delay: 0,
                        // disableOnInteraction: false
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="max-w-[80%]"
                >
                    {SkillData.map((skill) =>
                        <SwiperSlide key={skill.name}>
                            <Image src={skill.Image} alt={skill.name} height={skill.height / 2} width={skill.width / 2} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

            {/* dx col */}
            <div className='flex flex-col gap-20 max-w-[40%] z-[5] text-center items-center'>
                <div className='flex flex-col items-center gab-4'>
                    <h1 className='font-semibold text-white text-[50px] '>
                        {"placeholder"}
                    </h1>

                </div>

            </div>
            {/* stars */}
            <Image src="/stars.png" alt="stars" width={300} height={300} className="absolute top-10 left-0 z-[10]" />

            <AnimatedBackground />

        </div>
    )
}

export default Page