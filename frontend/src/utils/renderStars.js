import React from 'react'
import { StarFill, StarHalf, Star, HeartFill, Heart } from 'react-bootstrap-icons';

export function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={i} className="text-warning" />);
    }
  
    if (halfStar) {
      stars.push(<StarHalf key={fullStars} className="text-warning" />);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={fullStars + i + (halfStar ? 1 : 0)} className="text-warning" />);
    }
  
    return stars;
  }