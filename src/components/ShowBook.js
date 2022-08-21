import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import useBook from '../hooks/useBook';
import CircularProgress from '@mui/material/CircularProgress';
import {useParams, useNavigate} from 'react-router-dom';
import Error from './Error';
import Button from './Button';
import { AppContext } from '../context/AppContext';

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
  const {setAlert} = useContext(AppContext)
  const {addBook, removeBook, readingList} = useContext(BookContext)
  const {bookId} =  useParams()
  
  const {book, error} = useBook(bookId);

  const navigate = useNavigate();
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleRemoveBook = () => {
    removeBook(book);
    setAlert({msg:`${book.title} Removed From Reading List`,cat:'warning'})
  };
  const handleAddBook = () => {
    addBook(book);
    setAlert({msg:`${book.title} Added to Reading List`,cat:'info'});
  };
  


  if (error){
    return (
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }
  if(!book){
        return(
        <Box sx={{display:"flex"}}>
          <CircularProgress/>
        </Box>
        )
      }
  


  return (
    <>
    <Button onClick={() => navigate('/books')}>Back</Button>
    <Box sx={{minWidth:"300px", maxWidth:"1000px", display:"flex", justifyContent:"center",  mx:"auto" }}> 
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
       
       title={book?.title}
        subheader = {book?.author}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={book?.img}
        alt={`Book cover for ${book?.title}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {book?.subject}
          <br />
          Page Count: {book?.pages}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {(readingList.map(x=>x.id).includes(book.id)) ?
        <IconButton  aria-label="remove from my books" onClick={()=> handleRemoveBook(book)}>
           <RemoveCircleOutlinedIcon /> Remove from my books
        </IconButton>
        :
        <IconButton aria-label="add to my books" onClick={()=>handleAddBook(book)} >
          <AddIcon /> Add Book
        </IconButton>
      }
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
          {book?.summary}
          </Typography>
        </CardContent>
      </Collapse>
      
    </Card>
    </Box>
    </>
  );
}