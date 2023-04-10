import React, { useEffect, useState } from 'react';
import  { api } from '../axios/api'

function capitalize(str) {
    if(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {
        const [data , setData] = useState(null)
        const [originalData, setOriginalData] = useState(null);

        useEffect(() => {
           (async () => {
            const response = await api.get(resourcePath);
            console.log(response)
            setData(response.data);
            setOriginalData(response.data);
           })()
        }, [])

        const onChange = changes => {
            setData({...data, ...changes})
        }

        const onReset = () => {
            setData(originalData)
        }

        const onSave = async (e) => {
            const response = await api.post(resourcePath, { [resourceName]: data });
            setOriginalData(response.data)
            setData(response.data)
            e.preventDefault()
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`] : onChange,
            [`onSave${capitalize(resourceName)}`] : onSave,
            [`onReset${capitalize(resourceName)}`]: onReset
        } 
        return <Component  {...props} {...resourceProps} />
    }
}