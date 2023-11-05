import { Vacancy } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    vacancy: Vacancy
}

export const VacancyCard:FC<Props> = ({ vacancy }) => {
  return (
    <Link href={`/vacancies/${vacancy.id}`} className='border rounded-md p-3'>
        <h3 className='font-bold'>{vacancy.title}</h3>
        <span className='text-gray-500 text-sm'>{vacancy.address}</span>
        <p className='mt-2 text-sm'>{vacancy.description.substring(0,200)}...</p>
        <div className='flex flex-row gap-2'>
          <span>{vacancy.education}</span>
          <span>${vacancy.salary}</span>
        </div>
    </Link>
  )
}
