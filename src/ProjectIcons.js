import { withBaseIcon } from "react-icons-kit";


import {phone} from 'react-icons-kit/fa/phone';
import {envelope} from 'react-icons-kit/fa/envelope';
import {mapMarker} from 'react-icons-kit/fa/mapMarker'

const IconContainer = withBaseIcon({ size: 14 });


export const Phone = () => (<IconContainer size={16} icon={phone} />);
export const Mail = () => (<IconContainer size={16} icon={envelope} />);
export const Map = () => (<IconContainer size={16} icon={mapMarker} />);