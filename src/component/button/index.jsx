import { useState } from "react";
import Score from "../score";
import './style.css';
function ButtonGame() {

    let [score, setScore] = useState(0);
    let [resultGame, setResultGame] = useState(false);
    let [messageResult, setMessageResult] = useState();

    const handleClickButtonGame = (event) => {

        let opcaoComputador = ['ROCK', 'PAPER', 'SCISSORS'];
        let jogadaComputador = opcaoComputador[Math.trunc(Math.random() * 3)];
        let jogadaPlayer = event.innerHTML;

        criaAreaDeResultComOpcaoEscolhidaPeloComputador(jogadaComputador);

        if (jogadaPlayer === 'ROCK' && jogadaComputador === 'PAPER') {
            resultGame = false;
            setResultGame(resultGame);
        }
        if (jogadaPlayer === 'ROCK' && jogadaComputador === 'SCISSORS') {
            resultGame = true;
            setResultGame(resultGame);
        }
        if (jogadaPlayer === 'PAPER' && jogadaComputador === 'ROCK') {
            resultGame = true;
            setResultGame(resultGame);
        }
        if (jogadaPlayer === 'PAPER' && jogadaComputador === 'SCISSORS') {
            resultGame = false;
            setResultGame(resultGame);
        }
        if (jogadaPlayer === 'SCISSORS' && jogadaComputador === 'ROCK') {
            resultGame = false;
            setResultGame(resultGame);
        }
        if (jogadaPlayer === 'SCISSORS' && jogadaComputador === 'PAPER') {
            resultGame = true;
            setResultGame(resultGame);
        }

        verificaQuemGanhouRodada();

        let elementoMensagemVencedor = document.querySelector('.elementoDaMensagem');
        elementoMensagemVencedor.classList.remove('invisible');

        let elementoPaiButtonEscolhaComputador = document.querySelectorAll('.containerPlayer > button');
        for (let i = 0; i < elementoPaiButtonEscolhaComputador.length; i++) {
            elementoPaiButtonEscolhaComputador[i].setAttribute('disabled','disabled');
        }

        let elementoPlayAgain = document.querySelector('.playAgain');
        elementoPlayAgain.classList.remove('invisible');

    }

    const handleClickButtonPlayAgain = () =>{
        let elementoPlayAgain = document.querySelector('.playAgain');
        elementoPlayAgain.classList.add('invisible');

        let elementoMensagemVencedor = document.querySelector('.elementoDaMensagem');
        elementoMensagemVencedor.classList.add('invisible');

        let elementoPaiButtonEscolhaComputador = document.querySelectorAll('.containerPlayer > button');
        for (let i = 0; i < elementoPaiButtonEscolhaComputador.length; i++) {
            elementoPaiButtonEscolhaComputador[i].removeAttribute('disabled');
        }

        let elementoPaiButtonComputador = document.querySelector('.buttonComputer');
        let elementoFilhoButtonComputador = document.querySelector('.buttonComputer > p');
        elementoPaiButtonComputador.removeChild(elementoFilhoButtonComputador);

    }

    function criaAreaDeResultComOpcaoEscolhidaPeloComputador(jogadaComputador) {
        let buttonEscolhaComputador = document.createElement('p');

        let listaClassesButton = ['shadow', 'hover:shadow-2xl', 'h-full', 'rounded-lg', 'flex', 'justify-center', 'items-center', 'flex-col'];
        for (let i = 0; i < listaClassesButton.length; i++) {
            buttonEscolhaComputador.classList.add(listaClassesButton[i]);
        }

        buttonEscolhaComputador.innerHTML = jogadaComputador;

        let elementoPaiButtonEscolhaComputador = document.querySelector('.buttonComputer');
        elementoPaiButtonEscolhaComputador.appendChild(buttonEscolhaComputador);
    }

    function verificaQuemGanhouRodada() {
        if (resultGame === true) {
            score++;
            setScore(score);
            messageResult = 'Você Ganhou!';
            setMessageResult(messageResult);
        } else {
            if (score !== 0) {
                score--;
                setScore(score);
            }
            messageResult = 'Você Perdeu!';
            setMessageResult(messageResult);
        }
    }

    return (
        <div className="h-screen">
            <Score score={score} />
            <div className="elementoDaMensagem b relative mx-auto h-12 w-64 flex justify-center items-center invisible">
                <div className="i h-12 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                </div>
                <a className="text-center text-white font-semibold z-10 pointer-events-none" href="teste">{messageResult}</a>
                <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-6 w-6 bg-purple-500"></span>
                </span>

            </div>
            <div className="containerButtons w-4/5 h-72 mx-auto grid grid-cols-2">
                <div className="containerPlayer grid grid-rows-3 grid-cols-4 gap-4">
                    <button onClick={(event) => handleClickButtonGame(event.target)} className="w-40 h-16 col-start-2 col-end-4 px-10 py-5 border border-white uppercase font-semibold tracking-wider leading-none hover:bg-white hover:text-teal-600" type="button">
                        ROCK
                    </button>
                    <button onClick={(event) => handleClickButtonGame(event.target)} className="w-40 h-16 col-start-3 col-end-5 px-10 py-5 border border-white uppercase font-semibold tracking-wider leading-none hover:bg-white hover:text-teal-600" type="button">
                        PAPER
                    </button>
                    <button onClick={(event) => handleClickButtonGame(event.target)} className="w-40 h-16 col-start-2 col-end-4 px-10 py-5 border border-white uppercase font-semibold tracking-wider leading-none hover:bg-white hover:text-teal-600" type="button">
                        SCISSORS
                    </button>

                </div>

                <div className="containerComputer flex justify-center items-center flex-col">
                    <div className="buttonComputer w-2/5 h-2/5 mx-auto rounded-lg border-2 border-white"></div>
                </div>
            </div>
            <div className="playAgain invisible">
                <div className="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
                    <div onClick={handleClickButtonPlayAgain} className="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                    </div>
                    <a href="teste" className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                        <span className=""></span>Play Again!</a>
                </div>
            </div>
        </div>
    )
}

export default ButtonGame;