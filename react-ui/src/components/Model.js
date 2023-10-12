import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './Model.css'; 

const CustomModal = ({ isOpen, onClose, data }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle className="modal-title">User Details</DialogTitle>
      <DialogContent className="custom-modal">
        <div className="modal-content">
          <div style={{display:"flex",justifyContent:"space-between", marginBottom:"2em"}}>
          <p className="modal-paragraph"><label >Username:</label> {data.username}</p>
          <p className="modal-paragraph"><label >Website:</label> {data.website}</p>
          </div>
          {data.address?.street && (
            <div className="modal-paragraph" style={{marginBottom:"2em"}}>
              <label className='label address'>Address:</label> 
              <div className='addresses'>
              <p className='address-list'><label>street:</label> {data.address.street}</p>
              <p className='address-list'><label>city:</label> {data.address.city}</p>
              <p className='address-list'><label>zipcode:</label> {data.address.zipcode}</p>
              </div>
            </div>
          )}
          <div>
            <label className='address'>Company</label>
            <div className='addresses'>
          {data.company?.name && (
            <p className="modal-paragraph address-list"><label>Company Name:</label> {data.company.name}</p>
          )}
          {data.company?.catchPhrase && (
            <p className="modal-paragraph address-list"><label>Company's catchPhrase:</label> {data.company.catchPhrase}</p>
          )}
          </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
