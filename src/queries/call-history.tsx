import { useQuery } from "@tanstack/react-query";
import { api } from "../services/apiServices";
import { convertDataFormateForServer } from "../utils";

type FilterType = {
  search?: string;
  filter?: string;
  fromDate?: string;
  toDate?: string;
  page?: string | null;
  symbol?: string;
  isNewUser?: string;
  isTestUser?: string;
};


export const fetchCallHistoryList = async (filter: FilterType ) => {
    try {
      const response = await api({
        url: `/admin/adminCallList`,
        method: "GET",
          params: {
                     
                    
                       search: filter?.search || undefined,
                       withdrawStatus:
                         filter?.filter === "Pending"
                           ? "PENDING"
                           : filter?.filter === "Verified"
                             ? "VERIFIED" 
                             : filter?.filter === "Rejected"
                             ? "REJECTED" 
                             :  filter?.filter,
                       // depositStatus: filter?.filter || undefined,
                       fromDate: filter?.fromDate
                         ? convertDataFormateForServer(filter?.fromDate)
                         : undefined,
                       toDate: filter?.toDate
                         ? convertDataFormateForServer(filter?.toDate)
                         : undefined,
                       limit: 10,
                       page: filter?.page || 1,
                     },
       
      });
      return response;
    } catch (error: any) {
      console.error("API error:", error);
      return error?.response;
    }
  };
  export const useCallHistoryList = ( filter: FilterType ) => {
    return useQuery({
      queryKey: ["adminCallList",filter],
      queryFn: () => fetchCallHistoryList(filter),
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