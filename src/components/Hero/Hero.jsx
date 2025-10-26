import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#2596be",
        height: "100vh",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', color: "white" }}
          >
            Find a Developer for <br /> Live Mentorship & Freelance Projects
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="medium"
            variant="contained"
            color="warning"
            sx={{width: "100%" , height: "100%", maxWidth: "300px" }}
          > 
            Get help
          </Button>
        </CardActions>
      </Card>

      <Box sx={{ mt: 4 }}>
        <CardMedia
          component="img"
          sx={{ height: 300, width: "auto", maxWidth: "100%" }}
          image="hero-l.png"
          alt="hero"
        />
      </Box>
    </Box>
  );
}
