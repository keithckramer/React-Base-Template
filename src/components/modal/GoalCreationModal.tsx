import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

interface GoalCreationModalProps {
  open: boolean;
  onClose: () => void;
}

const GoalCreationModal: React.FC<GoalCreationModalProps> = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [goalData, setGoalData] = useState({
    title: "",
    category: "",
    deadline: "",
    motivation: "",
  });

  const questions = [
    { key: "title", label: "What is your goal?" },
    { key: "category", label: "What category does this goal belong to?" },
    { key: "deadline", label: "When do you want to achieve this goal?" },
    { key: "motivation", label: "Why is this goal important to you?" },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      console.log("Goal Created:", goalData);
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalData({ ...goalData, [questions[step].key]: e.target.value });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
        //   width: 1500,
        //   height:500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {questions[step].label}
        </Typography>
        <TextField
          fullWidth
          value={goalData[questions[step].key as keyof typeof goalData]}
          onChange={handleChange}
          placeholder="Enter your response"
        />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button onClick={onClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleNext} variant="contained">
            {step < questions.length - 1 ? "Next" : "Finish"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GoalCreationModal;
