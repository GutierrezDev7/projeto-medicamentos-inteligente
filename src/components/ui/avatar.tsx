import React from "react";
import type { ReactNode, ImgHTMLAttributes } from "react";

export const Avatar: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}>{children}</div>
);

export const AvatarImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className = "", ...props }) => (
  <img className={`object-cover w-full h-full ${className}`} {...props} />
);

export const AvatarFallback: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`text-gray-500 ${className}`}>{children}</span>
);
