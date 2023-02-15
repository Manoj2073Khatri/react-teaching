import React, {  useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

const Reminder = () => {
  const [reminder,setReminder]=useState('')
  const [reminderData,setReminderData]=useState([])

 

    const handleChange = (e) =>{
         
            setReminder(e.target.value);
          
            
      
     }

    const addData=()=>{
       if(reminder!==''){
        setReminderData([...reminderData,reminder])
         setReminder('')
       }
    }

    const deleteReminder=(index)=>{

      const newTodos = [...reminderData];
        newTodos.splice(index, 1);
        setReminderData(newTodos);
       
    }

    const editReminder=(index)=>{

      const newTodos = [...reminderData];
      setReminder(newTodos.find((element ,number)=> number === index))
      newTodos.splice(index, 1);
      setReminderData(newTodos);


    }

   
    
   


  return (
   <>
      <Container maxWidth='lg'>

           <Typography component='h1' variant='h4' textAlign='center' marginTop='2rem' marginBottom='1rem'>A simple reminder app</Typography>
           <Box sx={{
            display: 'flex',
            justifyContent: 'center',
           }}>

             <TextField  variant="outlined"  sx={{marginRight:'1rem'}} value={reminder} onChange={handleChange}/>
           
             <Button  variant='contained' onClick={()=>addData()} >Add reminder</Button>
            

          
             
           </Box>

           <Stack   

                direction="column"
                justifyContent="center"
                alignItems="center"
                marginTop="2rem"

                >
           {
             reminderData?.length>0 && reminderData.map((data,index)=>{
                return <Paper key={index}
                          elevation={3}
                          sx={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center',
                            marginBottom:'10px',
                            padding:'10px',
                            width:'500px'
                          }}
                 
                 >
                          <Typography marginRight='10px'>{data}</Typography>
                           <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                           }}>
                              <Button variant='contained' color='error' onClick={()=>deleteReminder(index)}>Delete</Button>
                              <Button variant='contained' sx={{marginLeft:'10px'}}  onClick={()=>editReminder(index)}>Edit</Button>
                           </Box>
                          </Paper>
                       
              })
                       
            }
           </Stack>
      </Container>
   </>
  )
}

export default Reminder