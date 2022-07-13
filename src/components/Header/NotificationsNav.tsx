import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <Flex align="center" ml="auto">
      <HStack
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
        spacing={["6", "8", "8", "8"]}
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserLine} fontSize="20" />
      </HStack>
    </Flex>
  );
}
