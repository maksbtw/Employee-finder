import Image from "next/image";
import "@shared/types"
import "@components/styles/EmployeeDetails.css"
import {TeamMember} from "@shared/types";

export default function EmployeeDetails({ employee }: { employee: TeamMember }) {
    return (
        <>
            <div className="details-wrapper">
                <section className="top-wrapper">
                    <Image src={`/user-icon.png`} alt={"user icon"} width={100} height={100}/>
                    <div className="main-info">
                        <span className="name">{employee.firstName} {employee.lastName}</span> <br/>
                        <span className="position">{employee.position}</span>
                        <div className="skills">
                            {
                                employee.technologies.map((skill: string, index: number) => (
                                    <span key={index} className="skill">{skill}</span>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="bottom-wrapper">
                    <span><strong>Experience:</strong> {employee.experience}</span>
                    <br/><br/>
                    <span>{employee.description}</span>
                </section>
            </div>
        </>
    )
}