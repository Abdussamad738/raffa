import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Box,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HandleLike from '../utils/handleLike';
import { renderStars } from '../utils/renderStars';
import {Link} from 'react-router-dom'
function Recommendation ({ handleThumbnailClick }) {
  const products = useSelector((state) => state.products.products);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Select a random subset of 4 or 5 products
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 5);
    setRecommendations(randomProducts.map((product, index) => ({ ...product, index })));
  }, [products]);

  const handleDelete = (productId) => {
    const updatedRecommendations = recommendations.filter((product) => product._id !== productId);
    setRecommendations(updatedRecommendations);
  };

  return (
    <Box style={styles.cardRec}>
        {/* <Box sx={{ mt: 3, mb: 2 }}> */}
        {/* <Typography variant="caption">Have a look at these!!!</Typography> */}
      {/* </Box> */}
      {recommendations.map((product) => (
        <Card key={product._id} style={styles.card}>
          
          <Box style={styles.imageContainer}>
            <IconButton
              color="secondary"
              onClick={() => handleDelete(product._id)}
              style={styles.closeButton}
            >
              <CloseIcon />
            </IconButton>
            <HandleLike product={product} className="handle-like"/>
            
            
            {/* Add HandleLike component here */}
          </Box>
          <Box>
          <Link to={`/product/${product._id}`}onClick={() => handleThumbnailClick(product.index)}>
          <CardMedia
              component="img"
              alt={product.Name}
              src={`https://raffasports.s3.ca-central-1.amazonaws.com/${product.image[0]}`}
              style={styles.image}
            />
            </Link>
          </Box>
          
          <CardContent style={styles.content}>
          <Box>
            <Typography variant="h6">{product.Name}</Typography>
            <Typography variant="subtitle1">Price: AED {product.offerPrice || product.actualPrice}</Typography>
            {/* <Typography variant="subtitle1">Rating: {product.rating}</Typography> */}
            <div className="ratings">
          {/* Render stars based on ratings */}
          <div className="stars">
          {renderStars(product.ratings[0])}
          </div>
          <span className="rating-text">
            ({product.ratings[1]} )
          </span>
        </div>
        </Box>
          </CardContent>
          
        </Card>
      ))}
    </Box>
  );
};

export default Recommendation;

const styles = {
  cardRec: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '16px',
    flex: 1,
  },
  imageContainer: {
    display: 'flex',
    flexDirection:'row',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    // top: '8px',
    right: '8px',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '180px',
    // marginRight: '16px',
  },
  content: {
    flex: 1,
  },
};
