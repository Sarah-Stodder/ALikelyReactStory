import React,{useContext} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import ShowBook from './ShowBook.js';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import {BookContext} from '../context/BookContext';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
  }
]
//would like to make it where this will change based to user books once they hit a button.

    export default function ReadingList() {
        const {readingList, removeBook, clearList} = useContext(BookContext)

        const navigate = useNavigate()

        if(!readingList){
          return(
            <Box sx={{display:"flex"}}>
              <CircularProgress/>
            </Box>
          )
        }
        
      

  return (
    <>
    <Box  sx={{display:"flex",alignItems:"center",mx:"auto"}}>
    <Typography variant='h3'> Your Books</Typography>
    </Box>
    <Typography sx={{display: 'flex', justifyContent: 'center'}}>
          <Button key="clear" color="success" sx ={{mb:5}} onClick={()=>{clearList()}}>Clear List</Button>
          </Typography>
    <ImageList cols={3} >
        {readingList?.map((book)=>(
            <ImageListItem key={book?.img}>
                <img sx={{height:"200px"}} src={book?.img} srcSet={book?.img} alt={book?.title}  loading="lazy"/>
                <ImageListItemBar
                title={book?.title}
                subtitle={book?.author}
                
                
               
                actionIcon={<>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${book?.title}`} onClick={()=>navigate(`/books/${book.id}`)}>
                        <InfoIcon/>
                    </IconButton>

                </>}
                />

            </ImageListItem>
        ))}
    </ImageList>
    </>
    )}