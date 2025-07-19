import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="w-full flex flex-col gap-3 px-4 pb-0 pl-[14px] pr-[14px] md:pl-[20px] md:pr-[20px] pt-[20px] max-w-full">
    {children}
  </div>
);

export default Content; 