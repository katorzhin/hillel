export function validateProduct(values) {
    const errors = {};

    const categoryStr = String(values.category ?? '').trim();
    const nameStr = String(values.name ?? '').trim();
    const quantityStr = String(values.quantity ?? '').trim();
    const priceStr = String(values.price ?? '').trim();

    if (!categoryStr) {
        errors.category = 'Category is required!';
    }

    if (!nameStr) {
        errors.name = 'Name is required!';
    }

    if (!quantityStr) {
        errors.quantity = 'Quantity is required!';
    } else if (isNaN(quantityStr)) {
        errors.quantity = 'Quantity must be a number!';
    }

    if (!priceStr) {
        errors.price = 'Price is required!';
    } else if (isNaN(priceStr)) {
        errors.price = 'Price must be a number!';
    }

    return errors;
}