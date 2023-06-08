import {
    Flex,
    Box,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import {useState} from 'react';

import InputField from "@employees/resources/components/form/InputField";
import {useForm} from "@employees/resources/useForm";
import useRoute from "@employees/src/hooks/useRoute";
export default function FormEmployees({employee, isCreateForm = false}) {
    const [showPassword, setShowPassword] = useState(false);
    const route = useRoute();

    console.log(route('employees.index'));

    const {field, data, submit} = useForm({
        ...employee
    })
    console.log(data)
    function onSubmit(e){
        if (isCreateForm){
            submit('post', route('employees.store'))
            return
        }
        submit('put', route('employees.update'))
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        {isCreateForm ? 'Create': 'Edit'} employees
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <InputField label={
                                    "First Name"
                                } {...field('name')} />
                            </Box>
                            <Box>
                                <InputField label={
                                    "Last Name"
                                } {...field('last_name')} />
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <InputField label={
                                    "email"
                                } {...field('email')} type="email" />
                            </Box>
                            <Box>
                                <InputField label={
                                    "Age"
                                } {...field('age')} />
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <InputField label={
                                    "Birth_date"
                                } {...field('birth_date')} type={'date'} />
                            </Box>
                            <Box>
                                <InputField label={
                                    "phone"
                                } {...field('phone')} />
                            </Box>
                        </HStack>
                        <InputField label={
                            "address"
                        } {...field('address')} />
                        <InputField label={
                            "email"
                        } {...field('email')} />


                        <Stack spacing={10} pt={2}>
                            <Button onClick={(e) => onSubmit(event)}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                {isCreateForm ? 'Crear': 'Actualizar'}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
