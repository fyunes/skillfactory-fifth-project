import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Box
      p={3}
      color="white"
      maxW="100vw"
      display="flex"
      flexDirection="column"
      alignItems='center'
      minH="100vh"
      className="App"
      bg={
        "linear-gradient(to right top, #001d4a, #1a2c75, #4337a0, #743dc7, #ac3bea)"
      }
    >
      <Routes>
        <Route path="/" element={<Home title="Consolog" />} />
        <Route path="/new-post" element={<NewPost title="New Post" />} />
        <Route path="/edit-post" element={<EditPost title="Edit Post" />} />
        <Route
          path="/user-profile"
          element={<UserProfile title="User Profile" />}
        />
      </Routes>
    </Box>
  );
}

export default App;
