import {useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import DroupDown from './DropDown';
import { useParams } from 'react-router-dom';


export default function Home() {
  const {id}=useParams()
  const [values,setValues]=useState([])

  const fetchData = async () => {

    try {
      const response = await axios.get(`http://localhost:8090/${id}`)
      console.log(response)
      setValues(response.data)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    fetchData()
  },[id])


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:"#c0c0c0"}}>
          <Toolbar>
            <DroupDown />
          </Toolbar>
        </AppBar>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">FistName</TableCell>
              <TableCell align="center">lastName</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Income</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Car</TableCell>
              <TableCell align="center">Quote</TableCell>
              <TableCell align="center">Phone Price</TableCell>

            </TableRow>

          {
            values.map((item,index)=>{
              return <TableRow key={index}>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.first_name}</TableCell>
              <TableCell align="center">{item.last_name}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.gender}</TableCell>
              <TableCell align="center">{item.income}</TableCell>
              <TableCell align="center">{item.city}</TableCell>
              <TableCell align="center">{item.car}</TableCell>
              <TableCell align="center">{item.quote}</TableCell>
              <TableCell align="center">{item.phone_price}</TableCell>
            </TableRow>
            })
          }
            

          </TableHead>
          <TableBody>



          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}