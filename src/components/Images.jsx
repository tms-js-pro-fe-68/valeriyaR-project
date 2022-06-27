import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Images(){ 
const itemData = [
    {
      img: './pictures/cook.jpg',
      title: 'Cook',
    },
    {
      img: './pictures/fitness-trainer.jpg',
      title: 'fitness-trainer',
    },
    {
      img: './pictures/salesman.jpg',
      title: 'salesman',
    },
    {
      img: './pictures/teacher.jpg',
      title: 'teacher',
    },
  ];

  return (
    <ImageList sx={{ width: 600, height: 250, zIndex: 0}} variant="woven" cols={4} gap={6}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
