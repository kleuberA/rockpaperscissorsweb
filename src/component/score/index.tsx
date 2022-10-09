function Score(props : any){

    function verificaNumeroScore(){
        if(props.score < 10){
            return `0${props.score}`;
        }
        return props.score;
    }

    return(
        <div className="containerScore mx-auto w-4/5 h-64 flex justify-center">
            <div className="score shadow hover:shadow-2xl w-60 mx-auto flex justify-center items-center flex-col my-4 rounded-lg border-2 border-white">
                <span className="italic text-5xl ">SCORE</span>
                <span className="italic text-4xl">{verificaNumeroScore()}</span>
            </div>
        </div>
    )
}

export default Score;