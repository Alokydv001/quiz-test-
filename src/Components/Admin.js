
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const Admin = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [newTeacher, setNewTeacher] = useState('');

  const addStudent = () => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudent('');
  };

  const addTeacher = () => {
    setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
    setNewTeacher('');
  };

  return (
    <Container component="main" maxWidth="md" className="admin-container">
      <Paper elevation={3} className="admin-paper">
        <Typography variant="h4" className="admin-heading">
          Admin Panel
        </Typography>

        {/* Add Students Section */}
        <div className="admin-section">
          <Typography variant="h5" className="admin-subheading">
            Students
          </Typography>
          <ul className="admin-list">
            {students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
          <div className="admin-input-container">
            <TextField
              type="text"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
              label="New Student Name"
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={addStudent}>
              Add Student
            </Button>
          </div>
        </div>

        {/* Add Teachers Section */}
        <div className="admin-section">
          <Typography variant="h5" className="admin-subheading">
            Teachers
          </Typography>
          <ul className="admin-list">
            {teachers.map((teacher, index) => (
              <li key={index}>{teacher}</li>
            ))}
          </ul>
          <div className="admin-input-container">
            <TextField
              type="text"
              value={newTeacher}
              onChange={(e) => setNewTeacher(e.target.value)}
              label="New Teacher Name"
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={addTeacher}>
              Add Teacher
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default Admin;
