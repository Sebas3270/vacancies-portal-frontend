import React from 'react'
import { getVacancies } from '@/database';
import { VacanciesPagination, VacancyCard, VacancyList } from '@/components';
import { Metadata } from 'next';
import { NextPageProps } from '@/types';

export const metadata: Metadata = {
  title: 'Vacancies',
  description: 'Vacancies available in Sebas Solutions',
}

export default async function Page(props: NextPageProps) {

  const page = (props.searchParams!['page']) as string ?? '1' ;
  const keyword = (props.searchParams?.keyword) as string | undefined;
  const education = (props.searchParams?.education) as string | undefined;
  const location = (props.searchParams?.location) as string | undefined;
  const vacancyType = (props.searchParams?.vacancyType) as string | undefined;
  const { vacancies, count, resPerPage, totalPages } = await getVacancies({ page, keyword, education, location, vacancyType });

  return (
    <div className='min-h-screen bg-slate-50'>
      <h1 className='text-3xl font-bold mb-4'>Vacancies</h1>
      <VacancyList vacancies={vacancies}/>
      <VacanciesPagination currentPage={Number(page)} totalPages={totalPages}/>

    </div>
  )
}
