import { withBaseIcon } from "react-icons-kit";


import {phone} from 'react-icons-kit/fa/phone';
import {envelope} from 'react-icons-kit/fa/envelope';
import {mapMarker} from 'react-icons-kit/fa/mapMarker';
import {menu} from 'react-icons-kit/feather/menu';
import {user} from 'react-icons-kit/feather/user';
import {chevronDown} from 'react-icons-kit/feather/chevronDown';
import {home} from 'react-icons-kit/feather/home';
import {briefcase} from 'react-icons-kit/feather/briefcase';
import {fileText} from 'react-icons-kit/feather/fileText';
import {globe} from 'react-icons-kit/feather/globe';
// import {hamburger} from 'react-icons-kit/typicons/thMenu';

const IconContainer = withBaseIcon({ size: 14 });
const IconContainerForHamburger = withBaseIcon({ size: 14 , style: {filter: "drop-shadow(0px 0px 8px rgb(49 61 63 / 0.3))", color: "#313D3F"}});
const IconContainerYellow = withBaseIcon({ size: 14, style: {color: "#EFC01A" }});

export const Phone = () => (<IconContainer size={16} icon={phone} />);
export const Mail = () => (<IconContainer size={16} icon={envelope} />);
export const Map = () => (<IconContainer size={16} icon={mapMarker} />);
export const User = () => (<IconContainer size={16} icon={user} />);

export const ChevronDown = () => (<IconContainer size={16} icon={chevronDown} />);
export const Hamburger = () => (<IconContainerForHamburger size={24} icon={menu} />);

export const Home = () => (<IconContainer size={16} icon={home} />);
export const Briefcase = () => (<IconContainer size={16} icon={briefcase} />);
export const FileText = () => (<IconContainer size={16} icon={fileText} />);
export const Globe = () => (<IconContainer size={16} icon={globe} />);