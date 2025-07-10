import React from 'react';
import Card from '@/app/components/card/card';
import Image from 'next/image';
import LinkElement from './components/link/link';

export default function Home() {
   const githubLink = 'https://github.com/DanK1368';
   const linkedinLink = 'https://linkedin.com/in/daniel-koett';
   const email = 'danielkoett@gmail.com';
   const matrixLink = 'https://matrix.to/#/@daniel:koett.ch';

   return (
      <div className="flex-1 flex flex-col items-center justify-center">
         <Card>
            <div className="p-5">
               <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
                  <div className=" flex flex-col items-center md:items-start gap-2">
                     <h1 className="text-4xl leading-relaxed text-center">
                        Daniel Kött
                     </h1>
                     <span className="text-xl text-secondary text-center md:text-left">
                        Husband. Father. Web Developer.
                     </span>
                     <div className="mt-5 w-full">
                        <div className="flex justify-between items-center">
                           <LinkElement
                              href={matrixLink}
                              icon="matrix"
                              label="Matrix"
                           />
                           <LinkElement
                              href={email}
                              icon="mail"
                              label="E-Mail"
                              isEmail={true}
                           />
                           <LinkElement
                              href={githubLink}
                              icon="github"
                              label="Github"
                           />
                           <LinkElement
                              href={linkedinLink}
                              icon="linkedin"
                              label="LinkedIn"
                           />
                        </div>
                     </div>
                  </div>

                  <Image
                     className="rounded-full object-cover h-[130px] w-[130px]"
                     src="/images/avatar.jpeg"
                     width="130"
                     height="130"
                     alt=""
                  />
               </div>
            </div>
         </Card>
      </div>
   );
}
