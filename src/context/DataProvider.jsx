import React,{createContext , useState} from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) =>{

    const [formData ,setFormData ] = useState({url:'', type:'POST'})
    const [jsonText, setJsonText] = useState('');
    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            jsonText,
            setJsonText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;