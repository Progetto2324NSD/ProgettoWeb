import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { useLocation, useSearchParams } from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();

    //const token = new URLSearchParams(useLocation().search).get('token');
    //const token = useLocation().search.slice(0, useLocation.search.length).split("=").pop();
    
    const token = location.search.slice(1).split("&").find(param => param.startsWith("token="))?.split("=")[1];

    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    if(!token){
        return(
            <p>Token non presente</p>
        )
    }


    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form>
                        <h4 className="text-2xl mb-7">Reset Password</h4>
                        <PasswordInput 
                            value={password}
                            placeholder="Inserisci la nuova Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <PasswordInput 
                            value={confirmPassword}
                            placeholder="Conferma Password" 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button type="submit" className="btn-primary">Reset Password</button>

                    </form>
                </div>
            </div> 
            
        </>
      );
}

export default ResetPassword;