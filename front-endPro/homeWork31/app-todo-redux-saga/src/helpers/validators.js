export function isNotEmpty(str) {
    return str.trim().length > 0;
}

export function hasMinLength(str, minLength = 3) {
    return str.trim().length >= minLength;
}