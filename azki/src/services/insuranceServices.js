import axiosApiInctance from "./axiosInterceptor";
import * as url from '../assets/data/urlConfigs'


export const getInsuranceCompaniesAsync = async () => {
    return await axiosApiInctance.get(url.getInsureCompaniesUrl);
};