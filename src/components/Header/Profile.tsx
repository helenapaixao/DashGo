import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Helena Paixão</Text>
          <Text color="gray.300" fontSize="sm">
            hp.helenapaixao@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Helena Paixão"
        src="https://github.com/helenapaixao.png"
      />
    </Flex>
  );
}
