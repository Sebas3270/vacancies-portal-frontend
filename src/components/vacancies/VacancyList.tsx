import React, { FC } from 'react'
import { VacancyCard } from '..'
import { Vacancy } from '@/types'

interface Props {
    vacancies: Vacancy[]
}

export const VacancyList: FC<Props> = ({ vacancies }) => {

    if(vacancies.length === 0){ return <span className='flex flex-col gap-3'>There are no vacancies that match your filters, try again later</span> }

    return (
        <div className='flex flex-col gap-3'>
            {
                vacancies.map((vacancy) => <VacancyCard key={vacancy.id} vacancy={vacancy} />)
            }
        </div>
    )
}
