import toast from "react-hot-toast";
import { api } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { convertDataFormateForServer, PayloadText } from "../utils";


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




export const fetchKycList = async ( filter: FilterType) => {
  try {
    const response = await api({
      url: `/admin/kycList`,
      method: "GET",
      params: {
      
     
        search: filter?.search || undefined,
        kycStatus:
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
export const useKycList = ( filter: FilterType) => {
  return useQuery({
    queryKey: ["kycList", filter],
    queryFn: () => fetchKycList( filter),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return null;
      }
    },
   
  });
};

// useKycList

export const fetchUserKycById = async (id: string) => {
  try {
    const response = await api({
      url: `/admin/viewKyc`,
      method: "GET",
      params: { id },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

export const useUserKycById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["userKycById", id],
    queryFn: () => fetchUserKycById(id!),
    enabled: !!id,
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return null;
      }
    },
  });
};

export const approveRejectKyc = async ({
  id,
  kycStatus,
  message,
}: {
  id: string;
  kycStatus: string;
  message?: string;
}) => {
  try {
    const response = await api({
      url: "/admin/approveReject",
      method: "POST",
      data: {
        id,
        kycStatus,
        message: message || undefined,
      },
    });

    return response;
  } catch (error: any) {
    // toast.error(error?.response?.data?.message || "Something went wrong.");
    throw error;
  }
};
