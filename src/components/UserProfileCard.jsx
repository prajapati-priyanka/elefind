import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/slices";

const UserProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logoutUser());
    toast({
      description: "You are succesfully logged out",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <Flex flexDirection="column" alignItems="center" mb="8">
      <Avatar name={user.firstName + " " + user.lastName} src="" size="2xl" />
      <Heading as="h5" size="md" mt="1">
        {user.firstName}
        {user.lastName}
      </Heading>
      <Text>@{user.username}</Text>
      <Flex gap="4" my="2">
        <Button>Edit Profile</Button>
        <IconButton
          variant="solid"
          bgColor="red.500"
          color="white"
          fontSize="xl"
          icon={<AiOutlineLogout />}
          onClick={logoutHandler}
          _hover={{
            bgColor: "red.400",
          }}
          _focus={{
            bgColor: "red.400",
          }}
          _active={{
            bgColor: "red.400",
          }}
        ></IconButton>
      </Flex>
      <Text>{user.bio}</Text>
      <Link href={user.website} isExternal fontWeight="400" color="blue.500">
        {user.website}
      </Link>

      <Flex
        gap="4"
        bg="brand.100"
        w="fit-content"
        p="4"
        borderRadius="8"
        mt="4"
      >
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            3
          </Heading>
          <Text>Following</Text>
        </Box>
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            2
          </Heading>
          <Text>Posts</Text>
        </Box>
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            5
          </Heading>
          <Text>Followers</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { UserProfileCard };
