/*import axios from 'axios'
import { toast } from 'react-toastify'

function useFetch() {
    const fetchDataBackend = async(url, data=null,method="GET", headers = {})=> {
        try{
            const options = {
                method,
                url,
                headers:{
                    "Content-Type": "application/json",
                    ...headers,
                },
                data,
            }
            const response = await axios(options)
            toast.dismiss(loadingToast); 
            toast.success(response?.data?.msg)
            return response?.data
        }
        catch (error) {
            toast.dismiss(loadingToast); 
            console.error(error)
            toast.error(error.response?.data?.msg)
        }
    }
/*
    const fetchDataBackend = async (url, form = null, method = 'POST') => {

        try {
            let respuesta
            if (method === 'POST') {
                respuesta = await axios.post(url, form)
            } else if (method === 'GET') {
                respuesta = await axios.get(url)
            }
            toast.success(respuesta?.data?.msg)
            return respuesta?.data
            
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.msg)
            const errorMsg = error.response?.data?.msg || 'Error desconocido';
            throw new Error(errorMsg);
        }
    }

    return { fetchDataBackend }
}

export default useFetch
*/
import axios from "axios";
import { toast } from "react-toastify";

function useFetch() {
    const fetchDataBackend = async (url, data = null, method = "GET",headers = {}) => {
        const loadingToast = toast.loading("Procesando solicitud...");
        try {
            const options = {
            method,
            url,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            data,
            }
            const response = await axios(options)
            toast.dismiss(loadingToast); 
            toast.success(response?.data?.msg)
            return response?.data
        } catch (error) {
            toast.dismiss(loadingToast); 
            console.error(error)
            toast.error(error.response?.data?.msg)
        }
    }

    return { fetchDataBackend }
}

export default useFetch;
