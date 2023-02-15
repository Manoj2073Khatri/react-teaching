import { Routes, Route } from "react-router-dom"
import Reminder from "./pages/reminder";
import Countries from "./pages/countries";
import BasicTable from "./pages/table";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Home from "./pages/home/home";
import DenseTable from "./pages/table";


const App=()=> {
  return (
    <>
     <Header/>
     <Container maxWidth='lg' >
     
        <Routes>
        <Route path="/" element={ <Home/> } />
          <Route path="/reminder" element={ <Reminder/> } />
          <Route path="/countries" element={ <Countries/> } />
          <Route path="/table" element={ <DenseTable/> } />
        </Routes>
     </Container>
     <Footer/>
    </>
   
  );
}

export default App;
