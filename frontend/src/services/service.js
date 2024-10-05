import React from "react";
import axios from "axios";
import Constant from "@/config/constant";

const postApi = async (data, method_name) => {
  data
  data.api_type = "web";
  data.device_id = "";
  data.device_token = "";
  data.device_type = "";

  const jsonData = JSON.stringify(data);
  const req = Buffer.from(jsonData, "binary").toString("base64");
  const request = {
    data: req
  };

  try {

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${method_name}`,
      request,
      {
        headers: {
          timeout: 2000,
          authKey: Constant?.AUTHKEY
        }
      }
    );

    let base64ToString = Buffer.from(
      response?.data?.response || "",
      "base64"
    ).toString("utf8");

    const parsedResponse = JSON.parse(base64ToString);

    if (parsedResponse?.is_user_active === 0) {
      LogOut();
    } else {
      return parsedResponse;
    }
  } catch (error) {
    return { message: "something wrong", status: "error" };
  }
};

// for image upload
const postImage = async (data, method_name, image_key) => {
  //const domain = Constants.DOMAIN;

  data["data"] = {
    ...data.data
  };
  if (typeof window !== "undefined")
    data.data.url = window?.location?.host + window?.location?.pathname;
  const jsonData = JSON.stringify(data);
  const req = Buffer.from(jsonData, "binary").toString("base64");
  let formData = new FormData();
  formData.append("data", req);
  formData.append("is_crypto", false);
  let file = {};
  file = data?.data[image_key];
  formData.append(image_key, file);
  // try {
  //setToken();
  let response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}${method_name}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set the Content-Type header to form-data.
        timeout: 2000,
        authKey: Constant?.AUTHKEY
      },
    }
  );

  let base64ToString = Buffer.from(
    response?.data?.response || "",
    "base64"
  ).toString("utf8");

  const parsedResponse = JSON.parse(base64ToString);

  if (parsedResponse?.is_user_active === 0) {
    LogOut();
  } else {
    return parsedResponse;
  }
};

const Service = { postApi, postImage };

export default Service;
