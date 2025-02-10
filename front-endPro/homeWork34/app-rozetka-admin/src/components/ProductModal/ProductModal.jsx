import React from 'react';
import './ProductModal.css';
import {Form} from 'react-final-form';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {validateProduct} from '../../helpers/validators';
import FFTextField from '../FFTextField/FFTextField';
import {useDispatch} from 'react-redux';
import {addProduct, editProduct} from '../../redux/slices/productsSlice';

function ProductModal({open, onClose, product}) {
    const dispatch = useDispatch();
    const isEdit = !!product;

    const onSubmit = (values) => {
        if (isEdit) {
            dispatch(editProduct({id: product.id, ...values}));
        } else {
            dispatch(addProduct(values));
        }
        onClose();
    };

    const initialValues = isEdit
        ? {
            category: product.category ?? '',
            name: product.name ?? '',
            quantity: String(product.quantity ?? ''),
            price: String(product.price ?? ''),
            imageUrl: product.imageUrl ?? '',
            description: product.description ?? '',
        }
        : {
            category: '',
            name: '',
            quantity: '',
            price: '',
            imageUrl: '',
            description: '',
        };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className="product-modal-box">
                <Typography variant="h6" gutterBottom>
                    {isEdit ? 'Edit product' : 'Add product'}
                </Typography>

                <Form
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validate={validateProduct}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit} className="product-modal-form">
                            <FFTextField name="category" label="Category" variant="outlined" margin="normal" fullWidth/>

                            <FFTextField name="name" label="Name" variant="outlined" margin="normal" fullWidth/>

                            <FFTextField name="quantity" label="Quantity" variant="outlined" margin="normal" fullWidth/>

                            <FFTextField name="price" label="Price" variant="outlined" margin="normal" fullWidth/>

                            <FFTextField name="imageUrl" label="Image URL" variant="outlined" margin="normal" fullWidth/>

                            <FFTextField name="description" label="Description" variant="outlined" margin="normal"
                                         fullWidth multiline rows={3}/>

                            <div className="modal-buttons">
                                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                                <Button variant="contained" color="success" type="submit">Submit</Button>
                            </div>
                        </form>
                    )}/>
            </Box>
        </Modal>
    );
}

export default ProductModal;