'use client'

import "@components/styles/EmployeeCard.css"
import {useRouter} from "next/navigation";
import Image from 'next/image';
import type { TeamMember } from "@shared/types";

export default function EmployeeCard({ employee }: { employee: TeamMember }) {
    const router = useRouter();

    const handleOpenCard = (): void => {
        router.push(`/details/${employee.id}`)
    }

    return (
        <>
            <div onClick={handleOpenCard} className="employee-card">
                <Image src={`/user-icon.png`} alt={"user icon"} className="employee-photo" width={100} height={100}/>
                <div className="employee-info">
                    <span className="name">{employee.firstName} {employee.lastName}</span>
                    <br/>
                    <span className="position">{employee.position}</span>
                </div>
            </div>
        </>
    )
}