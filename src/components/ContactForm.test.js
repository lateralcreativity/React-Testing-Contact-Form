import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

// Render contact form
render(<ContactForm />);

// Setup variables
const firstNameInput = screen.getByLabelText(/first name*/i);
const lastNameInput = screen.getByLabelText(/last name*/i);
const emailInput = screen.getByLabelText(/email*/i);
const messageInput = screen.getByLabelText(/message*/i);
const submitButton = screen.getByTestId(/submit/i);

test("Contact form elements can be found", () => {
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("Contact form can be filled out and submitted", () => {
    fireEvent.change(firstNameInput, { target: { value: 'Gabriel' } });
    fireEvent.change(lastNameInput, { target: { value: 'Delgado' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(messageInput, { target: { value: 'hi' } });
    fireEvent.click(submitButton);
})