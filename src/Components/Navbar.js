import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Typography>
        <Button color="inherit" component={Link} to="/login" style={{ marginLeft: 'auto' }}>
          Login
        </Button>
        <Button color="inherit" component={Link} to="/quiz">
          Quiz
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
