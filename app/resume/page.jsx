"use client";

import { icons } from 'lucide-react';
import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiMongodb, SiNextdotjs, SiPostman } from 'react-icons/si';


// about data
const about = {
  title: "About Me",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit recusandae minus ratione delectus repudiandae est voluptates veniam dicta odit ea, corrupti earum enim esse, nobis mollitia vero omnis ullam.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Saurabh Gupta"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 99887 47366"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Email",
      fieldValue: "saurabhgupta72dh3@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Instagram",
      fieldValue: "@saurabh_saahu"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English, Punjabi"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  desc: 'Fresher.',
  items: [
    // {
    //   company:"none",
    //   position:"nan",
    //   duration:"nan"
    // },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit recusandae minus ratione delectus repudiandae est voluptates veniam dicta odit ea, corrupti earum enim esse, nobis mollitia vero omnis ullam.',
  items: [
    {
      institute: "Lovely Professional University, Punjab",
      degree: "B.Tech CSE",
      score: "8.7 CGPA",
      duration: "2022 - present",
    },
    {
      institute: "Gyan Kunj Academy, UP",
      degree: "Intermediate",
      score: "90.0%",
      duration: "2020 - 2022",
    },
    {
      institute: "Gyan Kunj Academy, UP",
      degree: "Matriculation",
      score: "94.0%",
      duration: "2018 - 2020",
    },
  ]
}

const skills = {
  title: "My Skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, omnis incidunt doloribus ullam quis ipsam impedit excepturi nulla numquam blanditiis.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiMongodb />,
      name: "mongodb"
    },
    {
      icon: <SiExpress />,
      name: "express.js"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss"
    },
    {
      icon: <FaPhp />,
      name: "php"
    },
    {
      icon: <FaLaravel />,
      name: "laravel"
    },
    {
      icon: <SiPostman />,
      name: "postman"
    },
    {
      icon: <SiGit />,
      name: "git"
    },
    {
      icon: <FaJava />,
      name: "java"
    },

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>

      <div className='container mx-auto'>
        <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.desc}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                      experience.items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.desc}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                      education.items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                            <span className='text-accent'>{item.duration}</span>
                            <div className=' max-w-[260px] min-h-[60px] text-center lg:text-left'>
                              <h3 className='text-xl'>{item.degree}</h3>
                              <p className='text-white/60'>{item.score}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institute}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.desc}</p>
                </div>
                <ScrollArea className='h-[450px]'>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                    {
                      skills.skillList.map((item, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.desc}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {
                    about.info.map((item, index) => {
                      return (
                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )



}

export default Resume