"use client"

import Link from "next/link"
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri"

const icons = [
  {
    path: "/",
    name: <RiGithubFill/>,
  },
  {
    path: "/",
    name: <RiLinkedinFill/>,
  },
  {
    path: "/",
    name: <RiInstagramFill/>,
  },
  {
    path: "/",
    name: <RiFacebookFill/>,
  },
]
const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>{
      icons.map((icon, index)=>{
        return <Link href={icon.path}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })
    }</div>
  )
}

export default Socials