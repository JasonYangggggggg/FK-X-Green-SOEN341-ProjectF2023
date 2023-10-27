import React from 'react';
import './globals.css';

import Navbar from './_components/_navbar/navbar';

const RootLayout =  ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}       
      </body>
    </html>
  )
}

export default RootLayout;