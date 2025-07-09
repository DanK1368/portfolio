'use client';
import Card from '@/app/components/card/card';
import React from 'react';

export default function AboutMeTile() {
   const sections = [
      { id: 'aboutMe', label: 'About Me' },
      { id: 'myJourney', label: 'My Journey' },
      { id: 'interests', label: 'Interests' },
   ];

   return (
      <Card>
         <span className="text-3xl">About Me</span>
         <hr className="my-3" />

         <div className="w-full flex-1 flex justify-between gap-2 overflow-hidden">
            <div className="flex flex-col gap-3 p-4">
               {sections.map((section) => (
                  <button
                     key={section.id}
                     className={`font-bold tracking-widest text-left transition-colors duration-200 ${
                        section.id
                           ? 'text-primary'
                           : 'text-gray-500 hover:text-primary'
                     }`}
                  >
                     {section.label}
                  </button>
               ))}
            </div>
            <div className="flex-1 flex flex-col gap-3 p-4 border border-secondary rounded-2xl overflow-y-auto leading-loose">
               <div className="flex flex-col gap-3">
                  <h2
                     id="aboutMe"
                     className="font-bold text-primary tracking-widest"
                  >
                     Who am I?
                  </h2>
                  <p>
                     My name is Daniel Kött, a web developer based around
                     Zürich, Switzerland. I work as a frontend developer, while
                     in my free time I enjoy exploring the outdoors. I recently
                     became a father, which means I spend more time changing
                     diapers than coding.
                  </p>
               </div>
            </div>
            <div className="flex-1 flex flex-col gap-3 p-4 border border-secondary rounded-2xl overflow-y-auto leading-loose">
               <div className="flex flex-col gap-3">
                  <h2
                     id="aboutMe"
                     className="font-bold text-primary tracking-widest"
                  >
                     My Journey
                  </h2>
                  <p>
                     My name is Daniel Kött, a web developer based around
                     Zürich, Switzerland. I work as a frontend developer, while
                     in my free time I enjoy exploring the outdoors. I recently
                     became a father, which means I spend more time changing
                     diapers than coding.
                  </p>
               </div>
            </div>
            <div className="flex-1 flex flex-col gap-3 p-4 border border-secondary rounded-2xl overflow-y-auto leading-loose">
               <div className="flex flex-col gap-3">
                  <h2
                     id="aboutMe"
                     className="font-bold text-primary tracking-widest"
                  >
                     Interests
                  </h2>
                  <p>
                     My name is Daniel Kött, a web developer based around
                     Zürich, Switzerland. I work as a frontend developer, while
                     in my free time I enjoy exploring the outdoors. I recently
                     became a father, which means I spend more time changing
                     diapers than coding.
                  </p>
               </div>
            </div>
         </div>
      </Card>
   );
}
