export interface VacanciesResponse {
    resPerPage: number;
    count:      number;
    vacancies:  Vacancy[];
}

export interface Vacancy {
    id:          number;
    title:       string;
    description: string;
    email:       string;
    address:     string;
    vacancyType: string;
    education:   string;
    experience:  string;
    salary:      number;
    positions:   number;
    last_date:   Date;
    user:        number;
}

export interface VacancyFilters {
    page?:          string;
    keyword?:       string;
    location?:      string;
    vacancyType?:   string;
    education?:     string;
}