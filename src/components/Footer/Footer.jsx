import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        color: "white",
        py: 6,
        fontSize: "0.875rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              PRODUCTS
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" underline="none" color="inherit" fontWeight="bold">
                Codementor
              </Link>
              <br />
              Find a mentor to help you in real time
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" underline="none" color="inherit" fontWeight="bold">
                Codementor Events
              </Link>
              <br />
              Attend and host virtual events for developers
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Link href="#" underline="none" color="inherit" fontWeight="bold">
                DevProjects
              </Link>
              <br />
              Learn programming by building projects
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="none" color="inherit" fontWeight="bold">
                Arc
              </Link>
              <br />
              Helping employers find talent for remote jobs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <Grid container spacing={2}>
              {[
                ["Become a Codementor", "How It Works", "Find Mentors", "Find Freelancers", "Find a Tutor"],
                ["Community", "Blog", "Codementor For Students", "Codementor For Teams", "Code Review"],
                ["Pair Programming", "Best Web Design Software", "Coding Starter Kit", "Codementor Reviews", "Best Language to Learn"],
              ].map((column, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  {column.map((item, idx) => (
                    <Typography variant="body2" sx={{ mb: 1 }} key={idx}>
                      <Link href="#" underline="none" color="inherit">
                        {item}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: "#333" }} />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="gray">
            © Copyright 2024 Codementor
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{ xs: "center", sm: "flex-end" }}
            gap={2}
            mt={{ xs: 2, sm: 0 }}
          >
            {[
              "Cookie Policy",
              "Privacy Policy",
              "Terms of Service",
              "Careers",
              "Help Center",
            ].map((link, i) => (
              <Link
                key={i}
                href="#"
                underline="none"
                color="gray"
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": { color: "white" },
                }}
              >
                {link}
              </Link>
            ))}
            <IconButton size="small" color="inherit">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit">
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton size="small" color="inherit">
              <LinkedIn fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;