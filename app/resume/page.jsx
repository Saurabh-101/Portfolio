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
    //   company:"",
    //   position:"",
    //   duration:""
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
      degree: "B.Tech Computer Science and Engineering",
      duration: "2022 - present",
    },
    {
      institute: "Gyan Kunj Academy, Ballia, UP",
      degree: "Intermediate",
      duration: "2020 - 2022",
    },
    {
      institute: "Gyan Kunj Academy, Ballia, UP",
      degree: "Matriculation",
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
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js"
    },
    {
      icon: <SiExpress />,
      name: "express.js"
    },
    {
      icon: <SiMongodb />,
      name: "mongodb"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
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

import { ScrollArea } from '@radix-ui/react-scroll-area';
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
                <h3 className='text-4xl font-bold'>{experience.title }</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.desc}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                      experience.items.map((item,index)=>{
                        return(
                          <li key={index}>
                            <span>{item.duration}</span>
                            <h3>{item.position}</h3>
                            <div>
                              {/* dot */}
                              <span></span>
                              <p>{item.company}</p>
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
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )



}

export default Resume