import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import authApi from '../../../constant/http-common'
import { useEffect, useState } from "react"
import { systemRoutes } from "../../../routes"
import { setAuthData } from "../../../untils/token"
import Notification from "../../../components/base/components/Notification"
import userApi from "../../../constant/http-auth-common"

export const useLoginApi = (user: any) => {
    const navigate = useNavigate()
    const {t} = useTranslation('login')

    
    authApi.post('/auth/local', user)
        .then( (response) =>  {
            setAuthData(response.data.jwt);
            Notification.Success({ message: t('login.success') });
            navigate(systemRoutes.ONBOARD_ROUTE);
            console.log(response);
            localStorage.getItem("auth-token")
        })
        .catch((error) => {
            console.log(error);
        });
    

}


export const CreateUserApi = (user: any, handleFc: () => void) => {
    // const navigate = useNavigate()
    authApi.post('/auth/local/register', user)
    
    .then(function (response) {
        //handle success
        console.log(response);
        // navigate(systemRoutes.LOGIN_ROUTE)
        handleFc()
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
}

export const getMyUser = () => {
    const [data, setData] = useState()
    useEffect( 
        () => {      
        userApi
        .get("/users/me")
        .then((response) => {
            console.log(response.data)
        setData(response.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, []
        )
    
    return data
}