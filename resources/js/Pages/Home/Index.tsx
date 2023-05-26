import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import Layout from "../../Shared/Layout";
import {useState} from "react"
interface Employee {
    id: number,
    name: string
}
export default function Home({employees}) {
    const [empl, setEmployee] = useState(employees);


    function Edit(employee: Employee){
        setEmployee([employee]);
    }

    return <>
        <Layout>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>name</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {empl.map(employee =>
                        <Tr key={employee.id}>
                            <Td>
                                {employee.id}
                            </Td>
                            <Td>
                                {employee.name}
                            </Td>
                            <Td>
                                <Button colorScheme='blue' onClick={() => Edit(employee)}>Editar</Button>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    </Layout>

    </>
}



