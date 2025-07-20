import { motion } from "framer-motion"


const stairAnimation = {
    initial:{
        tio:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%", "0%"],
    },
}


// calculating the reverse index for staggered delay
const reverseIndex = (index) =>{
    const totalSteps = 8;
    return totalSteps - index - 1;

}

const Stairs = () => {
  return (
    <>

    {/* render 6 motion divs , each representing a step of the stair
        Each div will have the same animation defined by the stairsAnimation object.
        the delay for each div is calculated dinamicaly based on its reversed index.
        creating a staggered effect with decreasing delau\y for each subsequent step.
    */}
    {
        [...Array(8)].map((_,index) => {
            return(
            <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                duration:0.4,
                ease:"easeInOut",
                delay:reverseIndex(index) *0.1,
            }}
            className="h-full w-full bg-white relative"/>
        );
        })
    }
    </>
  )
}

export default Stairs