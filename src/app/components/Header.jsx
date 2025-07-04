'use client'

import "./styles/Header.css"
import Filters from "./Filters";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function Header () {
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setSearchTerm(decodeURIComponent(searchParams.get('search') || ''));
    }, [searchParams.get('search')]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Zapobiega domyślnej akcji formularza
            const params = new URLSearchParams(searchParams.toString());
            params.set('search', encodeURIComponent(searchTerm));
            router.push(`?${params.toString()}`);
        }
    };

    const handleTyping = (e) => { setSearchTerm(e.target.value) }

    return (
        <header>
            <h1>Employees</h1>
            <nav className="main-nav">
                <input type="text" className="search-bar" placeholder="Search employee [Enter]" value={searchTerm} onChange={handleTyping} onKeyDown={handleSearch}/>
                <Filters />
            </nav>
        </header>
    )
}