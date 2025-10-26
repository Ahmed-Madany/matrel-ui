import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Content() {
  return (
    <Box
      sx={{
        bgcolor: "#2596be",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 5,
      }}
    >
   
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "white",
          mb: 5,
          textAlign: "center",
        }}
      >
        Connect with <br /> 12000+ top developers anytime
      </Typography>

 
      <Box
        sx={{
          width: "100%",
          maxWidth: "1050px", 
          mx: "auto",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
      
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Ahmed Salah" src="https://i.pravatar.cc/150?img=1" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Ahmed Salah"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Experienced Full-Stack Web Developer
                </Typography>
                <FacebookIcon /> 
                <TwitterIcon />
                <LinkedInIcon />
              </CardContent>
            </Card>
          </Grid>

        
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Hamad Ali" src="https://i.pravatar.cc/150?img=2" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Hamad Ali"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Senior Software Engineer at Indeed
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Mariam Nabil" src="https://i.pravatar.cc/150?img=3" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Mariam Nabil"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Top Stack Overflow Python Answerer
                </Typography>
              </CardContent>
            </Card>
          </Grid>

    
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Omar Adel" src="https://i.pravatar.cc/150?img=4" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Omar Adel"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Full Stack Web Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Sara Mostafa" src="https://i.pravatar.cc/150?img=5" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Sara Mostafa"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Senior iOS Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>

         
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mx: "auto", height: "100%", borderRadius: 3, bgcolor: "white" }}>
              <CardHeader
                avatar={<Avatar alt="Nour Hassan" src="https://i.pravatar.cc/150?img=6" />}
                titleTypographyProps={{ sx: { fontSize: "1.2rem", fontWeight: "bold" } }}
                title="Nour Hassan"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Senior Android Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
