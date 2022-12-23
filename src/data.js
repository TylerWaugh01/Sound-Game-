import robin from "./assets/images/Robin.jpg"
import dove from "./assets/images/mourning-dove.jpg"
import northernFlicker from "./assets/images/northern-flicker.jpg"
import robinCall from "./assets/sounds/robin-sound.mp3"
import doveCall from "./assets/sounds/mourning-dove-sound.mp3"
import northernFlickerCall from "./assets/sounds/northern-flicker.mp3"
import northernFlickerMap from "./assets/images/northern-flicker-map.jpg"
import { linkClasses } from "@mui/material";

export const Birds = [ 
  {
    id: 1,
    stateBird: "Kansas",
    label: "Robin",
    img: robin,
    sound: robinCall,
    habitat: "Lorem",
    bio: "The forest robin or orange-breasted forest robin (Stiphrornis erythrothorax) is a species of bird from Central and West Africa. It is monotypic in the genus Stiphrornis. It has been placed in the family Turdidae, but is now generally placed in Muscicapidae in the group popularly known as chats. Most taxonomists consider it a single species, but some reviews have recommended recognizing 5 species. It has a total length of around 12 cm (4+3⁄4 in), has dark upperparts, and a throat and chest that, depending on the subspecies, is yellow-orange or deep orange.[2]",
    locationMap: "",
    nesting:"",
    bio:"",
    lifespan:"",
    url:"",
    conservationStatus:"",
    scientficClassification:"",
    taxonomyFamily:"", 
    behavior:"",
    diet:"",
    migratory: "",
   },
   {
      id: 2,
      label: "Dove",
      stateBird: "Kansas",
      img: dove,
      sound: doveCall,
      habitat: "Lorem",
      bio: "Columbidae is a bird family consisting of doves and pigeons. It is the only family in the order Columbiformes. These are stout-bodied birds with short necks and short slender bills that in some species feature fleshy ceres. They primarily feed on seeds, fruits, and plants.",
      locationMap: "",
      nesting:"",
      bio:"",
      lifespan:"",
      url:"",
      conservationStatus:"",
      scientficClassification:"",
      taxonomyFamily:"", 
      behavior:"",
      diet:"",
      migratory: "",
    },
    {
      id: 3,
      label: "Northern Flicker",
      stateBird: "Alabama",
      img: northernFlicker,
      sound: northernFlickerCall,
      habitat: "Open forests, woodlots, groves, towns, semi-open country. With its wide range, from Alaska to Nicaragua, the flicker can be found in almost any habitat with trees. Tends to avoid dense unbroken forest, requiring some open ground for foraging. May be in very open country with few trees.",
      bio: "Columbidae is a bird family consisting of doves and pigeons. It is the only family in the order Columbiformes. These are stout-bodied birds with short necks and short slender bills that in some species feature fleshy ceres. They primarily feed on seeds, fruits, and plants.",
      locationMap: northernFlickerMap,
      nesting:"Nest site is cavity in tree or post, rarely in a burrow in the ground.",
      bio:"This brown woodpecker flashes bright colors under the wings and tail when it flies. Its ringing calls and short bursts of drumming can be heard in spring almost throughout North America. Two very different-looking forms -- Yellow-shafted Flicker in the east and north, and Red-shafted Flicker in the west -- were once considered separate species.",
      lifespan:"",
      url:"https://en.wikipedia.org/wiki/Northern_flicker",
      conservationStatus:"Although still abundant and widespread, recent surveys indicate declines in population over much of the range since the 1960s.",
      scientficClassification:"Colaptes auratus",
      taxonomyFamily:"Woodpeckers", 
      behavior:"Northern Flickers don’t act like typical woodpeckers. They mainly forage on the ground, sometimes among sparrows and blackbirds.",
      diet:"Mostly ants and other insects. Probably eats ants more frequently than any other North American bird",
      migratory: "Yes",
      nicknames:"yellowhammer, common flicker, clape, gaffer woodpecker, heigh-ho, wake-up, walk-up, wick-up, yarrup, gawker bird",
      funFact:"The tongues of most woodpeckers are adapted to spear and extract insects from wood, but the flicker's tongue is a bit different — in ways advantageous for lapping up large numbers of ants.",
      backyardTips: "Consider putting up a nest box to attract a breeding pair. Make sure you put it up well before breeding season. Attach a guard to keep predators from raiding eggs and young."
    }
  ];

  // BIRD OBJECT SHAPE - NOT FINAL
  // 
  /*
    {
      id
      label
      stateBird
      sound
      img
      habitat
      locationMap?
      nesting
      bio
      lifespan
      url
      nickname?
      conservationStatus
      scientficClassification
      taxonomy - family? 
      behavior
      diet
      migratory: boolean
      funFact?
      backyardTips?
    }

  */




 

// Photo by <a href="https://unsplash.com/@janmeeus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Meeus</a> on <a href="https://unsplash.com/s/photos/Robin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

/* 
Bird links 

https://macaulaylibrary.org/
https://xeno-canto.org/explore/api

Northern Flicker
https://www.audubon.org/field-guide/bird/northern-flicker
https://www.kaytee.com/learn-care/wild-bird/us-state-birds
https://www.allaboutbirds.org/guide/Northern_Flicker/id
https://abcbirds.org/bird/northern-flicker/
https://en.wikipedia.org/wiki/Northern_flicker#Call_and_flight
http://www.biokids.umich.edu/critters/Colaptes_auratus/sounds/resources/contributors/naturesongs/nofl2/
*/