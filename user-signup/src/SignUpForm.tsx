import React from 'react';
import type { UserDTO } from './UserDTO';

function SignUpForm({ onFormSubmit }: { onFormSubmit: (user: UserDTO) => void}) {

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevents default page reload

        const form = event.currentTarget;
        const formData = new FormData(form);
        
        const newUserData = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            username: formData.get("username") as string,
            password: formData.get("password") as string
        };

        onFormSubmit(newUserData);
    }

    return (
        <form onSubmit={handleFormSubmit} method="POST">
            <label htmlFor="firstName">First Name:</label><br />
            <input type="text" id="firstName" name="firstName" /><br />

            <label htmlFor="lastName">Last Name:</label><br />
            <input type="text" id="lastName" name="lastName" /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" /><br />
            
            <label htmlFor="username">Username:</label><br />
            <input type="text" id="username" name="username" /><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" /><br />

            {/* TODO: add confirm password field here*/}
            
            <input type="submit" value="Sign Up" />
        </form>
    );
}

export default SignUpForm;