import React, { FC } from 'react'
import { VacancyCard } from '..'
import { Vacancy } from '@/types'

interface Props {
    vacancies: Vacancy[]
}

export const VacancyList: FC<Props> = ({ vacancies }) => {
    return (
        <div className='flex flex-col gap-3'>
            {
                vacancies.map((vacancy) => <VacancyCard key={vacancy.id} vacancy={vacancy} />)
            }
        </div>
    )
}
