import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

const Education = () => {
  return (
    <Box
      id="Education"
      sx={{
        
        m: "0 auto",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#130f40",
color:"white",
backgroundImage:
  " linear-gradient(315deg, #130f40 0%, #000002 74%)",
  
        p: "20px",
      }}
    >
      <Divider sx={{  display: "flex", mt: "4rem" }}>
        <Typography  sx={{  fontFamily:"montserrat" }}variant="h5" component="h4">
          My Education
        </Typography>
      </Divider>
      <Timeline position="alternate" color="common.white">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat"}}
            align="right"
            variant="body2"
            color="white"
            
          >
            2020 to 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat" }}variant="h6" component="span">
              Malaviya National Institute Of Techonlogy
            </Typography>
            <Typography  sx={{  fontFamily:"montserrat" }}>Chemical Engineering</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat"}}
            variant="body2"
            color="white"
          >
            2018 to 2020{" "}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat" }}variant="h6" component="span">
              St. Mary's Convent Sr. Sec. School
            </Typography>
            <Typography sx={{  fontFamily:"montserrat" }}>Senior Secondary School</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat"}}
            align="right"
            variant="body2"
            color="white"
          >
            2016 to 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat" }}variant="h6" component="span">
            St. Mary's Convent Sr. Sec. School
            </Typography>
            <Typography sx={{  fontFamily:"montserrat" }}>High School</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
export default Education;
