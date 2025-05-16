import './App.css'
import SignUpForm from './SignUpForm'
import axios from 'axios';
import type { UserDTO } from './UserDTO';

function App() {

  const handleFormSubmit = (newUserData: UserDTO) => {
    axios.post("http://localhost:8080/create", newUserData)
    .then(__ => console.log(`User ${newUserData.username} created!`))
    .catch(error => console.log(error));
  };

  return (
    <>
      <h2>Sign Up</h2>
      <SignUpForm onFormSubmit={handleFormSubmit} />
    </>
  );
}

export default App
