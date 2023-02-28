import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className="flex flex-col min-h-screen w-full px-6 pb-6 pt-24">
         {children}
      </div>
   );
};

export default Wrapper;
