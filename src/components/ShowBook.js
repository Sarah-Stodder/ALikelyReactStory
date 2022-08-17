import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'
import Rating from './Raiting';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const books=[{
  "id":2,
  "title":"Pride and prejudice",
  "author": "Jane Austen",
  "pages":432,
  "summary": "Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth.",
  "img":"https://i.pinimg.com/originals/14/d8/ea/14d8ea37846191d498ed5200bb560524.jpg",
  "subject":"Historical Fiction"
 
},{
  "id":3,
  "title":"John Dies at The End",
  "author": "Jason Pargin",
  "pages":464,
  "summary": "On the street they call it Soy Sauce, it is a drug that promises an out-of-body experience with each hit, and lets users drift across time and dimensions. But some who come back are no longer human. Suddenly, a silent otherworldly invasion is underway, and mankind needs a hero.",
  "img":"https://mpd-biblio-covers.imgix.net/9781429956789.jpg",
  "subject":"Horror"    
},{
  "id":5,
  "title":"The Subtle Art of Not Giving a F*ck",
  "author": "Mark Manson",
  "pages":224,
  "summary": "The Subtle Art of Not Giving a F*ck is a book that challenges the conventions of self-help by inviting the reader to NOT try, say no often and embrace negative thinking. Not giving a f*ck is about being comfortable with being different and caring about something more important than adversity.",
  "img":"https://www.wayneliew.com/content/images/size/w1460/wordpress/2020/06/the-subtle-art-of-not-giving-a-fck-book-cover.jpg",
  "subject":"Self Help"   
}]

export default function ShowBook({book}) {
  const [expanded, setExpanded] = React.useState(false);
  book = books[2]
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{minWidth:"300px", maxWidth:"1000px", display:"flex", justifyContent:"center",  mx:"auto" }}> 
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
       
       title={book.title}
        subheader = {book.author}
        
      />
      <CardMedia
        component="img"
        image={book.img}
        alt={`Book cover for ${book.title}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {book.subject}
          <br />
          Page Count: {book.pages}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to my books">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="remove from my books">
                        <RemoveCircleOutlinedIcon />
                    </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Synopsis: </Typography>
          <Typography paragraph>
          {book.summary}
          </Typography>
        </CardContent>
      </Collapse>
      
    </Card>
    </Box>
  );
}