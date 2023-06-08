import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import Layout from "../../Shared/Layout";
import {useState} from "react"
import ButtonModal from "../../Shared/Modal";
import {Tooltip} from '@chakra-ui/react'
import FormEmployees from "/packages/employees/resources/components/EmployeesForm";
import {EditIcon} from "@chakra-ui/icons";

interface Employee {
    id: number,
    name: string
}

export default function Home({employees}) {
    console.log(employees)
    const [empl, setEmployee] = useState(employees);


    function Edit(employee: Employee) {
        setEmployee([employee]);
    }

    return <>
        <Layout>
            <Flex direction={"row"} justifyContent={'end'} mr={'3rem'}>
                <ButtonModal name={'Crear'} tooltip={ <Button colorScheme='teal' size={'xs'}> Create </Button> }>
                    <FormEmployees employee={null} isCreateForm={true}></FormEmployees>
                </ButtonModal>
            </Flex>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>id</Th>
                            <Th>name</Th>
                            <Th>last_name</Th>
                            <Th>email</Th>
                            <Th>age</Th>
                            <Th>Birth_date</Th>
                            <Th>address</Th>
                            <Th>Actions</Th>
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
                                    {employee.last_name}
                                </Td>
                                <Td>
                                    {employee.email}
                                </Td>
                                <Td>
                                    {employee.age}
                                </Td>
                                <Td>
                                    {employee.birth_date}
                                </Td>
                                <Td>
                                    {employee.address.slice(0, 10)}...
                                </Td>
                                <Td>
                                    <ButtonModal name={'Editar'} tooltip={
                                        <Tooltip label='Edit employees'>
                                            <EditIcon/>
                                        </Tooltip>
                                    }>
                                        <FormEmployees/>
                                    </ButtonModal>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Layout>
    </>
}



