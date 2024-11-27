import { authKey } from "@/contants/authKey"
import { decodedToken } from "@/utils/jwt"
import { getFormLocalStorage, removeFormLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    console.log(accessToken)
    return setToLocalStorage(authKey, accessToken)

}

export const getUserInfo = () => {
    const authToken = getFormLocalStorage(authKey)
    // console.log(authToken)
    if (authToken) {
        const decodedData: any = decodedToken(authToken)
        console.log(decodedData)
        // return {
        //     ...decodedData?.role.toLowerCase()
        // }
        return decodedData
    }
}

export const isLoggedIn = () => {
    const authToken = getFormLocalStorage(authKey)
    if (authToken) {
        return !!authToken;
    }
}

export const removeUserInfo = () => {
    return removeFormLocalStorage(authKey)
}