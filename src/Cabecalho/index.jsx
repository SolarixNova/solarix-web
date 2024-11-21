import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = styled.header`
    background-image: url(../src/assets/painelhero.jpeg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    @media (max-width: 400px) {
        height: 30vh;
    }
    @media (max-width: 1200px) {
        height: 80vh;
    }
    @media (max-width:800px) {
        height: 60vh;
    }
    @media (max-width:600px) {
      height: 40vh;
    }
`

const Titulo = styled.h1`
    color: var(--cor-branca);
    font-size:2em;
    display: inline-block;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid black;
    width: 0;
    animation: typing 5s steps(12, end) infinite, blink 0.5s step-end infinite;
    @keyframes typing {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  
  @keyframes blink {
    0%, 50% {
      border-color: transparent;
    }
    51%, 100% {
      border-color: black;
    }
  }


`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
`

const Links = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    a {
        text-decoration:none;
        color: white;
        font-size:20px;
    }
`

const Aba = styled.a`
    text-decoration: none;
    font-size: 23px;
    color: #FFFFFF;
`

const Botao = styled.button`
    font-size: 23px;
    padding: 1.2rem;
    border-radius: 40px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        border: white solid 1px;
        transition: .7s;
        color: white;
    }
    @media (max-width: 1050px) {
        display: none;
    }
`

const Secao = styled.section`
    text-align: center;
    margin-top: 8rem;
    color: #FFFFFF;
    h1 {
        font-size: 65px;
    }
    p {
        font-size: 30px;
    }
    @media (max-width: 960px) {
        margin-top: 0;
    }
    @media(max-width: 750px) {
        p {
        display: none;
        }
        }
    @media(max-width: 650px) {
        h1 {
            display: none;
        }
    }
    button {
        padding: 1rem;
        background-color: white;
        border: none;
        border-radius: 60px;
        width: 20rem;
        margin-top: 4rem;
        font-size: 30px;
        cursor: pointer;
        &:hover {
            background-color: transparent;
            border: #FFFFFF solid 1px;
            transition: .7s;
            color: #ffffff;
        }
    @media (max-width: 1050px) {
        display: none;
    }
    }
`


export default function Cabecalho() {
    return (
        <Header id="home">
            <Nav>
                <div>
                    <Titulo>Solarix</Titulo>
                </div>
                <Links>
                    <a href="#home">Home</a>
                    <a href="#energias">Energias</a>
                    <a href="#contato">Contato</a>
                </Links>
                <Botao>Vamos Salvar o Mundo</Botao>
            </Nav>
            <Secao>
            <h1>Construindo um mundo sustentável <br /> com soluções <span class="animacao-global">globais</span></h1>
            <p>Somos uma organização que visa o foco em fontes <br /> sustentáveis, em especial a Solar.</p>
            <a href="#energia"><button>Veja mais</button></a>
            </Secao>
        </Header>
    )
}