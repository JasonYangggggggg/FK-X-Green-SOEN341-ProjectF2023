import React from "react";
import "./globals.css";

import Navbar from "./_components/_navbar/navbar";
import Listing from "./_components/_listing/listing";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Listing />
      </body>
    </html>
  );
};

export default RootLayout;
