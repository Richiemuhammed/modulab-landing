import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="w-full flex flex-col gap-[64px] px-4 pb-0 pl-[20px] pr-[20px] pt-[80px] max-w-full">
    {children}
  </div>
);

export default Content; 