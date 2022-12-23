
import { Birds } from "../../data";

import BirdCard from "./BirdCard"

//map through each birdcard for choices on answering bird call question
//will need to map through all choices (max 3 or 4? - populated based on random numbers)
//implement correct choice logic on different component?
  

const DisplayChoices = () => {


  return (
    <>
      <div style={styles.border}>
        <p>this component is for testing, will not interrupt current logic</p>
          <div style={styles.testing}>

          {Birds.map((bird) => <BirdCard key={bird.id} image={bird.img} name={bird.label}/>)}
          
          </div>
      </div>
    </>
  );
}

export default DisplayChoices

const styles = {
  border: {
    padding: '10px',
    margin: '10px',
    border: '2px solid green'
  },
  testing: {
    display: 'flex',
  }
}