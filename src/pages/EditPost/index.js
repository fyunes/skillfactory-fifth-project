import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const EditPost = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return <Box>EditPost</Box>;
};

export default EditPost;
