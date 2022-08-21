import React,{useContext} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

import {BookContext} from '../context/BookContext';
import { useNavigate } from 'react-router-dom';
import Button from './Button';


    export default function ReadingList() {
        const {readingList, clearList} = useContext(BookContext)

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