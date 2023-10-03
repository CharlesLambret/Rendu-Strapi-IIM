
    
import React, { useState } from "react";
import { AuthContext } from "../../contexts/Auth/authcontext";
import { useEffect } from "react";
import { getToken } from "../../api/helpers";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:1337/users/me`, {
        headers: { Authorization: "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811" },
      });
      const data = await response.json();

      setUserData(data);
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleNomChange = (event) => {
    setNom(event.target.value);
  
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
     
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading, email, password, nom, prenom, handleEmailChange, handlePasswordChange, handleNomChange, handlePrenomChange }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;