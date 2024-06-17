import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = ({ userData2 }) => {
    const { token } = useParams();
    const [message, setMessage] = useState('');
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();

    useEffect(() => {
        const confirmUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v2/token/confirm?token=${token}`);
                const data = await response.text();
                setMessage(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        confirmUser();
    }, [token]);

    // Function to send user data to the backend
    const saveUserData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v2/mail/saveToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData2)
            });
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Call saveUserData when userData2 is updated
    useEffect(() => {
        if (userData2.userName && userData2.email && token && dateString) {
            saveUserData();
        }
    }, [userData2]);

    return (
        <div>
            {message}
            <h1>Display Data</h1>
            <p>User Name: {userData2.userName}</p>
            <p>Email: {userData2.email}</p>
            <p>Token: {token}</p>
            <p>Date: {dateString}</p>
        </div>
    );
};

export default ConfirmationPage;
