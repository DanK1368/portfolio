import React from 'react';

type CardProps = {
   children: React.ReactNode;
   bgColor?: string;
};

export default function Card({ children, bgColor }: CardProps) {
   return (
      <div
         className={`relative ${bgColor ? `bg-[${bgColor}]` : 'bg-white'} w-full h-full flex flex-col p-4 overflow-hidden rounded-[15px]`}
      >
         {children}
      </div>
   );
}
