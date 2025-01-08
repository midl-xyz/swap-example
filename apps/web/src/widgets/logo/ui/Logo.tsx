import Image from 'next/image';
import LogoSvg from './assets/Logo.svg';

export const Logo = () => {
  return (
    <Image
      src={LogoSvg}
      width={LogoSvg.width}
      height={LogoSvg.height}
      alt="MIDL Swap"
    />
  );
};
