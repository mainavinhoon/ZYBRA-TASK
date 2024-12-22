'use client';

import { ArrowUpDown, Ghost } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import {
  Table as StyledTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'username', header: 'Username' },
  { accessorKey: 'email', header: 'Email' },
  {
    accessorFn: row => `${row.address.street}, ${row.address.city}`,
    id: 'address',
    header: 'Address',
    cell: info => info.getValue(),
  },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'website', header: 'Website' },
  {
    accessorFn: row => row.company.name,
    id: 'companyName',
    header: 'Company Name',
    cell: info => info.getValue(),
  },
];

export default function Table({ data }) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-hidden   rounded-md pb-4 shadow border ">
      {/* Global Search */}
      <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center mb-4 p-4">
  <Input
    value={globalFilter ?? ''}
    onChange={e => setGlobalFilter(e.target.value)}
    placeholder="Search all columns"
    className="w-full md:w-[60%] px-4 py-2 border rounded-md border-gray-300 shadow-sm"
  />
  <h1 className="text-center text-xl md:text-3xl bg-red-400 border rounded-md px-4 md:px-10 py-1">
    User - Management - Table
  </h1>
</div>


      {/* Table */}

      <div className=" self-center w-[97%] m-4 rounded-md border"> 
      <StyledTable className="">
        <TableHeader className="">
          <TableRow>
            {table.getHeaderGroups().map(headerGroup =>
              headerGroup.headers.map(header => (
                <TableCell key={header.id}  className="h-20  text-center hover:opacity-100">
                  <div
                    className="flex px-4 py-3  rounded-md border"
           
                  >
                    
                    {header.isPlaceholder ? null : header.column.columnDef.header}
                    <ArrowUpDown  onClick={header.column.getToggleSortingHandler()} className=" w-7 pl-3 ml-auto cursor-pointer select-none opacity-55 hover:opacity-100"/>
                    {header.column.getIsSorted() && (
                
                        <ArrowUpDown
                        className={` invisible w-0 ${
                          header.column.getIsSorted() === 'desc' ? '' : 'rotate-180'
                        }`}
                     
                   />
                    )}
                    
                  </div>
                </TableCell>
              )),
            )}
          </TableRow>
        </TableHeader>
        <TableBody className=" p-5  rounded-md border">
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className=" hover:bg-gray-200  transition-colors">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className="px-4 py-3 ">
                  {cell.renderValue()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      </div>
    </div>
  );
}
