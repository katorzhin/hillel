import React, {useEffect, useState} from 'react';
import './Products.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/slices/productsSlice';
import {selectProducts} from '../../redux/slices/selectors';
import ProductTable from '../../components/ProductTable/ProductTable';
import ProductModal from '../../components/ProductModal/ProductModal';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import {LOGO_ROZETKA} from "../../Links/links.js";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(selectProducts);

    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [editableProduct, setEditableProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = () => {
        setEditableProduct(null);
        setOpenModal(true);
    };

    const handleEdit = (product) => {
        setEditableProduct(product);
        setOpenModal(true);
    };

    const handleDelete = (product) => {
        setEditableProduct(product);
        setOpenDeleteModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditableProduct(null);
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
        setEditableProduct(null);
    };

    return (
        <div className="products-page">

            <div className="left-panel">
                <img src={LOGO_ROZETKA} alt="Rozetka" className="rozetka-logo-small"/>
                <Button
                    variant="contained"
                    className="preview-btn"
                    onClick={() => navigate('/preview')}>
                    <PersonIcon className="icon"/>
                    Preview
                </Button>
            </div>


            <div className="main-content">
                <h1 className="products-title">Products</h1>

                <div className="add-product-btn-wrapper">
                    <Button variant="contained" className="add-product-btn" onClick={handleAdd}><AddIcon
                        className="icon"/>Add product</Button>
                </div>

                <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete}/>
            </div>


            {openModal && (
                <ProductModal open={openModal} onClose={handleCloseModal} product={editableProduct}/>
            )}
            {openDeleteModal && (
                <DeleteModal open={openDeleteModal} onClose={handleCloseDeleteModal} product={editableProduct}/>
            )}
        </div>
    );
}

export default Products;