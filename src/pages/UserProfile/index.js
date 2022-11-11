import { Box, Text } from "@chakra-ui/react";

const UserProfile = ({ user }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        borderWidth={1}
        borderColor="white"
        h="600px"
      >
        {user ? (
          <Box>
            <Text>User Profile</Text>
          </Box>
        ) : (
          <Text>You have to log in to see your profile</Text>
        )}
      </Box>
    </>
  );
};

export default UserProfile;
