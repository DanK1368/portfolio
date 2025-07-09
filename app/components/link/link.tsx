import InlineSVG from 'react-inlinesvg';

type LinkElementProps = {
   icon: string;
   href: string;
   label?: string;
   isEmail?: boolean;
};

export default function LinkElement({
   icon,
   label,
   href,
   isEmail = false,
}: LinkElementProps) {
   return (
      <div className="group h-10 flex justify-between cursor-pointer duration-1000 hover:transform hover:-translate-y-1.5 transition-transform hover:duration-250">
         <a
            className="relative flex flex-col items-center gap-5"
            href={isEmail ? `mailto:${href}` : href}
            target="_self"
            rel="noopener noreferrer"
         >
            <InlineSVG
               width={20}
               height={20}
               className="group-hover:text-primary"
               src={`/icons/icon-${icon}.svg`}
            />
            <span className="absolute w-max -bottom-4 invisible group-hover:visible text-xs">
               {label}
            </span>
         </a>
      </div>
   );
}
