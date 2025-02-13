import React, { useState } from "react";
import { Container, Typography, Box, Button, Grid, Card, CardContent, LinearProgress } from "@mui/material";
import { CheckCircleOutline, AddCircleOutline, TrendingUp } from "@mui/icons-material";
import GoalCreationModal from "../components/modal/GoalCreationModal";
const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Welcome Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">Welcome back, [User's Name]!</Typography>
        <Typography variant="subtitle1" color="text.secondary">"Small steps lead to big achievements."</Typography>
        <Typography variant="subtitle1" color="text.secondary">
        <Button variant="contained" color="primary" startIcon={<AddCircleOutline />} onClick={() => setModalOpen(true)} >Create Goal</Button>
        </Typography>
      </Box>
      
      {/* Goals Overview */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Current Goals</Typography>
              <Box mb={2}>
                <Typography variant="body1">Fitness: Gain Muscle</Typography>
                <LinearProgress variant="determinate" value={40} />
              </Box>
              <Box mb={2}>
                <Typography variant="body1">Learn JavaScript</Typography>
                <LinearProgress variant="determinate" value={60} />
              </Box>
              <Button variant="contained" color="primary" startIcon={<AddCircleOutline />}>View All Goals</Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Current Goals</Typography>
              <Box mb={2}>
                <Typography variant="body1">Fitness: Gain Muscle</Typography>
                <LinearProgress variant="determinate" value={40} />
              </Box>
              <Box mb={2}>
                <Typography variant="body1">Learn JavaScript</Typography>
                <LinearProgress variant="determinate" value={60} />
              </Box>
              <Button variant="contained" color="primary" startIcon={<AddCircleOutline />}>View All Goals</Button>
            </CardContent>
          </Card>
        </Grid>


        {/* Tasks for Today */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Today's Tasks</Typography>
              <Box>
                <Typography variant="body1">✅ Read 10 pages</Typography>
                <Typography variant="body1">☑️ Meditate for 5 minutes</Typography>
                <Typography variant="body1">☑️ Write 1 journal entry</Typography>
              </Box>
              <Button variant="contained" color="secondary" startIcon={<CheckCircleOutline />}>Complete a Task</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Streak & Progress Section */}
      <Box mt={4} textAlign="center">
        <Typography variant="h6">Streak: 5 Days 🔥</Typography>
        <Button variant="outlined" color="success" startIcon={<TrendingUp />}>View Progress</Button>
      </Box>
      {/* Goal Creation Modal */}
      <GoalCreationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Container>
  );
};

export default HomePage;

// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div className="content">
//       <h1>Welcome to the Home Pagggge</h1>
//     </div>
//   );
// };

// export default Home;
