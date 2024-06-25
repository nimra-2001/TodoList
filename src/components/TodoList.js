import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText(''); 
    }
  };

 
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1); 
    setItems(updatedItems); 
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}>
          <Typography variant="h4" style={{ color: 'black', marginBottom: '20px' }}>
            Todo List
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Add an item"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addItem}
            style={{ marginBottom: '20px' }}
          >
            Add
          </Button>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} style={{ backgroundColor: 'white', marginBottom: '10px' }}>
                <ListItemText primary={item} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteItem(index)}
                    style={{ color: 'red' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default TodoList;
