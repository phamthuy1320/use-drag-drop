import {useState} from 'react'

export const useForm = () => {
    const [formValues, setFormValues] = useState([])

    const handleChange = (data, column, row) => {
        console.log("change", data, column, row)
        setFormValues(prev => prev.map(
            item => item === data? {...item, column, row}: item
        ))
    }

    const handleAdd = (item, column, row) => {
        setFormValues(prev => [...prev, {...item, column, row}])
    }

    const handleRemove = (data) => {
        setFormValues(prev => prev.filter( item => item !== data))
    }
    const getItem = (column, row) => {
        return formValues?.find(item => item?.column === column && item?.row === row)
    }

    return {
        formValues,
        handleChange,
        handleAdd,
        handleRemove,
        getItem,
    }
}