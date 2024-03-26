
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <Container>
    <ImageList sx={{ width: 1100, height: 500, overflow: "hidden"}}>
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
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZGmLdFI3jy54VXBzwTEkMmVufXIti7alZlORIWHIiwFZePM3gXpDPtHUKm-wIV4xET7CIdbQgxxY0xsN9pK604mmCG6a0cvQTBgjBj28&usqp=CAE',
    title: 'Business Casuals',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFl0QBcRgJQxtE8PXkXcixKxZCt942nfP2S3NMb1wp9WsIenIcDSOrCetjiO73wmyEaEUUFDfFmGvDVohKSOsFtXukDXExuTAa_vEALoY&usqp=CAE',
    title: 'Boho',
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEj3bT57gcSNhQ8ZPxWYXIGYMF1ivuzy_hkkGU6xL1aS_5blOyQDGhpMve3W4nSPS4lsiyjmn1XIgyN94ucP4iQycNankfFSOyQZ4CARQ&usqp=CAE',
    title: 'Jackets',
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtM0NZoiIVADWNeN-toi7eC-eQVGQAJqQ4SkLmSTwyk5GPqZsznvfd9DQN_4gr6dn-19seTzsjrmNyuNA3hRoSpjXgSh1XEZDoMMSkl-r86D_Oosk0cJUg7w&usqp=CAE',
    title: 'Cocktail Dresses',
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