import React from 'react';
import {Field} from 'react-final-form';
import TextField from '@mui/material/TextField';

function FFTextField({name, label, ...rest}) {
    return (
        <Field name={name}>
            {({input, meta}) => {

                const showError = meta.touched && meta.error;

                return (
                    <TextField{...input} label={label} error={Boolean(showError)} helperText={showError}{...rest}/>
                );
            }}
        </Field>
    );
}

export default FFTextField;