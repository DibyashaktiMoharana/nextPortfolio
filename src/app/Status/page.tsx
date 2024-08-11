"use client";
import React, { useState } from "react";



const Status = [
  {
    Available: {
      name: "Completed",
      color: "lime",
    },
    NotAvailable: {
      name: "Am close for now",
      color: "red",
    },
    Relaxing: {
      name: "Completed",
      color: "lime",
    },
  },
];


type StatusType = {
    Available: { name: string };
    Relaxing: { name: string };
    NotAvailable: { name: string };
  };

  // Define the props for the Statuspage component
  interface StatuspageProps {
    isAvailable?: boolean;
    Relaxing?: boolean;
    className?: string;
  }
  
  const Statuspage: React.FC<StatuspageProps> = ({
    isAvailable,
    Relaxing,
    className,
  }) => {
    const [status, setStatus] = useState(
      isAvailable
        ? Status[0].Available
        : Relaxing
        ? Status[0].Relaxing
        : Status[0].NotAvailable
    );
  
    const bgColorClass =
      status === Status[0].Available || status === Status[0].Relaxing
        ? "bg-lime-400"
        : "bg-red-600";
  
    return (
      <div>
        <span
          className={`inline-flex items-center px-2 py-0 text-xs font-semibold  pointer-events-auto ${className}`}
        >
          {/* green ping circle */}
          <span className="mr-1.5 flex justify-center items-center h-2 w-2">
            <span
              className={`absolute flex  w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}`}
            ></span>
            <span
              className={`relative flex w-1 h-1 rounded-full ${bgColorClass}`}
            ></span>
          </span>
  
          {/* shows status name */}
          <span className="dark:text-neutral-500">{status.name}</span>
        </span>
      </div>
    );
  };
  
  export default Statuspage;
  