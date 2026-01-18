import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";

// API URLs

/**********************************************************  Live URL And Socket Url*********************************************************/
/********************************************************************************************************************************************/
// /********************************************************************************************************************************************/
// export const url: string = "https://api.nowory.com/api/v1"; //Live url
// export const url: string = "https://apiv2.nowory.com/api/v1"; //Live url v2

// export const url: string = "https://adminapi.nowory.com/api/v1"; // new Live url

/***************************************************************************************************************** */
// export const socket_url: string = "wss://socket.nowory.com"; // Live socket
// export const socket_url: string = "https://socketv2.nowory.com"; // Live socket v2

/**********************************************************  Local URL And staging Url*********************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/

// export const url: string = "https://stgapiv2.tarality.io/api/v1"; // staging;

export const url: string = "https://api.thesoulty.com/api/v1"; // new staging;

// export const url: string = "http://172.16.16.206:8080/api/v1"; //local shivam
// export const url: string = "http://172.16.16.32:8080/api/v1"; // local rangoli
// export const url: string = "http://172.16.16.39:8080/api/v1"; //local Ankit
// export const url: string = "http://172.16.16.33:8080/api/v1"; //local charu

export const zuelBaseURl = `https://zuel.nowory.com/api/v1`;

export const api: AxiosInstance = axios.create({
  baseURL: url,

  // headers: {
  //   "Content-Type": "application/json",
  // }
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  try {

    // const token = localStorage.getItem("token");
    const token = sessionStorage.getItem("token");

    if (token) {
      if (config.headers instanceof AxiosHeaders) {
        config.headers.set("token", token);
        config.headers.set("web");
      } else {
        config.headers = new AxiosHeaders({
          token: token,
          deviceType: "web",
        });
      }
    }
  } catch (error) {
    console.error("Error retrieving access token:", error);
  }

  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error?.response?.data?.responseCode == 440) {
      // localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      toast.error(error?.response?.data?.responseMessage);
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
