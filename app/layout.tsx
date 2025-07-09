import './globals.css';
import React from 'react';
import Footer from '@/app/components/footer/footer';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="min-h-screen w-[min(100%,769px)] mx-auto flex flex-col justify-center">
            {children}
            <Footer />
         </body>
      </html>
   );
}
