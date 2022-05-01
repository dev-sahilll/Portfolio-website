import { Box, Grid, Divider, Typography } from "@mui/material";
import Project from "../Project";
import screenShooter from "../images/ff.png";
import urban from "../images/ff.png";
import keeper from "../images/ll.png";

const Projects = () => {
  const Projects = [
    
    {
      title: "UrbanMerchant",
      desc: "Our theme Vocal for local Its a full stack Mern website with name 'UrbanMerchant' which provide a platform for the local traders to get themselve registered where they can put their own local product which could be later accessed by the ecommerce stores for selling ,by this vendors can sell their goods without any mediator between to enhance the profit margins and keeping more transparency and authenticity to consumer",
      image: urban,
      githubLink: "https://github.com/vatsalyasagraya/UrbanMerchant",
      techStack: "JavaScript",
    },
    {
    title: "KeeperApp",
      desc: "React app that Allows you to add and delete notes",
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
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
