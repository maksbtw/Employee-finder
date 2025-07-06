'use client'

import "@components/styles/Header.css"
import Filters from "@components/Filters";
import {useRouter, useSearchParams} from "next/navigation";
import { useEffect, useState} from "react";
import { IoSearch } from "react-icons/io5";

export default function Header () {
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setSearchTerm(decodeURIComponent(searchParams.get('search') || ''));
    }, [searchParams.get('search')]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const params = new URLSearchParams(searchParams.toString());
            params.set('search', encodeURIComponent(searchTerm));
            router.push(`?${params.toString()}`);
        }
    };

    const handleSearchButton = (): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('search', encodeURIComponent(searchTerm));
        router.push(`?${params.toString()}`);
    }

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement>): void =>
        { setSearchTerm(e.target.value) }

    return (
        <header>
            <h1>Employees</h1>
            <nav className="main-nav">
                <div className="search-bar-wrapper">
                    <input
                        type="text"
                        placeholder="Search employee [Enter]"
                        value={searchTerm}
                        onChange={handleTyping}
                        onKeyDown={handleSearch}/>
                    <IoSearch className="search-icon" onClick={handleSearchButton} />
                </div>
                <Filters />
            </nav>
        </header>
    )
}