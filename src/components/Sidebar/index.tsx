import {
  Box,
  DrawerOverlay,
  useBreakpointValue,
  DrawerBody,
  DrawerContent,
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";

import { SideBarNav } from "./SideBarNav";
export function Sidebar() {
  const {isOpen, onClose} = useSideBarDrawer()

  const isDrawerOpen = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerOpen) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => {onClose}}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}