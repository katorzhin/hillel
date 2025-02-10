import React, {useEffect} from 'react';
import './Preview.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/slices/productsSlice';
import { selectProducts } from '../../redux/slices/selectors';
import {PLACEHOLDER_IMAGE} from '../../Links/links';

function Preview() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="preview-page">
            <h2 className="preview-title">Preview of Products</h2>

            <div className="preview-grid">
                {products.map((p) => {

                    const hasValidUrl = p.imageUrl && p.imageUrl.trim().toLowerCase().startsWith('http');
                    const imgSrc = hasValidUrl ? p.imageUrl : PLACEHOLDER_IMAGE;

                    const displayedName =
                        p.name && p.name.length > 35
                            ? p.name.slice(0, 35) + '...'
                            : p.name;

                    return (
                        <div className="preview-card" key={p.id}>
                            <div className="image-container">
                                <img src={imgSrc} alt={p.name} className="preview-image"/>
                            </div>

                            <div className="card-body">
                                <div className="product-name">{displayedName}</div>
                                <div className="bottom-info">
                                    <div className="product-price">{p.price}₴</div>
                                    <div className="product-quantity">Кількість: {p.quantity}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Preview;