"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion'
const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla minima dolore? Aut, unde nostrum quam accusamus itaque officia doloremque quis eligendi aliquam cumque iusto hic laboriosam, blanditiis perferendis totam.',
    href: 'https://github.com/Saurabh-101'
  },
  {
    num: '02',
    title: 'UI/UX Designe',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla minima dolore? Aut, unde nostrum quam accusamus itaque officia doloremque quis eligendi aliquam cumque iusto hic laboriosam, blanditiis perferendis totam.',
    href: ''
  },
  {
    num: '03',
    title: 'Logo Design',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla minima dolore? Aut, unde nostrum quam accusamus itaque officia doloremque quis eligendi aliquam cumque iusto hic laboriosam, blanditiis perferendis totam.',
    href: ''
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
      <div className='container mx-auto'>
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {
            services.map((item, index) => {
              return (
                <div className='flex-1 flex flex-col justify-center gap-6 group' key={index}>
                  {/* Top part */}
                  <div className='w-full flex justify-between items-center'>
                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.num}</div>
                    <Link target='blank' className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45' href={item.href}>
                      <BsArrowDownRight className='text-primary text-3xl'/>
                    </Link>
                  </div>
                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>
                  <p className='text-white/60'>{item.desc}</p>
                  <div className='border-b border-white/20 w-full'></div>
                </div>
                
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}
export default Services