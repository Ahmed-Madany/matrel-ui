import * as React from "react";
import {
  Box,
  Grid,
    Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';  
import PsychologyIcon from '@mui/icons-material/Psychology';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CardMedia from "@mui/material/CardMedia";

export default function Hero() {
  return (
    <Box>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >

           <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="mentorship.jpg"
            alt="Mentorship illustration"
            sx={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </Grid>

        {/* العمود الايمن */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1e293b", mb: 2 }}
          >
            project-base freelance work
          </Typography>

          {/* قائمة المميزات */}
          <List sx={{ mb: 3 }}>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <FindInPageIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="find expert for on-demand code review" />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <PsychologyIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Build feature for yuor existing project" />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <RocketLaunchIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="turn your idea into an MVP" />
            </ListItem>
          </List>

          {/* زرار */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f43f5e",
              "&:hover": { backgroundColor: "#e11d48" },
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1,
              borderRadius: "8px",
            }}
          >
            FIND A FREELANCER
          </Button>
        </Grid>

        {/* العمود الأيمن (الصورة) */}
     
      </Grid>
    </Box>
  );
}
