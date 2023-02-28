import Image from 'next/image';
import Link from 'next/link';
import { animated, useSpring } from '@react-spring/web';

import { config } from '@/lib/spring';
import Logo from '../../public/logo.png';

const Nav = () => {
   const SkeleAnimation = useSpring({
      from: { opacity: 0, rotate: 6, y: 25 },
      to: { opacity: 1, rotate: 0, y: 0 },
      config,
   });
   const LogoAnimation = useSpring({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      config,
   });

   return (
      <nav className="fixed top-0 inset-x-0 px-6 py-12 z-[1000]">
         <div className="max-w-xl mx-auto w-full">
            <animated.div
               style={SkeleAnimation}
               className="inline-block will-change-transform"
            >
               <Link
                  href="/"
                  className="text-lg group inline-flex items-center font-medium"
               >
                  <animated.span
                     style={LogoAnimation}
                     className="inline-block will-change-transform"
                  >
                     <Image
                        src={Logo}
                        alt="skele logo"
                        quality={100}
                        priority={true}
                        className="h-5 w-5 grayscale inline-block mr-3 group-hover:filter-none transition-transform will-change-transform duration-200 ease-linear group-hover:scale-110"
                     />
                  </animated.span>
                  Skele
               </Link>
            </animated.div>
         </div>
      </nav>
   );
};

export default Nav;
