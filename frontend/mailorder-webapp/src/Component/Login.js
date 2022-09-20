import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let user = {
            userid: e.target[0].value,
            uname:e.target[1].value,
            upassword: e.target[2].value

        };
        console.log(user);
        let login = true;
        await axios
            .post(`http://localhost:8090/authapp/login`, user)
            .then((res) => {
                localStorage.setItem("token", res.data.authToken); localStorage.setItem("userid", res.data.userid)
            })
            .catch((err) => {
                console.log(err);
                login = false;
            });
        if (login === true) {
            navigate("/home");
        } else {
            alert("wrong Credentials");

        }
    };
    return (
        <>
  
            <div className="d-flex align-items-center">
                <div class="container text-center">
                    <div class="p-3 mb-5 mx-auto bg-white rounded w-50" >
                        <h2>LOGIN</h2>
                        <form className="Login p-3" onSubmit={onLogin}>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">
                                    User ID:
                                </label>
                                <div class="col-sm-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEmail3"
                                        placeholder="Enter User Name"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputName3" class="col-sm-2 col-form-label">
                                    Name:
                                </label>
                                <div class="col-sm-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputName3"
                                        placeholder="Enter User Name"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div class="row mb-3 logdetails2">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">
                                    Password:
                                </label>
                                <div class="col-sm-12">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="inputPassword3"
                                        placeholder="Enter Password"
                                        required
                                    ></input>
                                </div>
                            </div>
                            
                            <div className="btngrp">
                                <button className="btn text-white"
                        style={{backgroundColor:"#1e40af"}} type="submit" >
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
          
        </>
    )
}

export default Login;