// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/Table';
import './App.css'
import CustomModal from './components/Model';

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const handleRowClick = (row) => {
    console.log(row);
    setSelectedData(row);
    setModalOpen(true)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/getall',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setData(response.data);
        setColumns(Object.keys(response.data[0])); // Set columns after receiving data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{color:"white",marginBottom:"1em",boxShadow:"inset 2.3em -0.98em #ADD8E6"}}>User table</h1>
          <DataTable
            data={data}
            columns={columns}
            onRowClick={handleRowClick}
          />
      <CustomModal isOpen={modelOpen} onClose={handleCloseModal} data={selectedData}/>
    </div>
  );
}

export default App;
