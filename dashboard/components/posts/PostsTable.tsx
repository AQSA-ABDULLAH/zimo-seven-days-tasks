'use client';

import React, { useState, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function UserTable() {
  const [userData, setUserData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(''); // For search
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5); // Rows per page

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, []);

  // Define table columns
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'address.city',
      header: 'City',
      cell: (info) => info.getValue() || 'N/A', // Resolve nested property
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
    },
  ];

  // Create the table instance
  const tableInstance = useReactTable({
    data: userData,
    columns,
    state: {
      globalFilter,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
      setPageIndex(newPagination.pageIndex);
      setPageSize(newPagination.pageSize);
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>

      {/* Global Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 w-full">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-2 text-left"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer select-none"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() && (
                          <span>
                            {' '}
                            {header.column.getIsSorted() === 'asc' ? '🔼' : '🔽'}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border border-gray-300 px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <button
            className="px-3 py-1 border rounded mr-2"
            onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
            disabled={!tableInstance.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 border rounded"
            onClick={() => setPageIndex((prev) => prev + 1)}
            disabled={!tableInstance.getCanNextPage()}
          >
            Next
          </button>
        </div>
        <div>
          Page{' '}
          <span>
            {pageIndex + 1} of {tableInstance.getPageCount()}
          </span>
        </div>
        <div>
          <label htmlFor="pageSize" className="mr-2">
            Rows per page:
          </label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border border-gray-300 rounded"
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}




