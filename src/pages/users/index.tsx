import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { useQuery } from '@tanstack/react-query'




export default function UserList() {

  const query = useQuery(['users'], async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    
    return data;
  })
  console.log(query)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="20"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Td px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Th px="6">Usuário</Th>

                {isWideVersion && <Th px="6">Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Helena Paixão</Text>
                    <Text fontSize="sm" color="gray.300">
                      hp.helenapaixao@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril de 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    {isWideVersion ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
