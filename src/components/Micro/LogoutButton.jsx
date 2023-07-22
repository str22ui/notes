import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
const navigate = useNavigate();
    
if(localStorage.getItem("token") == null) navigate("/login");

const logout = () => {
    axios.post("http://localhost:8000/api/auth/logout",
    {},
    {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }).then((res) => {
        localStorage.clear();
        navigate("/login");
    }).catch((err) => {
        console.log(err);
    })
}

return ( <div>
    <button onClick={logout}>LOGOUT</button>
</div> );
}

export default Logout;