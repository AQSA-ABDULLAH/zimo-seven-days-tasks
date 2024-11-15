"use client"; // Add this line at the top

import React from 'react';
import GoogleAuth from './components/GoogleAuth';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    const signup = () => {
        router.push("/register");
    };

    return (
        <div className="">
            <GoogleAuth />
            <button
                onClick={signup}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Sign Up with Email
            </button>
        </div>
    );
}