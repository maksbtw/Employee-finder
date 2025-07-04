import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Filters() {
    const options = [
        'All', 'Project Manager', 'DevOps', 'Frontend', 'Backend', 'QA'
    ]
    const [selectedFilter, setSelectedFilter] = useState(options[0]);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilter = (e) => {
        setSelectedFilter(e.target.name)
        const params = new URLSearchParams(searchParams.toString());
        params.set('filter', encodeURIComponent(e.target.name));
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="filters">
            {
                options.map((option, index) => {
                    return <button
                        key={index}
                        name={option}
                        onClick={handleFilter}
                        className={selectedFilter === option ? "active-filter" : "" }>{option}</button>
                })
            }
        </div>
    )
}