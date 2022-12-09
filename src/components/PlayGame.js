import { Birds } from "../data"
import { Howl } from 'howler'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Box from '@mui/material/Box'
import styled from "styled-components";
import bird from '../assets/images/Bird.jpg'







const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    background-image: url(${bird});
    background-size: cover;`


const Logo = styled.span`
font-size: 75px;
padding: 20px;
color: white;
font-weight: bolder;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
`;



const Button = styled.button`
  border: solid;
  background-color: orange;
  &:hover,
  &:focus {
    background-color: palevioletred;
  }
  font-size: 50px;
  color: blue;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  border: solid;
  background-color: blue;
  font-size: 30px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
`;


function PlayGame() {

    const [sucessGuess, setGuess] = useState("none")
    const [initialState, setState] = useState("flex")
    const [val, setVal] = useState("")

    const click = () => {
        if (inputValue === randomBird.label) {
            setGuess("flex")
            setState("none")
        } else {
            alert("Try Again")
        }
    }

    let randomBird = Birds[Math.floor(Math.random() * Birds.length)];

    const call = new Howl({
        src: randomBird.sound,
        html5: true,
        volume: 0.1,
    });
   
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState('');
    
    return (
       
        <Container>          
            <Logo>Birdle</Logo>          
           <Button onClick={() => call.play()}>       
                 Play Call
           </Button>

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
            sx={{ width: 300, marginTop: 5 }}x
            renderInput={(params) => <TextField {...params} label=""  />}
          />

<SubmitButton onClick={click}>Submit Guess</SubmitButton>



           <Box sx={{ 
    
    display: sucessGuess,
    height: "50vh", 
    }} >
         <Image src={randomBird.img} 
         sx={{ 
    margin: "150px", }} />
</Box>
<Box sx={{ 
    display: initialState,
    height: "50vh",
    margin: 0,
    padding: 0,
    }} >
         <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" />
</Box>
      
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
            sx={{ width: 300, marginTop: 5 }}x
            renderInput={(params) => <TextField {...params} label=""  />}
          />

<SubmitButton onClick={click}>Submit Guess</SubmitButton>





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





