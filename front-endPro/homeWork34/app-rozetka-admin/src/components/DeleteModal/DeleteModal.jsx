import React from 'react';
import './DeleteModal.css';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../../redux/slices/productsSlice';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function DeleteModal({open, onClose, product}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct({id: product.id}));
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="delete-modal-box">
                <Typography variant="h6" gutterBottom>Are you sure you want to delete this product?</Typography>
                <div className="delete-modal-buttons">
                    <Button variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default DeleteModal;