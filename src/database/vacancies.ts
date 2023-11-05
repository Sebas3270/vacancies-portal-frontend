'use server'
import { VacanciesResponse, VacancyFilters } from "@/types";

export async function getVacancies( filters: VacancyFilters ) {
    let url = new URL('http://127.0.0.1:8000/api/vacancies');

    if(filters.page){
        url.searchParams.set('page', filters.page ?? 1);
    }

    if(filters.education){
        url.searchParams.set('education', filters.education);
    }

    if(filters.keyword){
        url.searchParams.set('keyword', filters.keyword);
    }

    if(filters.location){
        url.searchParams.set('location', filters.location);
    }

    if(filters.vacancyType){
        url.searchParams.set('vacancyType', filters.vacancyType);
    }

    const res = await fetch(url.toString());
    const resJson = await res.json() as VacanciesResponse;
    return resJson;
}