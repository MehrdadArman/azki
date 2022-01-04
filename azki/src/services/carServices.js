import axiosApiInctance from "./axiosInterceptor";
import * as url from '../assets/data/urlConfigs'


export const getCarTypesAsync = async () => {
    return await axiosApiInctance.get(url.getCarTypeUrl);
};