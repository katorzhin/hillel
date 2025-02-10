import React from 'react';
import './ProductTable.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductTable({products, onEdit, onDelete}) {
    return (
        <TableContainer component={Paper} className="product-table-container">
            <Table>
                <TableHead style={{backgroundColor: '#37b249'}}>
                    <TableRow>
                        <TableCell sx={{color: '#fff'}}>ID</TableCell>
                        <TableCell sx={{color: '#fff'}}>Category</TableCell>
                        <TableCell sx={{color: '#fff'}}>Name</TableCell>
                        <TableCell sx={{color: '#fff'}}>Quantity</TableCell>
                        <TableCell sx={{color: '#fff'}}>Price ($)</TableCell>
                        <TableCell sx={{color: '#fff'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {products.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell>{p.id}</TableCell>
                            <TableCell>{p.category}</TableCell>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.quantity}</TableCell>
                            <TableCell>{p.price}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onEdit(p)} color="primary">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={() => onDelete(p)} color="error">
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}

                    {products.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6} align="center">No products yet...</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;
