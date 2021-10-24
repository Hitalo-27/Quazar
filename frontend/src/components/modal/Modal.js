import React, { useRef, useEffect, useCallback } from "react";
import ReactPlayer from 'react-player';

import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import './modal.css';



const backgroundModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1200px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({ showModal, setShowModal }) {  
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <backgroundModal onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ReactPlayer id="video" controls url="https://www.youtube.com/watch?v=vgm69mJ1ZRc" />
              <ModalContent>
                <h1 className="videoTitle">Projeto Reparo Já</h1>
                <img className="logo" src='../../../../images/logo.png' alt="Reparo Já" />
                <p className="videoText"> Um sistema online, de fácil manuseio, que possibilitará que usuários que
                  necessitam de serviços de profissionais liberais para reparos de eletrodomésticos
                  e eletroeletrônicos que possam buscá-los de acordo com a sua geolocalização,
                  levando-se em conta critérios como a avaliação do profissional e a distância
                  poderá contribuir para encontrar com maior facilidade profissionais capacitados
                  na internet. Um sistema que conecta o cliente ao prestador de serviços.
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </backgroundModal>
      ) : null}
    </>
  );
}

export default Modal;
