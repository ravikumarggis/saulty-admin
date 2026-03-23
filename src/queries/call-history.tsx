import { useQuery } from "@tanstack/react-query";
import { api } from "../services/apiServices";

export const fetchCallHistoryList = async () => {
    try {
      const response = await api({
        url: `/admin/adminCallList`,
        method: "GET",
       
      });
      return response;
    } catch (error: any) {
      console.error("API error:", error);
      return error?.response;
    }
  };
  export const useCallHistoryList = ( ) => {
    return useQuery({
      queryKey: ["adminCallList"],
      queryFn: () => fetchCallHistoryList(),
      select(data) {
        if (data?.data?.responseCode === 200) {
          return data?.data?.result;
        } else {
          return null;
        }
      },
     
    });
  };
  