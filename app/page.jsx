import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi';

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-6 xl:pt-8 xl:pb-24">
          {/* About me */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Saurabh Gupta</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m a passionate full-stack developer with hands-on experience building responsive, user-friendly web applications. I work comfortably across the MERN stack, using React, Node.js, and MongoDB, and I’ve also used Laravel for robust backend development. I enjoy designing clean interfaces with HTML, CSS, and modern frameworks, and integrating them with secure, scalable backends.
            </p>
            {/* btns and social medias */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles='flex gap-6' iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </div>
  )
}

export default Home