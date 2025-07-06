'use client'

import {IoMdArrowRoundBack} from "react-icons/io";
import {useRouter} from "next/navigation";

export default function ButtonBack() {
    const router = useRouter();

    return (
        <>
            <IoMdArrowRoundBack className="go-back-button" onClick={router.back}/>
        </>
    )
}