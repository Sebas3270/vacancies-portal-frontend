import React from 'react'
import { getVacancy } from '@/database'
import { NextPageProps } from '@/types';

interface Props extends NextPageProps {
    params: { slug: string }
}

export default async function Page(props: Props) {

    const slug = props.params.slug;

    const { vacancy } = await getVacancy(slug);

    return (
        <div>
            <h1>{vacancy.title}</h1>
        </div>
    )
}
