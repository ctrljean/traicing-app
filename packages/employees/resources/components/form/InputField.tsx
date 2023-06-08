import {FormControl, FormLabel, Input} from "@chakra-ui/react";

const InputField = ({value,name, label,onChange, type = 'text', ...props})=>{
    return (
        <FormControl id={name} isRequired>
            <FormLabel>{label}</FormLabel>
            <Input onChange={onChange} name={name}
            value={value} type={type} {...props}/>
        </FormControl>
    )
}

export default InputField
