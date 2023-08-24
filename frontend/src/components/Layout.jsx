import { Box,useMediaQuery } from "@mui/material";
import React from 'react'
import activewear from '../assets/activewear.png'
import billiards from '../assets/billiards.png'

import cricket from '../assets/cricket.png'
import fitness from '../assets/fitness.png'
import football from '../assets/football.png'
import games from '../assets/games.png'
import racket from '../assets/racket.png'
import skating from '../assets/skating.png'
import trophies from '../assets/trophies.png'
import volleyball from '../assets/volleyball.png'
import water from '../assets/water.png'
import basketball from '../assets/basketball.png'
import '../styles/layout.css'; 




const gridTemplateLargeScreens = `
  "a a b b c c d d"
  "a a b b c c d d"
  "e e f f g g h h"
  "e e f f g g h h"
  "i i j j k k l l"
  "i i j j k k l l"

`;

const gridTemplateMediumScreens = `
  "a a b b c c "
  "a a b b c c "
  "d d e e f f"
  "d d e e f f"
  "g g h h i i "
  "g g h h i i"
  "j j k k l l"
  "j j k k l l"

`;

const gridTemplateSmallScreens = `
  "a b "
  "a b "
  "c d"
  "c d"
  "e f"
  "e f"
  "g h "
  "g h "
  "i j"
  "i j"
  "k l"
  "k l"
`;


  const categories = [

    { name: 'Apparels', area: 'i' ,img:activewear},
    { name: 'Exercise & Fitness', area: 'j',img:fitness },
    { name: 'Football', area: 'a',img: football},
    { name: 'Basketball', area: 'd' ,img:basketball},
    { name: 'Volleyball', area: 'c' ,img:volleyball},
    { name: 'Cricket', area: 'b' ,img:cricket},
    { name: 'Water & Combats', area: 'l',img:water },
    { name: 'Games', area: 'e' ,img:games},
    { name: 'Racket', area: 'k' ,img:racket},
    { name: 'Skating', area: 'h' ,img:skating},
    { name: 'Billiards', area: 'f' ,img:billiards},
    { name: 'Trophies', area: 'g' ,img:trophies},
    // Add more categories as needed
  ];

export default function Layout({  onCategoryClick }) {
    

  // const colors = tokens(theme.palette.mode);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1500px)");
  const isSmallScreen = window.innerWidth <= 500;

  const handleCategoryClick = (category) => {
      console.log('from handlecategoryclick',category)
    onCategoryClick(category.name);

  };
  return (
    <div>
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      marginTop="7%"
      marginLeft='3%'
      marginRight='5%'
      backgroundColor={'#dddcdbcc'}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(4, minmax(150px, 1fr))",
              gridTemplateRows: "repeat(5, minmax(100px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
              gridAutoColumns: "1fr", // Make all items equally spaced
              gridAutoRows: "1fr", // Make all items equally spaced
            }
          : isSmallScreen
          ? {
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(12, minmax(80px, 1fr))",
              gridTemplateAreas: gridTemplateSmallScreens,
              gridAutoColumns: "1fr", // Make all items equally spaced
              gridAutoRows: "1fr", // Make all items equally spaced
            }
          : {
              gridTemplateColumns: "repeat(1, 1fr)",
              gridTemplateRows: "repeat(12, minmax(80px, 1fr))",
              gridTemplateAreas: gridTemplateMediumScreens,
              gridAutoColumns: "1fr", // Make all items equally spaced
              gridAutoRows: "1fr", // Make all items equally spaced
            }
      }
    >
        {categories.map((category) => (
          <div
            key={category.name}
            style={{ gridArea: category.area, backgroundColor:'rgb(229 234 243)' }}
          className="category" onClick={() => handleCategoryClick(category)}>
            <img src={category.img} alt={category.name}></img>
            <h6>{category.name}</h6>
          </div>
        ))}
    </Box>
    </div>
  )
}
