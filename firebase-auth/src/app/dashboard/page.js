"use client"; // Add this directive to mark the file as a client-side component

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, firestore } from "../firebase/config";
import AddPhoto from "../upload-photo/page"; // Import AddPhoto component

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                if (user.emailVerified) {
                    try {
                        const userDoc = await getDoc(doc(firestore, "users", user.uid));
                        if (!userDoc.exists()) {
                            console.log("User document does not exist. Creating a new one.");
                            const registrationData = localStorage.getItem("registrationData");
                            await setDoc(doc(firestore, "users", user.uid), {
                                email: user.email
                            });
                            localStorage.removeItem("registrationData");
                        }
                        setUser(user);
                    } catch (error) {
                        console.error("Error accessing Firestore document:", error);
                    }
                } else {
                    console.warn("Email is not verified. Redirecting to verification.");
                    router.push("/verify-email");
                }
            } else {
                setUser(null);
                router.push("/login");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth, router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/");
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    const openModal = () => setIsModalOpen(true); // Open modal
    const closeModal = () => setIsModalOpen(false); // Close modal

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="p-8 rounded-lg shadow-md bg-white w-3/4 max-w-lg">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to the Dashboard, {user ? user.email : "Guest"}
                </h1>
                <div className="flex flex-col mt-6 space-y-4">
                    <h1 className="text-lg font-medium">Your Images</h1>
                    <div className="flex flex-row justify-between items-center space-x-4">
                        <button
                            onClick={openModal} // Open the modal when clicked
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                        >
                            Upload New Photo
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Show modal when isModalOpen is true */}
            {isModalOpen && <AddPhoto onClose={closeModal} />}
        </div>
    );
};

export default Dashboard;


