import React from "react";
import type { TextareaHTMLAttributes } from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => (
    <textarea ref={ref} className={`px-3 py-2 border rounded ${className}`} {...props} />
  )
);
Textarea.displayName = "Textarea";

export default Textarea;
