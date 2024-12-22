'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Table from '../../components/Table';
import { fetchUsers } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const ITEMS_PER_PAGE = 7;

export default function UsersPage({ params }) {
  const router = useRouter();


const resolvedParams = React.use(params);
  const currentPage = parseInt(resolvedParams.page, 10) || 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Paginate data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    router.push(`/users/${newPage}`);
  };

  return (
    <div>
     
      <Table data={paginatedData} />
      <div className=" relative flex items-center  justify-evenly m-4">
        <Button
             variant="outline"
            size="lg"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
        className=""
         variant="outline"
            size="lg"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
      <div className='fixed w-[100%]  bottom-0 text-right p-1 opacity-40 hover:opacity-100'>Created By - <Link className=' text-blue-600 bolder hover:to-blue-900 opacity-100' href={"https://github.com/mainavinhoon/ZYBRA-TASK"}>Navin Rawat</Link></div>
    </div>
  );
}