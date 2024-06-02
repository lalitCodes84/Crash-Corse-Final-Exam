
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <Box bg="crimson" p={2} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        {auth.isAuthenticated ? (
          <>
            <Text color="white">{auth.email}</Text>
            <Flex>
              <Button as={Link} to="/" colorScheme="Black" variant="outline" mr={4}>
                Home
              </Button>
              <Button onClick={logout} colorScheme="grey" variant="outline">
                Logout
              </Button>
            </Flex>
          </>
        ) : (
          <Button as={Link} to="/login" colorScheme="grey" variant="outline">
            Login
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;