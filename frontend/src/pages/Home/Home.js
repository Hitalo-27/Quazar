import React, { useState } from 'react'

import Contact from '../../components/Contact';
import { GlobalStyle } from '../../components/modal/globalStyles';

import Cards from '../../components/Card/Cards';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/Section/HeroSection';
import MenuValues from '../../components/Menu/MenuValues';
import Modal from '../../components/modal/Modal';

import '../../App.css';
import './Home.css';
import '../../components/Card/Cards.css';


function Home() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <HeroSection />

            <div className="titledescEmpresa" id="start">
                <center><p>Quem é a Quazar?</p></center>
            </div>

            <div className="barDescContainer">
                <div className="barDesc">
                    <div classname="imgDescBar">
                        <img className="imgDesc" src='../../../images/quazarClear.png' alt="Logo" />
                    </div>
                    <div className="textDescEmpresa" alt="Logo">
                        <p>A empresa Quazar atua na área de criação e desenvolvimento de softwares, visando sempre
                            em desenvolver o melhor sistema possível para seus clientes, com qualidade e eficiência, sempre
                            respeitando seus clientes e suas opiniões. <br />
                            A empresa foi fundada na escola ETEC de Guaianazes, e iniciou seu trabalho em fevereiro de 2021. Sendo seu
                            objetivo desenvolver o trabalho de conclusão de curso.</p>
                    </div>
                </div>
            </div>




            <div className="containerColor">

                <div className='cards__container'>

                    <div className='cards__wrapper'>
                        <center><div className="CardTitleValue" id="middle">Principios da empresa Quazar</div></center>
                        <ul className='cards__items'>
                            <MenuValues src="../images/icone-valores.png" title="Valores" text="Excelência, profissionalismo no 
                                ambiente de trabalho, Ética em todos projetos desenvolvidos,
                                trabalho em equipe e valorização e respeito com os clientes e empregados."/>

                            <MenuValues src="../images/icone-vision.png" title="Visão" text="A empresa Quazar pretende ser atuante e competitiva
                                no mercado de TI, sempre fazendo o melhor que pode para ser reconhecica pelas suas habilidades e competências." />

                            <MenuValues src="../images/icone-missao.png" title="Missão" text="A Quazar tem a missão de proporcionar sempre a melhor experiência para seus cleintes, fornecendo
                            um software de qualidade com as melhores tecnologias."/>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="projeto" className="fundo">

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        {showModal ? null : (
                            <div className="videoMainTitle">
                                <h1 className="projetoH1"> Projeto da Quazar </h1>
                            </div>
                        )}


                        <ul className='cards__items'>


                            {showModal ? null : (

                                <>
                                    <div id="barDescContainerReparo" className="barDescContainer">
                                        <div className="barDesc">
                                            <div classname="imgDescBar">
                                                <img id="reparo" className="imgDesc" src='../../../images/logo.png' alt="Reparo Já" />
                                            </div>
                                            <div className="textDescEmpresa" alt="Logo">
                                                <h3>Reparo Já</h3>
                                                <p className="projetoP">Venha conhecer o primeiro</p>
                                                <p className="projetoP2">projeto da empresa Quazar</p>
                                                <button className="button" onClick={openModal}>Saiba Mais...</button>
                                            </div>
                                        </div>
                                    </div>

                                </>

                            )}

                            <Modal showModal={showModal} setShowModal={setShowModal} />
                            <GlobalStyle />



                        </ul>
                    </div>
                </div>

            </div>

            <Cards />


            <Contact />

            <Footer />
        </>
    );
}

export default Home;