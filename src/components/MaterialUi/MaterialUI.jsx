import {Container, Grid,Box, Typography } from "@mui/material"
import React from 'react'
import newCollection from "../../assets/new-collection.jpg"
function MaterialUI() {
  return (
    <div>
      <Container  maxWidth="xl">
        <Typography
          textAlign="center"
          variant="h2" 
          fontWeight="bold"
          >
          MaterialUI
        </Typography>
        <Grid container 
        justifyContent={"space-between"} 
        alignItems={"center"} 
        overflow={"hidden"}
        sx={{
          maxHeight:{sm:"600px"}
        }}>
        <Grid item xs={12} sm={6}>2</Grid>
        <Grid item container xs={12} sm={6}>
        <Box
          component="img"
          sx={{
            width: "100%",
            objectFit: "cover",
            maxHeight:{sm:"600px"}
          }}
          alt="The house from the offer."
          src={newCollection}
          />
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MaterialUI