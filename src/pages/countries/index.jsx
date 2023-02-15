import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { Box, Container, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CountryDetails from '../../components/countryDetails';

const Countries = () => {

  const [datas,setDatas]=useState();
  const [loading,setLoading] = useState(true);

   useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      // handle the response data here
      console.log(response.data);
      if(response?.data){
        setDatas(response.data);
        setLoading(false)
      }
    })
    .catch(error => {
      // handle any errors here
      console.error(error);
    });
   
     return () => {
   
     }
   }, [])
   
  return (
      <Container maxWidth='lg'>
       <Typography component='h1' variant='h4' textAlign='center' marginTop='2rem' marginBottom='1rem'>Countries</Typography>
         <Box sx={{
                  marginTop:'30px',
                }}>
      

                  {
                    loading? <Box sx={{textAlign:'center'}}> <CircularProgress/></Box> 
                    : 
                    
                    <Stack direction="row" spacing={4} flexWrap='wrap'>

                            { datas?.length>0 && datas?.filter((data,index)=>{return index<=3}).map((data,index)=>{

                                return  <CountryDetails key={index} data={data}/>
                              
                            })
                            
                            }
                    </Stack>
                  }

          </Box>
      </Container>
  )
}

export default Countries