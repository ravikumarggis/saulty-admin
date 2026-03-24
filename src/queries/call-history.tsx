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

  export interface CallHistoryParams {
    user1?: string;
    user2?: string;
    page?: any;
  }
  
  export interface CallHistoryItem {
    _id: string;
    duration: number;
    createdAt: string;
  }
  
  export interface CallHistorySuccessResponse {
    responseCode: number;
    result: CallHistoryItem[];
  }
  
  export interface CallHistoryErrorResponse {
    responseCode: number;
    responseMessage: string;
  }
  
  export const fetchCallHistoryView = async (
    params: CallHistoryParams
  ): Promise<CallHistorySuccessResponse | CallHistoryErrorResponse> => {
    try {
      const response = await api({
        url: `/admin/adminCallView`,
        method: "GET",
        params: {
          user1: params.user1,
          user2: params.user2,
          page: params.page,
        },
      });
  
      if (response?.data?.responseCode === 200) {
        return response.data;
      }
  
      return response.data;
    } catch (error: any) {
      console.error("API error:", error);
      return error?.response?.data;
    }
  };
  export const useCallHistoryView = (params: CallHistoryParams) => {
    return useQuery<CallHistoryItem[] | null>({
      queryKey: ["adminCallView", params],
      queryFn: async () => {
        const res = await fetchCallHistoryView(params);
  
        if (res?.responseCode === 200) {
          return res?.result;
        } else {
          return null;
        }
      },
      enabled: !!params.user1 && !!params.user2,
    });
  };