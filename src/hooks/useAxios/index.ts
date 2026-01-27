import axios from 'axios';
import Cookies from 'js-cookie';


interface AxiosType{
    url:string;
    method?:"GET" | "POST" | "PUT" | "DELETE";
    body?:object;
    param?:object;
}


export const useAxios = () => {
    const request = ({url, method="GET", body, param}: AxiosType)=>{
        return axios({
            url: `${import.meta.env.VITE_BASE_URL}/${url}`,
            method,
            headers:{
                "Content--Type":"application/json",
                Authorization: `Bearar ${Cookies.get("token")}`
            },
            data:body,
            params:{
                access_token:"64eecf3b54abde61153d1fd3",
                ...param
            }
        }).then(res=>res.data.data).catch((error)=>{
          throw  error;

        })

    };
    return request
}


// https://beckend-n14-soqt.vercel.app/api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7

// https://backend-n14-soqt.vercel.app/api/flower/category?access_token=64eecf3b54abde61153d1fd3