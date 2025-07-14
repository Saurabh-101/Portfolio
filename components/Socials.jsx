import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const socials = [
    {icon:<FaGithub />, path:'https://github.com/Saurabh-101'},
    {icon:<FaInstagram />, path:''},
    {icon:<FaLinkedinIn />, path:''},
    
]

const Socials = ({containerStyles, iconStyles}) => {
  return ( 
    <div className={containerStyles}>
        {socials.map((items,index)=>{
            return (
                <Link target="blank" className={iconStyles} key={index} href={items.path}>{items.icon}</Link>
            )
        })}
        
    </div>
  )
}

export default Socials