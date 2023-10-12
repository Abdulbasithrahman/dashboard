import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import ReactPaginate from 'react-paginate';
import './PaginationStyles.css'
import { Input } from '@mui/icons-material';

const DataTable = ({ data, columns, onRowClick}) => {

  const[searchQuery,setSearchQuery]= useState('');
  const[currentpage,setCurrentpage]= useState(0);
  const[filteredUsers,setFilteredUsers]=useState([]);

  const filteredColumns = columns.filter((column) => column !== 'address' && column !== 'company' && column !== 'username' && column !== 'website');
  
  const handleSearchQuery = (e)=>{
    const query = e.target.value;
    setSearchQuery(query);
  
    if (query === '') {
      setFilteredUsers([]); // Reset filteredUsers when query is empty
    } else {
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }

  const itemsPerPage = 5;
  const pageCount = Math.ceil(data.length/itemsPerPage);
  const offset = currentpage * itemsPerPage;
  const currentPageData = data.slice(offset,offset + itemsPerPage);
  
  const handlePageClick = (data) => {
    const selectedpage = data.selected;
    setCurrentpage(selectedpage);
  };

  const displayedUsers = filteredUsers.length > 0 ? filteredUsers : currentPageData;


  return (
    <div className='table'>
      <input className='search' type="text" placeholder='Search' value={searchQuery} onChange={handleSearchQuery}/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {filteredColumns.map((column) => (
                <TableCell key={column} style={{ border: '0.5em solid lightblue', fontStyle: 'italic' }}>
                  {column.toUpperCase()}
                </TableCell>
              ))}
              <TableCell style={{ border: '0.5em solid lightblue', fontStyle: 'italic' }}>
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((row, rowIndex) => (
              <TableRow key={rowIndex} >
                {filteredColumns.map((column) => (
                  <TableCell
                    key={column}
                    style={{ height:"3em",border: '0.5em solid lightblue', fontStyle: 'italic', cursor: 'pointer' }}
                  >
                    {row[column]}
                  </TableCell>
                ))}
                <TableCell style={{height:"3em",border: '0.5em solid lightblue', fontStyle: 'italic', cursor: 'pointer' }}>
                <button onClick={()=>onRowClick(row)} 
    style={{
      background: 'lightblue',
      border: 'none',
      color: 'black',
      cursor: 'pointer',
      padding: '0.5em 1em',
      fontSize: '1em',
      borderRadius: '0.3em',
      fontWeight: 'bold',
    }}
  >
    View Details
  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReactPaginate
      previousLabel={"←prev"}
      nextLabel={"next→"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      />
    </div>
  );
};

export default DataTable;


