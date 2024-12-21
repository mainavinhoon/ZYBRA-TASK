// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import Table from '../components/Table';
// import { fetchUsers } from '@/lib/api';

// export default function UsersPage() {
// //   const { data, isLoading, isError } = useQuery(['users'], () => fetchUsers(1));
  

// //   if (isLoading) return <div>Loading...</div>;
// //   if (isError) return <div>Error loading data</div>;


//   return (
//     <div>
//       <h1>User - Management</h1>
//       <Table data={data} />

//       <div>
//         Created By Navin Rawat
//       </div>
//     </div>

//   );

// }
import { redirect } from 'next/navigation';

export default function UsersRedirect() {
  redirect('/users/1');
}