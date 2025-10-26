import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,Link,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Arc() {
  return (
    <Box sx={{ py: 8, px: 4 }}>


      {/* المحتوى */}
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
            image="visit-arc (1).svg"
            alt="Arc"
            sx={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </Grid>
        {/* العمود الأيسر */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1e293b", mb: 2}}
          >
            ARC()

          </Typography>
          <Typography
            variant="h4"
            sx={{fontWeight: "bold", color: "#1e293b", mb: 2}}
            >
                Hiring for a bigger preoject?
            </Typography>
            <Typography
            variant="span"
            sx={{ color: "#1e293b", mb: 2  , fontSize: "20px"}}
            >
                arc help you find seinor devoplers for both perment 
                fulltime and freelance projects
            </Typography>
  
                <Typography >
          <Link  underline="none">
  <Button
    size="medium"
    variant="text"
  >
    Visit Arc 
  </Button>
</Link>

                </Typography>
        



        </Grid>

      </Grid>
    </Box>
  );
}
