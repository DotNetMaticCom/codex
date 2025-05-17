import {ReactNode} from 'react';

export interface CardProps {
  title: ReactNode;
  children: ReactNode;
}

export default function Card({title, children}: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-sm font-medium mb-2 text-gray-600">{title}</h3>
      <div className="text-2xl font-semibold text-gray-900">{children}</div>
    </div>
  );
}
