"use client";

import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/SandaldeepChoudhary",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/sandaldeep-in/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.instagram.com/sandaldeep._/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.facebook.com/sandaldeep.fb/",
    name: <RiFacebookFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
