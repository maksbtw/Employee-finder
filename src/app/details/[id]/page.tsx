import EmployeeDetails from "@components/EmployeeDetails";
import ButtonBack from "@components/ButtonBack";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TeamMember } from "@shared/types";

const fetchData = async (id: number): Promise<TeamMember> => {
    try {
        const response = await fetch('http://localhost:3000/api/' + id);
        if (!response.ok) throw new Error('Failed to fetch data');

        return await response.json();
    } catch (err) {
        return new Promise<TeamMember>(() => {})
        console.log("Fetching error", err);
    }
};

export default async function detailsPage({ params }: { params: { id: number } }) {
    const employee: TeamMember = await fetchData(params.id)

    return (
        <>
            <ButtonBack/>
            <EmployeeDetails employee={employee} />
        </>
    );
}