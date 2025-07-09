export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="pb-5 flex items-center justify-center">
         <span className="text-xs">&copy; {currentYear} Daniel Kött</span>
      </footer>
   );
}
