import React from 'react'
import { getVacancies } from '@/database';
import { VacancyCard, VacancyList } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vacancies',
  description: 'Vacancies available in Sebas Solutions',
}

export default async function Page() {

  const { vacancies } = await getVacancies({});

  return (
    <div className='h-auto'>

      <h1 className='text-3xl font-bold mb-4'>Vacancies</h1>
      <VacancyList vacancies={vacancies}/>

    </div>
  )
}
