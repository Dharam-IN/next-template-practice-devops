import React from "react";

export const SectionTitle = ({ preTitle, title, align = "center", children }) => {
  return (
    <div className={`flex w-full flex-col mt-4 ${align === "left" ? "" : "items-center justify-center text-center"}`}>
      {preTitle && (
        <div className="text-sm font-bold tracking-wider text-gold uppercase">
          {preTitle}
        </div>
      )}
      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-dark lg:leading-tight lg:text-4xl">
          {title}
        </h2>
      )}
      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </div>
  );
};
