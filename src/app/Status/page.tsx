"use client";
import React, { useState } from "react";

// const Status = [
//   {
//     Available: {
//       name: "Completed",
//       color: "lime",
//     },
//     NotAvailable: {
//       name: "Am close for now",
//       color: "red",
//     },
//     Relaxing: {
//       name: "Completed",
//       color: "lime",
//     },
//   },
// ];

  // Define the props for the Statuspage component
  interface StatuspageProps {
    className?: string;
  }
  
  const Statuspage: React.FC<StatuspageProps> = ({
    className,
  }) => {
   
    return (
      <div>
        <span
          className={`inline-flex items-center px-2 py-0 text-xs font-semibold  pointer-events-auto ${className}`}
        >
          {/* green ping circle */}
          <span className="mr-1.5 flex justify-center items-center h-2 w-2">
            <span
              className={`absolute flex  w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400`}
            ></span>
            <span
              className={`relative flex w-1 h-1 rounded-full bg-lime-400`}
            ></span>
          </span>
  
          {/* shows status name */}
          <span className="dark:text-neutral-500">Completed</span>
        </span>
      </div>
    );
  };
  
  export default Statuspage;
  