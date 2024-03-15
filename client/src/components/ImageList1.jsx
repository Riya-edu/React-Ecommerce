
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/material';

export default function TitlebarImageList1() {
  return (
    <Container>
    <ImageList sx={{ width: 1100, height: 500 }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}


const itemData = [
  {
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmaklXTD_ov7dgBXt5pDIC0y61FOJ0RJW6KfGTj4b-pZ-v6-TW7V8OGJ9Cmswf5nX3dIpEQmb99tqRWkwI0aa_cMF4B3yBrrY4rjT-sl9tEWZA361Lujjv&usqp=CAE',
    title: 'Summer Dresses',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6SBkU5y7xsbHizk-7jVI1cr9FS2sRGEUL0mpVsGE5XJnlw2606cd016poePTpsAUL5cLJI3zS-f2ZhOozDsO3y5S0S1ra1x6z9g9PI8Y&usqp=CAE',
    title: 'Smart Casuals',
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyQQks5JP67X7LZmXTqYfUj_XLQY0B7Dq9M8JtuyWj8X_du8ylOr_2FA3yDCuG6PRj-HENP6CmULJwMgEB07RHmf09zcBk7QPtvgwDBV0xjXr9UQDPed4Y&usqp=CAE',
    title: 'Party-Ready',
  },
  {
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4kPJR9VcUGgkybUc270TISmLGJf94lb4J5eGO6oU9q7rDMb4DGQWyZrKLMmRb80id2uBrt-2tDJxfbLkXjByfiVIe7AMAgzbCADwuGj4&usqp=CAE',
    title: 'Shirts & T-Shirts',
    cols: 2,
  }
  /*,
  {
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIOMqbaswOl1_9nKTebYV2Kdmg1SL0ch6YBo66v3nbWrYxXGkUEFzT6rqHo7s3MCaDqk-2xUu_Tz-5m-w2juVz-wdDf751jNrrwgAtRWnh&usqp=CAE',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  }*/
];
  /*,
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
*/