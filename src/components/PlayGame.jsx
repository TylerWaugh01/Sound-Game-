import { Birds } from "../data"
import { Howl } from 'howler'
import Select from "./Select";

function PlayGame(props) {

    let randomBird = Birds[Math.floor(Math.random() * Birds.length)];
    props = randomBird.sound


    const call = new Howl({
        src: props,
        html5: true,
        volume: 0.1,
    });

    return (
        <div>
            <button onClick={() => call.play()}>
                Guess The Bird
            </button>
            <Select /> 

        </div>
    );
}

export default PlayGame;




