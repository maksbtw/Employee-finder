import Image from "next/image";

const fetchData = async (id) => {
    try {
        const response = await fetch('http://localhost:3000/api/' + id);
        if (!response.ok) throw new Error('Failed to fetch data');

        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
};

export default async function EmployeeDetails({ params }) {
    const employee = await fetchData(params.id)

    return (
        <div className="employee-details">
            <section className="top-wrapper">
                <Image src={`/user-icon.png`} alt={"user icon"} className="employee-photo" width={100} height={100} />
                <div className="main-info">
                    <span className="name">{employee.firstName} {employee.lastName}</span> <br/>
                    <span className="position">{employee.position}</span>
                    <div className="skills">
                        {
                            employee.technologies.map((skill, index) => (
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
    );
}