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

export default function ShowBook() {
  const [expanded, setExpanded] = React.useState(false);
  const book={
    "id":2,
    "title":"Pride and prejudice",
    "author": "Jane Austen",
    "pages":432,
    "summary": "Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth.",
    "img":"https://i.pinimg.com/originals/14/d8/ea/14d8ea37846191d498ed5200bb560524.jpg",
    "subject":"Historical Fiction"
   
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        title={book.title}
        subheader = {book.author}
        
      />
      <CardMedia
        component="img"
        height="200"
        image={book.img}
        alt="Pride and prejudice book cover"
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
  );
}