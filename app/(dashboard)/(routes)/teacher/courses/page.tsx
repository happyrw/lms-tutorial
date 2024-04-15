import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


const CoursesPage = async() => {

  const { userId } = await auth();

  if(!userId) {
    return redirect("/");
  }

  const courseData = await db.course.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    }
  })
  
  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courseData} />
    </div>
  )
}

export default CoursesPage;
