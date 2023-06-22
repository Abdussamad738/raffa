import { Box, useMediaQuery } from "@mui/material";
import React from 'react'
import activewear from '../assets/activewear.png'
import badminton from '../assets/badminton.png'
import billiards from '../assets/billiards.png'
import cards from '../assets/cards.png'
import carroms from '../assets/carroms.png'
import clothing from '../assets/clothing.png'
import combat from '../assets/combat.jpg'
import cricket from '../assets/cricket.png'
import fitness from '../assets/fitness.png'
import football from '../assets/football.png'
import footwear from '../assets/footwear.png'
import games from '../assets/games.png'
import others from '../assets/others.png'
import racket from '../assets/racket.png'
import roller from '../assets/roller.png'
import skateboards from '../assets/skateboards.jpg'
import skating from '../assets/skating.png'
import squash from '../assets/squash.jpg'
import tabletennis from '../assets/tabletennis.png'
import teamsports from '../assets/teamsports.jpg'
import tennis from '../assets/tennis.png'
import trophies from '../assets/trophies.png'
import volleyball from '../assets/volleyball.png'
import water from '../assets/water.png'
import basketball from '../assets/basketball.png'
import '../styles/layout.css'; 

// const gridTemplateLargeScreens = `
//   "a a d d k k o p"
//   "a a e e k k q r"
//   "a a f f l l s t"
//   "a a g g l l u v"
//   "b b h h m m w w"
//   "b b i i m m x x"
//   "c c j j n n y y"
// `;

const gridTemplateLargeScreens = `
  "a b c d"
  "a b c d"
  "e f g h"
  "e f g h"
  "i j k l"
  "i j k l"
`;

const gridTemplateMediumScreens = `
  "a b c "
  "a b c "
  "d e f"
  "d e f "
  "g h i "
  "g h i "
  "j k l"
  "j k l"
`;

// const categories = [
//     { name: 'Team Sports', area: 'a' ,img:teamsports},
//     { name: 'Active wear', area: 'b' ,img:activewear},
//     { name: 'Exercise & Fitness', area: 'c',img:fitness },
//     { name: 'Football', area: 'd',img: football},
//     { name: 'Basketball', area: 'e' ,img:basketball},
//     { name: 'Volleyball', area: 'f' ,img:volleyball},
//     { name: 'Cricket', area: 'g' ,img:cricket},
//     { name: 'Clothing', area: 'h' ,img:clothing},
//     { name: 'Footwears', area: 'i',img:footwear },
//     { name: 'Water Sports', area: 'j',img:water },
//     { name: 'Games', area: 'k' ,img:games},
//     { name: 'Racket ', area: 'l' ,img:racket},
//     { name: 'Skating', area: 'm' ,img:skating},
//     { name: 'Combat', area: 'n' ,img:combat},
//     { name: 'Billiards', area: 'o' ,img:billiards},
//     { name: 'Carroms', area: 'p' ,img:carroms},
//     { name: 'Cards', area: 'q',img:cards },
//     { name: 'Others', area: 'r',img:others },
//     { name: 'Badminton', area: 's' ,img:badminton},
//     { name: 'Tennis', area: 't',img:tennis },
//     { name: 'Ping Pong', area: 'u',img:tabletennis },
//     { name: 'Squash', area: 'v' ,img:squash},
//     { name: 'Rollers', area: 'w',img:roller},
//     { name: 'Skateboarding', area: 'x' ,img:skateboards},
//     { name: 'Trophies', area: 'y' ,img:trophies},
//     // Add more categories as needed
//   ];


  const categories = [

    { name: 'Apparels', area: 'i' ,img:activewear},
    { name: 'Exercise & Fitness', area: 'j',img:fitness },
    { name: 'Football', area: 'a',img: football},
    { name: 'Basketball', area: 'd' ,img:basketball},
    { name: 'Volleyball', area: 'c' ,img:volleyball},
    { name: 'Cricket', area: 'b' ,img:cricket},
    { name: 'Water & Combats', area: 'l',img:water },
    { name: 'Game Room', area: 'e' ,img:games},
    { name: 'Racket ', area: 'k' ,img:racket},
    { name: 'Skating', area: 'h' ,img:skating},
    { name: 'Billiards', area: 'f' ,img:billiards},
    { name: 'Trophies', area: 'g' ,img:trophies},
    // Add more categories as needed
  ];

export default function Layout() {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1500px)");
  return (
    <div>
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      marginTop="5%"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(250px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateMediumScreens,
            }
      }
    >
        {categories.map((category) => (
          <div
            key={category.name}
            style={{ gridArea: category.area, backgroundColor:'rgb(229 234 243)' }}
          className="category">
            <img src={category.img} alt={category.name}></img>
            <h4>{category.name}</h4>
          </div>
        ))}
    </Box>
    </div>
  )
}
