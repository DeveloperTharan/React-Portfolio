import { CiHome } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { PiBracketsAngleThin } from "react-icons/pi";

export const Menu = [
  {
    id: 1,
    name: "Home",
    Icon: CiHome,
    path: "/",
  },
  {
    Icon: RiMovie2Line,
    id: 2,
    name: "My Content",
    path: "/content",
    disable: true,
  },
  {
    Icon: IoVideocamOutline,
    id: 3,
    name: "Videos",
    path: "/videos",
    disable: true,
  },
  {
    id: 4,
    name: "About",
    Icon: PiBracketsAngleThin,
    path: "/about",
  },
];
