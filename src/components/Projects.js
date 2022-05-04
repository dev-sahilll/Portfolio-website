import { Box, Grid, Divider, Typography } from "@mui/material";
import Project from "../Project";
import screenShooter from "../images/ff.png";
import urban from "../images/ff.png";
import keeper from "../images/ll.png";

const Projects = () => {
  const Projects = [
    
    {
      title: "Urban Merchant",
      desc: "A MERN stack based website which allows sellers to sell their products and therby promoting the cause of 'Vocal for Local'.",
      image: urban,
      githubLink: "https://github.com/vatsalyasagraya/UrbanMerchant",
      techStack: "JavaScript",
    },
    {
    title: "KeeperApp",
      desc: "React app that Allows you to add and delete notes. Material UI compoenent library used for styling enhancements.",
      image: keeper,
      githubLink: "https://github.com/dev-sahilll/KeeperApp",
      techStack: "JavaScript",
    }
 
  ];

  return (
    <Box
      id="Projects"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        flexWrap : "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    overflow: "hidden",
        p: "10px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          My Projects
        </Typography>
      </Divider>
      <Grid
        container
        columnSpacing={5}
        spacing={2}
        padding={5}
        rowSpacing={5}
        columns={{ xs: 3, sm: 4, md: 9, lg: 12 }}
        justifyContent="center"
      >
        {Projects.map((project, index) => (
          <Grid item xs={2} sm={2} md={3} lg={3} key={index}>
            <Project
              title={project.title}
              desc={project.desc}
              image={project.image}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
