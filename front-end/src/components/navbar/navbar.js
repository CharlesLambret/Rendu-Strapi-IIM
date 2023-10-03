import { useEffect, useState} from 'react';
import {Link, Outlet, useNavigate } from 'react-router-dom';
import AuthPopin from '../auth/popinlogin.js';
import Logo from '../../img/apple-touch-icon.png'
import { removeToken } from '../../api/helpers.js';
import { useAuthContext } from "../../contexts/Auth/authcontext.js";
import SignUpPopin from '../auth/popinsignup;.js';
export default function Navbar  () {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const RedirectToHome = () => {
    useEffect(() => {
      if (window.location.href === 'http://localhost:3000/') {
        window.location.replace('http://localhost:3000/home');
      }
    }, []);
  
    return null;
  };

  const handleLogout = () => {
    removeToken();
    setUser(null); // Efface l'état de l'utilisateur dans le contexte d'authentification
    navigate("/home", { replace: true });
  };
  const [navbar, setNavbar] = useState([]);
  const [isDataLoaded, setIsDataLoaded ] = useState(false);
  useEffect(() => {
    fetch("http://localhost:1337/api/navbar?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811"
        },
      })
        .then((response) => response.json())
        .then((data) => setNavbar(data.data.attributes.links))
        setIsDataLoaded(true);
  }, []);


  RedirectToHome()
  return (
    <>
      <nav className="navbar navbar-expand-lg col-12 navbar-dark bg-dark position-fixed">
        <div className="container">
          <img src ={Logo}  />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navbar
              .filter(({ needAuth }) => (user ? true : !needAuth))
              .map(({ id, Label, Slug }) => (
                <li className="nav-item" key={id}>
                  <Link className="nav-link" to={Slug}>{Label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {user ? (
              <>
                <button
                  className="btn btn-outline-primary"
                 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              <div className="d-flex flex-row w-25 justify-content-around">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal" >
                    Login
                  </button>
                  <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal"
                  >
                  SignUp
                </button>
                </div>
                
              </>
            )}
        </div>
      </nav>
      <AuthPopin/>
      <SignUpPopin/>
      <div id="navbarspacing"></div>
      <div id="detail">
        <Outlet />
      </div>
    </>

    
  );
}

