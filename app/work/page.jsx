"use client";

import { motion } from 'framer-motion';

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: "frontend",
    title: "GPT 3",
    desc: "This project is a responsive web application built with React.js, styled with SCSS for modern and modular CSS, and powered by JavaScript for dynamic functionality. It features a clean UI, smooth animations, and efficient state management to deliver an engaging user experience. The app is deployed on Netlify, showcasing seamless integration and fast performance.",
    stack: [{ name: "React.Js" }, { name: "SCSS" }, { name: "JavaScript" },],
    image: '/assets/work/thumb1.png',
    live: 'https://gpt3-main.netlify.app/',
    github: 'https://github.com/Saurabh-101/GPT3',
  },
  {
    num: '02',
    category: "fullstack",
    title: "Fashion Nation",
    desc: "Fashion Nation is a modern e-commerce platform built with Next.js, offering a seamless shopping experience for fashion enthusiasts. The platform features product listings, cart functionality, wishlists, and secure checkout processes.",
    stack: [{ name: "React.Js" }, { name: "Tailwindcss" }, { name: "JavaScript" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MOngoDB" },],
    image: '/assets/work/thumb2.png',
    live: 'https://fashion-nation.vercel.app/',
    github: 'https://github.com/Saurabh-101/Fashion-Nation',
  },
  {
    num: '03',
    category: "fullstack",
    title: "BG.Buddy",
    desc: "BG Buddy is a modern, full-stack web application that enables users to remove image backgrounds quickly and seamlessly. It offers a clean user interface built with React.js and Tailwind CSS, robust backend support with Node.js and Express.js, and data persistence using MongoDB.",
    stack: [{ name: "React.Js" }, { name: "Tailwindcss" }, { name: "JavaScript" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" },],
    image: '/assets/work/thumb3.png',
    live: 'https://bg-buddy-home.vercel.app/',
    github: 'https://github.com/Saurabh-101/BG-Buddy',
  }
]



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{ delay:2.4, duration:0.4, ease:"easeIn"}
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* category */}
              <h3 className='text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h3>
              <p className='text-white/60'>{project.desc}</p>
              {/* stack */}
              <ul className='flex flex-wrap gap-4'>
                {
                  project.stack.map((item, index) => {
                    return (
                      <li key={index} className='text-xl text-accent'>
                        {item.name}{index != project.stack.length - 1 && ','}
                      </li>
                    )
                  })
                }
              </ul>
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* Live Link */}
                <Link href={project.live} target='blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent group-hover:rotate-45 transition-all duration-100' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Link */}
                <Link href={project.github} target='blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((item,index)=>{
                return(
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[400px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative h-full w-full'>
                      <Image src={project.image} fill className='object-cover' alt=''/>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work