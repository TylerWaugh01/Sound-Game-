import { Birds } from "../data"
import { Howl } from 'howler'
// import Select from "./Select";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Box from '@mui/material/Box'

// const [value, setValue] = useState(name[0]);

function PlayGame() {

    const [sucessGuess, setGuess] = useState("none")
    const [val, setVal] = useState("Who Is That Bird?")

    const click = () => {
        if (val === randomBird.name) {
            setGuess("flex")
        } else {
            alert("Try Again")
        }
    }


    // const click = () => {
    //     return (val === randomBird.name ? 'correct' : 'not correct');
    // }

    const change = event => {
        // const newvalue = event.target.value
        // setVal(newvalue)
        setVal(event.target.value)
    }


    let randomBird = Birds[Math.floor(Math.random() * Birds.length)];

    const call = new Howl({
        src: randomBird.sound,
        html5: true,
        volume: 0.1,
    });



    return (
        <div>
             {/* <Autocomplete
      disablePortal
      id="Bird-Box"
      options={Birds}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} name="bird" />}
    /> */}
            
            
            
            <button onClick={() => call.play()}>
                Guess The Bird
            </button>
            <input onChange={change}
                value={val} />
            <button onClick={click}>Click Me</button>

            <Box sx={{ 
                display: sucessGuess,
                height: "40vh",
                 
                
                
                }} >
                <img src={randomBird.img} />
            </Box>


        </div>
    )
}

// Need a type for the input? Perhaps a form input. Nested paper, boxes... form, form label 

// duration of bird call (look at howler docs)

// Toggle image based on guess 

// How to display bird on proper guess 




export default PlayGame;






