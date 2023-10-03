import { useState, useEffect } from "react";
import HeadInfos from "../components/referencement/head";
import HeroPart from "../components/general/hero";
import BlocContenus from "../components/general/contenu";
import { useContext } from "react";
import { LoadingContext } from "../contexts/loading/loadingcontext";
import LoadingMessage from "../components/chargement/loadingmessage";
export default function Home (){
   
    const [Head, setHead] = useState([]);
    const [Hero, setHero] = useState([]);
    const [Contenus, setContenus] = useState([]);
    const [loading, setLoading] = useContext(LoadingContext)
  
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:1337/api/home?populate=*", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer f8e3071f5b26bf36d60fdc669a5806b763c128bfb408391ad1a80b2a57009dd024144eb757504d83598e4338115277f6f2e42333b2f8d258eb34699a18f1bcc97da5e4ee6528cdab2658972ab8785cb380132ad6bd0425b383b31144adc9ea08c3dda1e5e424bc357555e45e81449cad715e80a27536840440c1b1845d8c4811"
      },
    })
    
      .then((response) => response.json())
      .then((data) => {
        setHead(data.data.attributes.Head);
        setHero(data.data.attributes.Hero);
        setContenus(data.data.attributes.Contenus);
        setLoading(false)
       
      });
  }, []);
  


    return (
        <div>
            <head>
                <HeadInfos
                title = {Head.title}
                meta_name={Head.meta_name}
                meta_content={Head.meta_content}
                />
            </head>
            <body>
            {loading ? (
                <LoadingMessage message ='Chargement de la page' />
              ) : (
              <div className="px-4 d-flex flex-column h-100">
                <div className="fond-bleu">
                    <HeroPart
                              h1 = {Hero.h1}
                              texte = {Hero.texte}
                              texte_bouton={Hero.texte_bouton}
                              showcontenu = {true}
                    />
                </div>
                  
                    <div className="mt-4"></div>
                   
                    {Contenus.map(({ id, h2, texte }, index) => (
                              <>
                              <BlocContenus
                                  key = {id}
                                  h2 = {h2}
                                  texte = {texte}
                                  className={`${
                                    index % 2 === 0
                                      ? "justify-content-start"
                                      : "justify-content-end"
                                  }`}
                              />
                              </>
                      ))}
                   
                      
              </div>)
            }
            </body>   
        </div>
)}