import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail, validatePassword } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSignUp = async (e) => {
       e.preventDefault();


        if(!name) {
          setError("Inserire il nome");
          return ;
        }

        if(!validateEmail(email)) {
          setError("Inserire una email valida");
          return;
        }

        if(!validatePassword(password)) {
            const errorMessage = (
                <>
                    Inserire una password valida! <br />
                    N.B.La password deve contenere: <br />
                    min. 8 caratteri<br />
                    min. 1 carattere<br />
                    min. 1 lettera maiuscola<br />
                    min. 1 numero<br />
                </>
            )
          setError(errorMessage);
          return;
        }

        setError('');

        // SignUp API Call

        try {
            const response = await axiosInstance.post("/create-account", {
            fullName: name,
            email: email,
            password: password,
            });
            
            // Handle successful registration response 
            if(response.data && response.data.error){
            setError(response.data.message)
            return
            }
    
            if(response.data && response.data.accessToken){
            localStorage.setItem("token", response.data.accessToken)
            navigate('/dashboard')
            }
    
        } catch (error) {
            // Handle login error
            if (error.response && error.response.data && error.response.data.message) {
            setError(error.response.data.message);
            } else {
            setError("Si è verificato un errore improvviso. Riprovare.");
            }
        }
    };

    return (
        <>

            <Navbar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSignUp}>
                       <h4 className="text-2xl mb-7">SignUp</h4>

                       <input 
                            type="text" 
                            placeholder="Nome" 
                            className="input-box" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input-box" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <PasswordInput 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <button type="submit" className="btn-primary">
                           Crea Account
                        </button>

                        <p className="text-sm text-center mt-4">
                           Hai già un account?{" "}
                          <Link to="/login" className="font-medium text-primary underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
                
    )
}

export default SignUp;