import React from "react";

const Stats = () => {
  const stats = [
    { label: "Project Completed", value: "8K+" },
    { label: "Customer Satisfied", value: "7.8K+" },
    { label: "Team Members", value: "450+" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-4xl md:text-5xl font-black text-gray-900">
                {stat.value}
              </div>
              <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest max-w-[120px] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
