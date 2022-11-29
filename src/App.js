import RobinCall from "./assets/sounds/robin-sound.mp3"
import {Howl} from 'howler'
// import { Component } from 'react';

// const audioClips = [
//   {sound: RobinCall, 
//    label: "RobinCall"
//   }
// ]

function App() {

    const sound = new Howl({
            src: RobinCall,
            html5: true,
          });
  
  return (
    <div>
     <div onClick={() => sound.play()}>Click To Play Sound</div>
    </div>
  );
}


// function App() {
//   const audioClip = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

//   const callMySound = (src) => {
//     const sound = new Howl({
//             src: {RobinCall},
//             html5: true
//           });
//           sound.play();
//   }
  
//   return (
//     <div>
//      <div onClick={() => callMySound(audioClip)}>Click To Play Sound</div>
//     </div>
//   );
// }


export default App;


// class App extends Component {

//   SoundPlay = (src) => {
//     const sound = new Howl({
//       src,
//       html5: true
//     })
//     sound.play();
//   }
  

//   RenderButtonAndSound = () => {
//     return audioClips.map((soundObj, index) => {
//       <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
//         {soundObj.label}
//       </button>
//     })
//   }


//   render() {
//     Howler.volume(1.0);
//     return <div className='App'>
//       {this.RenderButtonAndSound()}
//     </div>
//   }
// }

// export default App;



// export const Birds = [
//     {
//       id: 1,
//       name: "Robin",
//       img: {Robin},
//       sound: {RobinCall},
//     },
//   ];


//import useSound from 'use-sound';
//import boopSfx from '../../sounds/boop.mp3';
//const BoopButton = () => {
  //const [play] = useSound(boopSfx);
 // return <button onClick={play}>Boop!</button>;
//};


