import React,{ useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
const Register = ({setIsAuth, setShowRegister, setEmail, setPassword, email, password}) => {
    let navigate = useNavigate();
    // const [password,setPassword]=useState("");
    // const [confirmPassword,setConfirmPassword]=useState("");
    // const [email,setEmail]=useState("");

    const validatePassword = (password,confirmPassword) => {
      let isValid = true
      if (password !== '' && confirmPassword !== ''){
        if (password !== confirmPassword) {
          isValid = false
          return isValid
        }
      }
      return isValid
    }
    const register = async e => {
      e.preventDefault()
   
      // if(await validatePassword()) {
      //   // Create a new user with email and password using firebase
      //     createUserWithEmailAndPassword(auth, email, password)
      //     .then((res) => {
      //         console.log(res.user)
      //        navigate('/');
      //       })
      //     .catch((err)=>{alert('problem occured')})
      // }
      // setEmail('')
      // setPassword('')
      // setConfirmPassword('')
      if(email && password) {
        alert("You are successfully registered")
        setShowRegister(false);
      } else {
        alert("Please enter valid credentials");
      }
    }
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  
    return <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "1rem;"}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Register</h3>

           

            <div class="form-outline mb-4">
                <label class="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='Enter Valid Mail' onChange={(event)=>setEmail(event.target.value)}/>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="typePasswordX-2">Password</label>
              <input  id="typePasswordX-2" class="form-control form-control-lg"  placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            {/* <div class="form-outline mb-4">
                <label class="form-label"  >Confirm Password</label>
              <input class="form-control form-control-lg" placeholder='Confirm Password' onChange={(event)=>setConfirmPassword(event.target.value)}/>
            </div> */}
          
           
            <button class="btn btn-secondary btn-lg btn-block"  type="submit" onClick={register}>Register</button>
            <br />
            {/* <NavLink to="/login" className="signup-image-link" >I am already registered</NavLink> 
            */}
            <button type='button' onClick={() => setShowRegister(false)}>I am already registered</button>
          </div>
        </div>
      </div>
    // </div>;
}



export default Register;