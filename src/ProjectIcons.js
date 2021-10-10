import { withBaseIcon } from "react-icons-kit";


import {phone} from 'react-icons-kit/fa/phone';
import {envelope} from 'react-icons-kit/fa/envelope';
import {mapMarker} from 'react-icons-kit/fa/mapMarker';
import {menu} from 'react-icons-kit/feather/menu';
// import {hamburger} from 'react-icons-kit/typicons/thMenu';

const IconContainer = withBaseIcon({ size: 14 });
const IconContainerForHamburger = withBaseIcon({ size: 14 , style: {filter: "drop-shadow(0px 0px 8px rgb(49 61 63 / 0.3))", color: "#313D3F"}});


export const Phone = () => (<IconContainer size={16} icon={phone} />);
export const Mail = () => (<IconContainer size={16} icon={envelope} />);
export const Map = () => (<IconContainer size={16} icon={mapMarker} />);
export const Hamburger = () => (<IconContainerForHamburger size={24} icon={menu} />);