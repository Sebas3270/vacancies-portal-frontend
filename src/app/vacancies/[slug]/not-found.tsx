import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1>Vacancy not found</h1>
      <p>Could not find vacancy you request, but checkout other vacancies we have for you!</p>
      <Link href="/vacancies">Check vacancies</Link>
    </div>
  )
}