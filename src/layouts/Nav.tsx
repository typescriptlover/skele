import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../../public/logo.png';
import { config } from '@/lib/spring';

const Nav = () => {
   return (
      <nav className="fixed top-0 inset-x-0 px-6 py-12 z-[1000]">
         <div className="max-w-xl mx-auto w-full">
            <motion.div
               key="skele"
               initial={{ opacity: 0, y: 15, rotate: 10 }}
               animate={{ opacity: 1, y: 0, rotate: 0 }}
               transition={{
                  type: 'spring',
                  ...config,
               }}
               className="inline-block will-change-transform"
            >
               <Link
                  href="/"
                  className="text-lg group inline-flex items-center font-medium tracking-tight"
               >
                  <Image
                     src={Logo}
                     alt="skele logo"
                     className="h-5 w-5 grayscale inline-block mr-3 group-hover:filter-none transition-transform will-change-transform duration-200 ease-linear group-hover:scale-110"
                  />
                  Skele
               </Link>
            </motion.div>
         </div>
      </nav>
   );
};

export default Nav;
