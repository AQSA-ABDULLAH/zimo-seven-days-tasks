"use client";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, firestore } from "../firebase/config";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
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
                        if (error.code === "permission-denied") {
                            console.error("Permission denied: Verify Firestore security rules.");
                        }
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

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to the Dashboard, {user ? user.email : "Guest"}
                </h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
