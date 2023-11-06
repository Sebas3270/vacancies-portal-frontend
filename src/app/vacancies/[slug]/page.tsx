import { getVacancy } from '@/database'
import { NextPageProps } from '@/types'
import { notFound } from 'next/navigation';
import React from 'react'

interface Props extends NextPageProps {
    params: { slug: string } 
}

export default async function Page(props: Props) {

    const { vacancy } = await getVacancy(props.params.slug);

    if(!vacancy) notFound();

    return (
        <div>
            <h1 className='text-2xl font-bold'>{vacancy.title}</h1>
            <p className='text-sm mt-2'>{vacancy.description}</p>
        </div>
    )
}
