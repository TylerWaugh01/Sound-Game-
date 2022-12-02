import { Birds } from "../data"
import { Howl } from 'howler'
// import Select from "./Select";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Box from '@mui/material/Box'
import styled from "styled-components";

const Container = styled.div`
    /* padding: 20px; */
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center; 
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function PlayGame() {

    // const [sucessGuess, setGuess] = useState("flex")
    const [sucessGuess, setGuess] = useState("none")
    const [val, setVal] = useState("")

    const click = () => {
        if (inputValue === randomBird.label) {
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
        click();
    }


    let randomBird = Birds[Math.floor(Math.random() * Birds.length)];

    const call = new Howl({
        src: randomBird.sound,
        html5: true,
        volume: 0.1,
    });
   
    const [value, setValue] = useState("Who Is The Bird");
    const [inputValue, setInputValue] = useState('');
    
    return (
        <Container>
            <button onClick={() => call.play()}>
                 Who Made The Call?
           </button>
      
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="bird"
            options={Birds}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Bird" />}
          />

<button onClick={click}>Submit Guess</button>




<Box sx={{ 
    display: sucessGuess,
    height: "50vh",
     
    
    
    }} >
         <Image src={randomBird.img} />
</Box>
</Container>



        
      );
        }

        export default PlayGame;


// Need a type for the input? Perhaps a form input. Nested paper, boxes... form, form label 

// duration of bird call (look at howler docs)

// Toggle image based on guess 

// How to display bird on proper guess 






/* <Box sx={{ 
    display: sucessGuess,
    height: "40vh",
     
    
    
    }} >
    <img src={randomBird.img} />
</Box> */





