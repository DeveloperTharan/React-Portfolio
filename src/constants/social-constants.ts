import { VscGithubAlt } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiInstagramLogoLight } from "react-icons/pi";

export const Socials = [
  {
    id: 1,
    name: "Linkedin",
    Icon: SlSocialLinkedin,
    href: "https://www.linkedin.com/in/dharanitharan-p/",
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "Github",
    Icon: VscGithubAlt,
    href: "https://github.com/DeveloperTharan",
    color: "text-green-600",
  },
  {
    id: 3,
    name: "Gmail",
    Icon: IoMailOutline,
    href: "https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSGLdhVHTWTdzwGXqvnSCMvrffTfXQgNJdGLcWFpFPxCvvvsfqjKSCvMmhsThNSCZNQPCdfn",
    color: "text-orange-600",
  },
  {
    id: 4,
    name: "Instagram",
    Icon: PiInstagramLogoLight,
    href: "https://www.instagram.com/thxran_._/",
    color: "text-pink-600",
  },
];
