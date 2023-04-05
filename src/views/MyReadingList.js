
import {useContext} from 'react';
import Typography from '@mui/material/Typography';
import {BookContext} from '../context/BookContext';
import ReadingList from '../components/ReadingList';

export default function MyReadingList(){
        const {readingList} = useContext(BookContext)
        if(readingList?.length<=0){
            return(
                <Typography variant="h3" color="primary" sx={{display:"flex", justifyContent: 'center', pt:10, backgroundColor: "#FDF2EE", height:"100vh"}}>Add books to see your list!</Typography>
            )
        }
    return(
        <>
        <Typography>
           <ReadingList/>
        </Typography>
        </>
    )


}