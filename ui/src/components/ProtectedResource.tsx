import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { getCurrentUser, signout } from "../services/auth.service";

function ProtectedResource() {
  let navigate: NavigateFunction = useNavigate();
  const currentUser = getCurrentUser();
  const [cards, setCards] = useState<{ id: number; title: string; imageUrl: string }[]>([]);
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [newCardImageUrl, setNewCardImageUrl] = useState<string>("");

  const handleSignOut = () => {
    signout();
    navigate("/signin");
    window.location.reload();
  };

  const handleAddCard = () => {
    if (newCardTitle.trim() === "" || newCardImageUrl.trim() === "") return; // Prevent adding empty cards
    const newCard = { id: Date.now(), title: newCardTitle, imageUrl: newCardImageUrl };
    setCards((prevCards) => [...prevCards, newCard]);
    setNewCardTitle(""); // Clear the input field after adding
    setNewCardImageUrl(""); // Clear the image URL field after adding
  };

  const handleDeleteCard = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
          {currentUser ? (
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ marginTop: 2 }}>
        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
          <TextField
            variant="outlined"
            label="New Card Title"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Image URL"
            value={newCardImageUrl}
            onChange={(e) => setNewCardImageUrl(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleAddCard}>
            Add Card
          </Button>
        </Box>
        {cards.map((card) => (
          <Card key={card.id} sx={{ mb: 2 }}>
            {card.imageUrl && (
              <CardMedia
                component="img"
                alt={card.title}
                height="140"
                image={card.imageUrl}
                sx={{ objectFit: 'cover' }} // Adjusts image fitting
              />
            )}
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
              <Button variant="outlined" color="error" onClick={() => handleDeleteCard(card.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default ProtectedResource;
