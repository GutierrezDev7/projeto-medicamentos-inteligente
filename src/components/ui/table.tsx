import React from "react";
import type { ReactNode, TableHTMLAttributes } from "react";

export const Table: React.FC<TableHTMLAttributes<HTMLTableElement>> = ({ className = "", ...props }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props} />
);

export const TableHeader: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <thead className={className}>{children}</thead>
);

export const TableBody: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <tr className={className}>{children}</tr>
);

export const TableHead: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>{children}</th>
);

export const TableCell: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>
);
