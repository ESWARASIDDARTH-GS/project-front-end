import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './DataPage.css'
import { Button } from '@mui/material';
import Funds from './Funds';
import axios from 'axios'

export default function DataPage({path}) {


  const [addToggle,setAddToggle]=useState(false)
  const [transferToggle,setTransferToggle]=useState(false)
  const [total,setTotal]=useState(0)
  const [prevTotal,setPrevTotal]=useState(0)
  const [rows,setRows]=useState([])
  const [data,setData]=useState();

  useEffect(() => {
    axios.get(`https://captsone-backend.herokuapp.com/${path}`)
    .then(res=>{
      let buffer=res.data;
      setRows(buffer)})
    
  }, [data])
  console.log(rows)

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'transaction', headerName: 'Transaction', width: 130 },
    { field: 'amount', headerName: 'Amount',type:'number', width: 130 },
    { field: 'reciever', headerName: 'Reciever', width: 130 },
    { field: 'total', headerName: 'Net Total',type:'number', width: 130,}
  ];
  
  return (
    <div className='datapage-container'>
        <div className='datapage'>
            <div className='controls'>
                <Button onClick={()=>{setAddToggle(!addToggle);setTransferToggle(false);}}> Add Funds</Button>
                <Button onClick={()=>{setAddToggle(false);setTransferToggle(!transferToggle);}}> Transfer Funds</Button>
                <h3 style={{alignSelf:"center",marginRight:"10px"}}>Net Total : Rs.{total}</h3>
            </div>
            <div>  
                {
                  addToggle && !transferToggle ? (
                    <Funds type='add'rows={rows} setRows={setRows} total={total} setTotal={setTotal} prevTotal={prevTotal} setPrevTotal={setPrevTotal} path={path} data={data} setData={setData}/>
                  ) : !addToggle && transferToggle ? (
                    <Funds type='transfer'rows={rows} setRows={setRows} total={total} setTotal={setTotal} path={path} data={data} setData={setData}/>
                  ):null
                }
            </div>
            <div className='table-chart-container'>
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  
                />
              </div>
            </div>
        </div>
    </div>
  )
}
