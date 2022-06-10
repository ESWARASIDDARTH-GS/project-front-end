import React, { useState,useEffect} from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import './DataPage.css'

export default function Funds({type,rows,setRows,total,setTotal,path,data,setData}) {

  const [amount,setAmount]=useState(0);
  const [transferAmount,setTransferAmount]=useState(0);
  const [reciever,setReciever]=useState('');


  useEffect(() => {
    axios.post(`https://captsone-backend.herokuapp.com/${path}`,data)
    .then(res=>{
        console.log(res)
    }).catch(e=>console.log(e.message))
  }, [data])
  
  
  const handleAdd=()=>{
      
      // const temp=[...rows];
      // temp.push({
      //     id: temp.length + 1,
      //     transaction:'Credit',
      //     amount: amount,
      //     reciever:'Self',
      //     total: parseInt(amount) + parseInt(total)
      // });
      setData({
        id: rows.length + 1,
        transaction:'Credit',
        amount: amount,
        reciever:'Self',
        total: parseInt(amount) + parseInt(total)
    })
      // setRows(temp);
      setTotal(prev=>prev+ parseInt(amount));
  }

  const handleTransfer=()=>{
      const temp=[...rows];
      temp.push({
        id: temp.length + 1,
        transaction:'Debit',
        amount: transferAmount,
        reciever: reciever,
        total: parseInt(total) - parseInt(transferAmount)
    });
    setRows(temp);
    setTotal(prev=>prev - parseInt(transferAmount));

  }

  return (
    <div>
        {
            type=='add' ? (<div className='input-fields' style={{justifyContent:"space-evenly"}}>
                <TextField type='number' id="outlined-basic" label="Amount" variant="outlined" onChange={(e)=>setAmount(e.target.value)}/>
                <Button style={{width:"20%",alignSelf:"center"}} variant='contained' onClick={handleAdd}>Add</Button>
            </div>) : type=='transfer' ? (<div className='input-fields'>
                <TextField type='number' id="outlined-basic" label="Amount" variant="outlined" value={transferAmount} onChange={(e)=>setTransferAmount(e.target.value)}/>
                <TextField type='text' id="outlined-basic" label="Reciever" variant="outlined" onChange={(e)=>setReciever(e.target.value)}/>
                <Button style={{width:"25%",alignSelf:"center"}} variant='contained' onClick={handleTransfer}>Transfer</Button>
            </div>) : null
        }
    </div>
  )
}
