import { Box, Container, Grid, Divider, Chip, Typography } from "@mui/material";
import React from "react";

const SkillSet = () => {
  const skillSetIcon = [
    "devicon-react-original",
    "devicon-javascript-plain",
    "devicon-nodejs-plain-wordmark",
    "devicon-cplusplus-plain",
    "devicon-c-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-mongodb-plain-wordmark",
    "devicon-jquery-plain-wordmark",
    "devicon-express-original",
    "devicon-mysql-plain-wordmark",
    "devicon-bootstrap-plain",
    "devicon-materialui-plain",
    "devicon-git-plain-wordmark",
    "devicon-canva-original",
  ];
  return (
    <Box
      id="AboutMe"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
        overflow : "hidden",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography sx={{  fontFamily:"montserrat" }}variant="h5" component="h4">
          About Me
        </Typography>
      </Divider>
      <Typography
        variant="body1"
        component="h4"
        textAlign="center"
        sx={{ m: "15px",fontFamily:"montserrat" }}
      >
        I am currently pursuing BTech. in Chemical Engineering from MNIT Jaipur.
        <br></br> 
        Being a Tech. Enthusiast, I love to explore new technologies and always get awestruck by the advancements in them. <br />I am a self-motivated, agile and quick
        learner.
        <br/>
        I am interested in the domain of web development and have intermediate level knowledge of the MERN stack. 
        <br/>
        I aim to work as a software development Engineer in a renowned firm.
      </Typography>
      <Divider sx={{ width: "20rem", display: "flex", mt: "1rem" }}>
        <Typography sx={{  fontFamily:"montserrat" }}variant="h5" component="h4">
          My Skills
        </Typography>
      </Divider>
      <Grid
        container
        spacing={5}
        padding={2}
        columnSpacing={5}
        columns={{ xs: 4, sm: 6, md: 10 }}
        rowSpacing={5}
        justifyContent="center"
        textAlign="center"
      >
        {Array.from(skillSetIcon).map((item, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <i className={item} style={{fontSize: "7rem" }}></i>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SkillSet;
