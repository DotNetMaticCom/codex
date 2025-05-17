import {ButtonHTMLAttributes} from 'react';
import clsx from 'clsx';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({variant = 'primary', className, ...props}: ButtonProps) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-light'
      : 'bg-secondary text-white hover:bg-secondary-light';

  return (
    <button
      className={clsx('px-4 py-2 rounded font-semibold', variantClasses, className)}
      {...props}
    />
  );
}
