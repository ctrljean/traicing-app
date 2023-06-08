import {useForm as useInertiaForm} from "@inertiajs/react";

export const useForm =<TForm extends Record<string, unknown>> (initial?:TForm)=>{
    const form = useInertiaForm(initial)
    const {setData, data}=form
    const field = (name:string = "")=>{
        return (
            {
                onChange(e){
                    setData({...data,[name]:e.target.value})
                },
                value: data[name],
                name
            }
        )
    }

    return {...form, field}
}
