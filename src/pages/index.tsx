import Image from 'next/image';
import { motion } from 'framer-motion';

import Key from '../../public/key.png';

import Box from '@/layouts/Box';
import Background from '@/layouts/Background';
import { config } from '@/lib/spring';

export default function Home() {
   return (
      <Box>
         <div className="relative z-50 m-auto flex flex-col items-center justify-center text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.8, y: -25 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{
                  type: 'spring',
                  ...config,
                  delay: 1.2,
               }}
               className="block will-change-transform rounded-lg bg-violet-500/10 text-xs sm:text-sm py-1 px-2.5 text-purple-500"
            >
               Arriving late <strong>2023</strong>
            </motion.div>
            <motion.h1
               initial={{ opacity: 0, y: 50, rotate: 5 }}
               animate={{ opacity: 1, y: 0, rotate: 0 }}
               transition={{
                  type: 'spring',
                  ...config,
                  delay: 0.5,
               }}
               className="inline-block will-change-transform mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight"
            >
               Authentication
            </motion.h1>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 sm:mt-4">
               <motion.span
                  initial={{ opacity: 0, y: 50, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                     type: 'spring',
                     ...config,
                     delay: 0.7,
                  }}
                  className="will-change-transform text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400"
               >
                  anyone
               </motion.span>{' '}
               <motion.span
                  initial={{ opacity: 0, y: 50, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                     type: 'spring',
                     ...config,
                     delay: 0.8,
                  }}
                  className="text-transparent inline-block will-change-transform bg-clip-text bg-gradient-to-r from-violet-400 to-purple-200"
               >
                  anywhere.
               </motion.span>
            </h1>
            <motion.div
               initial={{ opacity: 0, y: 100, rotate: 10 }}
               animate={{ opacity: 1, y: 0, rotate: 0 }}
               transition={{
                  type: 'spring',
                  ...config,
                  delay: 0.9,
               }}
               className="block will-change-transform mt-12 sm:mt-16"
            >
               <Image
                  src={Key}
                  alt="Graphic"
                  priority={true}
                  quality={100}
                  className="h-24 drop-shadow-lg will-change-transform animate-float w-24 sm:h-32 sm:w-32 object-cover"
               />
            </motion.div>
         </div>
         <Background />
      </Box>
   );
}
