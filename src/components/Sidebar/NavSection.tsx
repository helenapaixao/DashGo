import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}


export function NavSection({title, children} : NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="sm">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
       
        <Link display="flex" alignItems="center">
          
          <Text ml="4" fontWeight="medium">
            {children}
          </Text>
        </Link>
      </Stack>
    </Box>
  );
}
