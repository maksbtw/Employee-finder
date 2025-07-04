import EmployeeCard from "@components/EmployeeCard";
import Header from "@components/Header"
import Image from "next/image";
import type { TeamMember } from "@shared/types";


const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/');
        if (!response.ok) throw new Error('Failed to fetch data');

        return await response.json();
    } catch (err) {
        console.log("Fetching error", err);
    }
};

const searchCompare = (pattern: string, toCheck: string) => {
    return toCheck.toLowerCase().includes(pattern.toLowerCase());
}

export default async function App({searchParams}: { searchParams: { search: string, filter: string } }) {
    const searchValue = decodeURIComponent(searchParams.search || '');
    const filterValue = decodeURIComponent(searchParams.filter || '');
    const employees = await fetchData();

    const filteredEmployees = employees.filter((el: TeamMember) =>
        searchCompare(searchValue || '', `${el.firstName} ${el.lastName}`)
        && (filterValue === 'All' || searchCompare(filterValue, el.position))
    );
    const emptyList = filteredEmployees.length === 0

    const renderList = () => {
        if (!emptyList)
            return (
                filteredEmployees.map((el: TeamMember) => {
                    return <EmployeeCard key={el.id} employee={el}/>
                })

            )
        else
            return (
                <div>
                    <h1>No matches found</h1>
                    <Image src={`/no-matches.jpg`} alt={"fun image"} width={300} height={100} draggable={false}/>
                </div>
            )
    }

    return (
        <>
            <Header/>
            <main>
                {
                    renderList()
                }
            </main>
        </>
    )
}