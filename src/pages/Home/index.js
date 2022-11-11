import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Box
      w="100%"
      p={5}
      borderWidth={2}
      borderColor='white'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      Home
    </Box>
  );
};

export default Home;
