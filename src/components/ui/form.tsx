import React from "react";
import type { ReactNode } from "react";

// Filtra apenas props válidas para o elemento <form> e ignora as do react-hook-form
const pickFormProps = (props: any) => {
  const allowed = [
    'onSubmit', 'className', 'children', 'action', 'method', 'autoComplete', 'encType', 'name', 'noValidate', 'target', 'id', 'style', 'role', 'tabIndex', 'aria-label', 'aria-labelledby', 'aria-describedby'
  ];
  const filtered: any = {};
  for (const key of allowed) {
    if (key in props) filtered[key] = props[key];
  }
  return filtered;
};

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  // Permite qualquer prop, mas só repassa as válidas
  [key: string]: any;
}

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  // Remove props do react-hook-form que não são válidas para <form>
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState,
    formState,
    ...rest
  } = props;
  return <form {...pickFormProps(rest)}>{children}</form>;
};

export const FormField: React.FC<{ control: any; name: string; render: (props: any) => ReactNode }> = ({ render, ...props }) => render({ field: {} });

export const FormItem: React.FC<{ children: ReactNode }> = ({ children }) => <div className="mb-4">{children}</div>;

export const FormLabel: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <label className={`block mb-1 font-medium ${className}`}>{children}</label>
);

export const FormControl: React.FC<{ children: ReactNode }> = ({ children }) => <div>{children}</div>;

export const FormMessage: React.FC<{ children?: ReactNode }> = ({ children }) => (
  children ? <div className="text-red-500 text-xs mt-1">{children}</div> : null
);
