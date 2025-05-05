import React from "react";
import type { ReactNode } from "react";

export const Badge: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${className}`}>{children}</span>
);

export default Badge;
