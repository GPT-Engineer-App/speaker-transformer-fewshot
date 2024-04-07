import React, { useState } from "react";
import { Box, Button, Heading, Text, Image, VStack, HStack, Textarea } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // TODO: Start recording audio
      setTimeout(() => {
        // Simulated prediction after 2 seconds of recording
        setPrediction("Predicted Speaker: John Doe (90% confidence)");
        setIsRecording(false);
      }, 2000);
    } else {
      // TODO: Stop recording and process audio
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="2xl">Few-Shot Speaker Recognition</Heading>

        <Text fontSize="xl">This demo showcases a transformer-based few-shot learning model for speaker recognition. The model is trained on a small set of labeled speaker samples and can recognize speakers from new audio recordings.</Text>

        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1664775783655-620e131cfaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTI0ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Speaker 1" boxSize="150px" objectFit="cover" borderRadius="full" />
          <Image src="https://images.unsplash.com/photo-1616840420121-7ad8ed885f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHdvbWFufGVufDB8fHx8MTcxMjQ4NDE0M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Speaker 2" boxSize="150px" objectFit="cover" borderRadius="full" />
          <Image src="https://images.unsplash.com/photo-1664775783962-c2504633864d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTI0ODQxNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Speaker 3" boxSize="150px" objectFit="cover" borderRadius="full" />
        </HStack>

        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Heading size="lg" mb={4}>
            Record New Audio
          </Heading>

          <Button onClick={toggleRecording} colorScheme={isRecording ? "red" : "green"} leftIcon={isRecording ? <FaStop /> : <FaMicrophone />}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Button>

          {prediction && (
            <Box mt={4}>
              <Heading size="md">Prediction Result:</Heading>
              <Text>{prediction}</Text>
            </Box>
          )}
        </Box>

        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Heading size="lg" mb={4}>
            How it Works
          </Heading>
          <Text>The model uses a transformer encoder architecture to learn speaker embeddings from mel-spectrogram features. It is trained using a prototypical network loss to optimize embedding space such that samples from the same speaker are close together. At inference time, it computes the embedding for the new audio and finds the closest speaker embedding from the labeled set using cosine similarity.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
