// Signup.tsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../components/firebase'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const auth = getAuth(app); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); 
      history.push('/folder/inbox'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign up</button>
        {error && <p>{error}</p>}
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default Signup;
