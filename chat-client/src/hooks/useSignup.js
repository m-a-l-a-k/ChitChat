import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext.jsx';
import toast from 'react-hot-toast'

const useSignup = () => {
  
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({fullName, username, email, DOB, gender, password, confirmPassword}, redirectToLogin) => {
        console.log("Signup function called");

        console.log("Values before validation:", {
            fullName,
            username,
            email,
            DOB,
            gender,
            password,
            confirmPassword
          });
          

        const success = handleInputErrors({
            fullName, username, email, DOB, gender, password, confirmPassword})
        console.log("Validation success?", success);
        if (!success) return;

        setLoading(true);
        try {
            const formattedDOB = DOB.toISOString().split('T')[0]; // → "1946-08-08"
            console.log("Sending fetch to /api/auth/signup with:", { fullName, username, email, DOB, gender, password, confirmPassword });
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ 
                    fullName, 
                    username, 
                    email, 
                    DOB: formattedDOB, 
                    gender, 
                    password, 
                    confirmPassword
                })
            });

            console.log("Fetch executed")
            
            const data = await res.json();

            if (!res.ok) {
                console.log("Fetch failed:", data);
                toast.error(data.error || "Signup failed");
                return;
            }
            
            console.log("Signup Successful:", data)
            toast.success("Successfully signed up. Welcome to ChitChat!");

            // local storage
            localStorage.setItem("chat-user", JSON.stringify(data))
            // context
            setAuthUser(data)
            
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup }

};
export default useSignup



function handleInputErrors({fullName, username, email, DOB, gender, password, confirmPassword}) {
    if (!fullName || !username || !email || !DOB || !gender || !password || !confirmPassword) {
        toast.error('Please fill in all fields')
        return false
    }

    // pass match check
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }

    // pass length check
    if (password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    // age check
    const dob = new Date(DOB);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    const actualAge = hasHadBirthdayThisYear ? age : age - 1;

    if (actualAge < 13) {
        toast.error('You must be at least 13 to use ChitChat');
        return false;
    }

    return true
}