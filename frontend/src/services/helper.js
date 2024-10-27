import React from "react";
import Constant from "../config/constant";

const Capetalizationword = (data) => {

    return data?.length > 0 && data
        ?.map((val) => val?.charAt(0)?.toUpperCase() + val.slice(1))
        ?.join("-");
        
};
const ConsoleData = (data) => {
    return console.log(data);
};

const hideMobileNumber = (number) => {
    const partialNumber = number?.replace(/(\d{3})\d+(\d{2})/, "$1***$2");
    return partialNumber;
};

const serverSideError = (backendErrors,setError) =>{
    Object.keys(backendErrors).forEach((key) => {
        setError(key, {
          type: 'manual',
          message: backendErrors[key],
        });
      });
}


export const formatPrice = (amount) => {
    if (isNaN(amount)) {
      throw new Error('Amount must be a number');
    }
  
    return `${Constant?.CURRENCY_INR}${amount}`;
  };


const Helper = {
    Capetalizationword,
    ConsoleData,
    hideMobileNumber,
    serverSideError,
    formatPrice

};

 

export default Helper;
