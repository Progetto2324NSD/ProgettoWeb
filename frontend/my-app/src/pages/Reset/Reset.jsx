import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";

const passwordReset = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form>
                        <h4 className="text-2xl mb-7">Reset Password</h4>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input-box" 
                        />

                        <button type="submit" className="btn-primary">Reset</button>
                        <p className="text-sm text-center mt-4">
                        Torna alla schermata di <Link to='/Login' className="font-medium text-primary underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div> 
            
        </>
      );
}

export default passwordReset