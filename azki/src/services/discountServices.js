import axiosApiInctance from "./axiosInterceptor";
import * as url from '../assets/data/urlConfigs'


export const getThirdDiscountAsync = async () => {
    return await axiosApiInctance.get(url.getThirdDiscountUrl);
};

export const getDriverDiscountAsync = async () => {
    return await axiosApiInctance.get(url.getDriverDiscountUrl);
};