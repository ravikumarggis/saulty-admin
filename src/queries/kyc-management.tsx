import toast from "react-hot-toast";
import { api } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { convertDataFormateForServer, PayloadText } from "../utils";

export const fetchUserKycList = async (filter: FilterType) => {
  try {
    const response = await api({
      url: "/admin/kycList",
      method: "POST",
      data: {
        isTestUser: filter?.isTestUser ? PayloadText.UserType(filter?.isTestUser) : undefined,
        isNewUser: filter?.isNewUser ? PayloadText.UserTag(filter?.isNewUser) : undefined,
        search: filter?.search || undefined,
        deviceType: filter?.deviceType || undefined,
        fromDate:
          (filter?.fromDate && convertDataFormateForServer(filter?.fromDate)) ||
          undefined,
        toDate:
          (filter?.toDate && convertDataFormateForServer(filter?.toDate)) ||
          undefined,
        userType:
          filter?.userType == "user"
            ? 1
            : filter?.userType == "admin"
              ? 2
              : filter?.userType == "sub_admin"
                ? 3
                : filter?.userType == "test_user"
                  ? 4
                  : undefined,
        // kycStatus: filter?.kycStatus || undefined,
        page: filter?.page || 1,


        // filter:
        //   filter?.ModuleType == "Pending"
        //     ? "IN-PROCESS"
        //     : filter?.ModuleType?.toLocaleUpperCase() || undefined,

        filter:
          filter?.kycStatus == "Pending"
            ? "IN-PROCESS"
            : filter?.kycStatus?.toLocaleUpperCase() || undefined,
        limit: 10,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

export const useUserKycDetails = (filter: FilterType) => {
  return useQuery({
    queryKey: ["userKycDetails", filter],
    queryFn: () => fetchUserKycList(filter),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

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
