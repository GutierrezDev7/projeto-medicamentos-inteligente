import React from "react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}
export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
  <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
}
export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}
export const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}
export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);
