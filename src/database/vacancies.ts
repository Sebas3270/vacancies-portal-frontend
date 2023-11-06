'use server'
import { VacanciesResponse, Vacancy, VacancyFilters } from "@/types";

export async function getVacancies(filters: VacancyFilters): Promise<VacanciesResponse> {

    try {
        let url = new URL('http://127.0.0.1:8000/api/vacancies/');

        if (filters.page) {
            url.searchParams.set('page', filters.page ?? 1);
        }

        if (filters.education) {
            url.searchParams.set('education', filters.education);
        }

        if (filters.keyword) {
            url.searchParams.set('keyword', filters.keyword);
        }

        if (filters.location) {
            url.searchParams.set('location', filters.location);
        }

        if (filters.vacancyType) {
            url.searchParams.set('vacancyType', filters.vacancyType);
        }

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error();
        const resJson = await res.json() as VacanciesResponse;
        return resJson;

    } catch (error) {

        return {
            count: 0,
            resPerPage: 0,
            vacancies: [],
            totalPages: 0,
        }

    }

}

export async function getVacancy(id: string) {
    let url = new URL(`http://127.0.0.1:8000/api/vacancies/${id}`);
    const res = await fetch(url.toString());
    const resJson = await res.json() as { vacancy: Vacancy, candidates: number };
    return resJson;
}