import React from "react";
import type { InputHTMLAttributes } from "react";

export const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input ref={ref} className={`px-3 py-2 border rounded ${className}`} {...props} />
  )
);
Input.displayName = "Input";

export default Input;
