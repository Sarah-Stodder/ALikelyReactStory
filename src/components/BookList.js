import React,{useContext} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import {BookContext} from '../context/BookContext';
import { useNavigate } from 'react-router-dom';


    export default function BookList() {
        const {bookList, setBookList} = useContext(BookContext)
        const {error, books} = useBooks()
        setBookList(books)

        const navigate = useNavigate()

      
        if(error){
          return(
            <Box sx={{display:"flex"}}>
              <Error>{error}</Error>
            </Box>
          )
        }
      
        if(!bookList){
          return(
            <Box sx={{display:"flex"}}>
              <CircularProgress/>
            </Box>
          )
        }
    

  return (
    <>
    <Box  sx={{display:"flex",alignItems:"center",mx:"auto"}}>
    <Typography variant='h3'>Books</Typography>
    </Box>
    <ImageList cols={3} >
        {bookList?.map((book)=>(
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