
import { GetApi } from "./API"
import { config } from "./conf"
export const logout = () => {
    localStorage.removeItem('token')
}

export const isLogin = async () => {
    const data = await GetApi(`${config.domain}/api/v1/user/isLogin`);
    return data.status;
}
