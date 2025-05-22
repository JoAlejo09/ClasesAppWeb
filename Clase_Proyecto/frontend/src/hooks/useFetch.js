import axios from 'axios'
import {toast} from 'react-toastify'

function useFetch(){
    const fetchDataBackend = async (url, form=null,method='POST')=>{
        try{
            let respuesta
            if (method == 'POST'){
                respuesta = await axios.post(url,form)
            }else if(method == 'GET'){
                respuesta = await axios.get(url)
            }
            toast.success(respuesta?.data?.msg)
            return respuesta?.data
        }
        catch(e){
              const errorMsg=e.response?.data?.msg || 'Error Desconocido'
            throw new Error(errorMsg);
        }
    }
    return {fetchDataBackend}
}
export default useFetch