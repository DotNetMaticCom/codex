import {ReactNode} from 'react';

export type Column<T> = {
  header: ReactNode;
  accessor: (row: T) => ReactNode;
};

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
}

export default function DataTable<T>({columns, data, keyField}: DataTableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200 bg-white shadow">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((row) => (
          <tr key={String(row[keyField])} className="hover:bg-gray-50">
            {columns.map((col, idx) => (
              <td key={idx} className="px-4 py-2 text-sm text-gray-800">
                {col.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
