import { getVacancy } from '@/database'
import { NextPageProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props extends NextPageProps {
    params: { slug: string } 
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    
    const id = params.slug
    const { vacancy } = await getVacancy(id);

    const title = vacancy ? `${vacancy.title} - Sebas Solutions` : 'Vacancy not found - Sebas Solutions'
    const description = vacancy ? `${vacancy.description}` : 'Vacancy not found, description not available'
   
    return {
      title,
      description
    }
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
