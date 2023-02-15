import React from 'react'
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const CountryDetails = ({data}) => {
  return (
    <Card >
           <CardMedia
             sx={{ height: 140 ,width:250,}}
             image={data?.flags?.png}
             title= {data?.name?.common}
           />
       <CardContent>
           <Typography gutterBottom variant="h5" component="div" borderBottom='1px solid #efefef' >
                 {data?.name?.common}
           </Typography>
           <Box component='div'
             sx={{
                 display:'flex',
                 justifyContent: 'space-between',
                 alignItems: 'center'
             }}>
               <Typography component='p'>
               population:
               </Typography>
               <Typography component='p' fontWeight='bold'>
             {data?.population}
               </Typography> 
           </Box>
           <Box component='div'
             sx={{
                 display:'flex',
                 justifyContent: 'space-between',
                 alignItems: 'center'
             }}>
               <Typography component='p'>
               capital:
               </Typography>
               <Typography component='p' fontWeight='bold'>
               {data?.capital[0]}
               </Typography> 
           </Box>
           <Box component='div'
             sx={{
                 display:'flex',
                 justifyContent: 'space-between',
                 alignItems: 'center'
             }}>
               <Typography component='p'>
               timeZone:
               </Typography>
               <Typography component='p' fontWeight='bold'>
               {data?.timezones[0]}
               </Typography> 
           </Box>


       </CardContent>

       </Card>
  )
}

export default CountryDetails