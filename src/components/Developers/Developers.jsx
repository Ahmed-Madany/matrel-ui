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
import BugReportIcon from "@mui/icons-material/BugReport";
import SchoolIcon from "@mui/icons-material/School";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CardMedia from "@mui/material/CardMedia";

export default function Hero() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
     
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#0f172a",
          textAlign: "center",
        }}
      >
        Get help from vetted software developers
      </Typography>

      {/* المحتوى */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        {/* العمود الأيسر */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1e293b", mb: 2 }}
          >
            One-on-one live mentorship
          </Typography>

          {/* قائمة المميزات */}
          <List sx={{ mb: 3 }}>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <BugReportIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Debug with the help of an expert" />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Personalize your learning experience" />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <HelpOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Get answers to complex problems" />
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
            FIND A MENTOR
          </Button>
        </Grid>

        {/* العمود الأيمن (الصورة) */}
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
      </Grid>
    </Box>
  );
}
