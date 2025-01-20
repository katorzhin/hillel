import '@testing-library/jest-dom';
import React from 'react';
import {describe, test, beforeEach, expect} from 'vitest';
import {render, screen, fireEvent, waitFor,} from '@testing-library/react';
import {Provider} from 'react-redux';
import App from '../App';
import {store} from '../redux/store/store';

function renderWithRedux(ui) {
    return render(
        <Provider store={store}>
            {ui}
        </Provider>
    );
}

describe('TODO App tests', () => {

    beforeEach(async () => {
        renderWithRedux(<App/>);
        const clearButton = screen.getByText(/clear all/i);
        fireEvent.click(clearButton);
        await screen.findByText(/no todos yet/i);
    });

    test('renders heading "TODO - List"', () => {
        const heading = screen.getByText(/TODO - List/i);
        expect(heading).toBeInTheDocument();
    });

    test('allows typing into the input field', () => {
        const input = screen.getByPlaceholderText(/Enter todo.../i);
        fireEvent.change(input, {target: {value: 'Hello123'}});
        expect(input.value).toBe('Hello123');
    });

    test('shows error if trying to add empty text', () => {
        const addButton = screen.getByText(/Add/i);
        fireEvent.click(addButton);
        const errorMessage = screen.getByText(/The field cannot be empty!/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('adds new TODO item on valid input', async () => {
        const input = screen.getByPlaceholderText(/Enter todo.../i);
        const addButton = screen.getByText(/Add/i);

        fireEvent.change(input, {target: {value: 'New Task'}});
        fireEvent.click(addButton);

        const newItem = await screen.findByText(/New Task/i);
        expect(newItem).toBeInTheDocument();
    });

    test('deletes TODO item', async () => {
        const input = screen.getByPlaceholderText(/Enter todo.../i);
        const addButton = screen.getByText(/Add/i);

        fireEvent.change(input, {target: {value: 'Delete me'}});
        fireEvent.click(addButton);

        const todoItem = await screen.findByText(/Delete me/i);
        expect(todoItem).toBeInTheDocument();

        const deleteButton = screen.getByTestId('delete-btn');
        fireEvent.click(deleteButton);

        await waitFor(() => {
            expect(screen.queryByText(/Delete me/i)).toBeNull();
        });
    });
});