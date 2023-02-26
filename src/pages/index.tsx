import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';

import Key from '../../public/key.png';

import Box from '@/layouts/Box';
import Background from '@/layouts/Background';
import { config } from '@/lib/spring';

export default function Home() {
   const springAnimation = {
      from: { opacity: 0, rotate: 6, y: 75 },
      to: { opacity: 1, rotate: 0, y: 0 },
      config,
   };

   const AuthAnimation = useSpring({
      ...springAnimation,
      delay: 500,
   });
   const AnyoneAnimation = useSpring({
      ...springAnimation,
      delay: 700,
   });
   const AnywhereAnimation = useSpring({
      ...springAnimation,
      delay: 800,
   });
   const KeyAnimation = useSpring({
      ...springAnimation,
      delay: 900,
   });
   const ArrivingAnimation = useSpring({
      from: { opacity: 0, scale: 0.5, y: -50 },
      to: { opacity: 1, scale: 1.0, y: 0 },
      config,
      delay: 1100,
   });

   return (
      <Box>
         <div className="relative z-50 m-auto flex flex-col items-center justify-center text-center">
            <animated.div
               style={ArrivingAnimation}
               className="block will-change-transform rounded-lg bg-violet-500/10 text-xs sm:text-sm py-1 px-2.5 text-purple-500"
            >
               Arriving late <strong>2023</strong>
            </animated.div>
            <animated.h1
               style={AuthAnimation}
               className="block will-change-transform mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight"
            >
               Authentication
            </animated.h1>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 sm:mt-4">
               <animated.span
                  style={AnyoneAnimation}
                  className="will-change-transform text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400"
               >
                  anyone
               </animated.span>{' '}
               <animated.span
                  style={AnywhereAnimation}
                  className="text-transparent inline-block will-change-transform bg-clip-text bg-gradient-to-r from-violet-400 to-purple-200"
               >
                  anywhere.
               </animated.span>
            </h1>
            <animated.div
               style={KeyAnimation}
               className="block will-change-transform mt-12 sm:mt-16"
            >
               <Image
                  src={Key}
                  alt="Graphic"
                  quality={100}
                  priority={true}
                  className="h-24 drop-shadow-lg will-change-transform animate-float w-24 sm:h-32 sm:w-32 object-cover"
               />
            </animated.div>
         </div>
         <Background />
      </Box>
   );
}
