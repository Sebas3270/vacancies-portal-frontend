'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import ResponsivePagination from 'react-responsive-pagination';
import '@/styles/pagination.css';

interface Props {
    currentPage: number;
    totalPages: number;
}

export const VacanciesPagination:FC<Props> = ({ currentPage, totalPages }) => {

    const router = useRouter();

    const handlePageChange = (page: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page.toString());
        router.push(url.toString());
    }

  return (
    <div className='mt-3'>
        <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={(page) => handlePageChange(page)}
        />
    </div>
  )
}