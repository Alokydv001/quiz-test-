
import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you should enhance this)
    if (username === 'admin' && password === 'password') {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 10 }}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

