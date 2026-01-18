import toast from "react-hot-toast";
import { api, zuelBaseURl } from "../services/apiServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

interface VerifiedOrRejectedCryptoInrwithdrawlPlayload {
  id: number;
  action: string;
  message?: string;
  transactionId?: string;
  modeType?: string;
}

export const fetcCrptoData = async (id: string) => {
  try {
    const response = await api({
      url: `/admin/crytpoDepositRequestList`,
      method: "GET",
      params: {},
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

export const handleApproveRejectDesposit = async ({
  depositReqId,
  depositStatus,
  message,
}: {
  depositReqId: string;
  depositStatus: string;
  message?: string;
}) => {
  try {
    const response = await api({
      url: "/admin/acceptRejectInrDeposit",
      method: "POST",
      data: {
        depositReqId,
        depositStatus,
        message: message || undefined,
      },
    });

    const resData = response?.data;

    if (resData?.responseCode) {
      toast.success(
        resData?.responseMessage || "KYC status updated successfully."
      );
    } else {
      toast.error(resData?.responseMessage || "Failed to update KYC status.");
    }

    return response;
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Something went wrong.");
    throw error;
  }
};

export const hnadleCryptoApproveReject = async ({
  id,
  status,
  rejectReason,
}: {
  id: string;
  status: string;
  rejectReason?: string;
}) => {
  try {
    const response = await api({
      url: "/admin/approveOrRejectCryptoDeposit",
      method: "POST",
      data: {
        id,
        status,
        rejectReason,
      },
    });

    const resData = response?.data;

    if (resData?.responseCode) {
      toast.success(
        resData?.responseMessage || "KYC status updated successfully."
      );
    } else {
      toast.error(resData?.responseMessage || "Failed to update KYC status.");
    }

    return response;
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Something went wrong.");
    throw error;
  }
};

export const WithdrawInrDetails = async (id: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/viewInrDepositReq",
      method: "GET",
      params: {
        depositReqId: id,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    return error;
  }
};

export const useWithdrawInrDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["WithdrawInrDetails"],
    queryFn: () => WithdrawInrDetails(id),
  });
};

export const WithdrawCrptoDetails = async (id: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/viewCryptoDepositRequest",
      method: "GET",
      params: {
        id: id,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    return error;
  }
};

export const useWithdrawCrptoDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["VewCryptoWithdraw"],
    queryFn: () => WithdrawCrptoDetails(id),
  });
};

export const getCrptoData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["getCrptoData", id],
    queryFn: () => fetcCrptoData(id),
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

export const mutationFnApproveReject = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id) => handleApproveRejectDesposit(id),
    onSuccess: (data) => {
      if (data.data.responseCode == 200) {
        navigate("/deposit-inr");
      }
    },
  });
};

export const mutationFnCryptoApproveReject = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id) => hnadleCryptoApproveReject(id),
    onSuccess: (data) => {
      if (data.data.responseCode == 200) {
        navigate("/crypto-deposit");
      }
    },
  });
};

// ************************************** withdral INR list **********************************\

export const fetchWithdrawalInr = async (id: string) => {
  try {
    const response = await api({
      url: `/admin/inrDepositReqList`,
      method: "GET",
      params: {},
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response;
    }
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};
export const getDepositINR = (id: string | undefined) => {
  return useQuery({
    queryKey: ["getDepositInr", id],
    queryFn: () => fetchWithdrawalInr(id),
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

/*********************************** ApproveRejectMunual form withdraw ***********************/

// const handleApproveRejectDeposit = async ({
//   id,
//   action,
//   isReject,
//   message,
// }: {
//   id: string;
//   action: string;
//   isReject?: string;
//   message?: string;
// }) => {
//   try {
//     const response = await api({
//       url: "/admin/acceptRejectInrWithdrawManual",
//       method: "PUT",
//       data: {
//         id: id,
//         action: action,
//         ...(isReject === "reject" && { message: message }),
//         ...(isReject === "approve" && { transactionId: message }),
//       },
//     });
//     if (response?.data?.responseCode === 200) {
//       toast.success(response?.data?.responseMessage);
//       return response;
//     }
//   } catch (error: any) {
//     toast.error(error?.response?.data?.responseMessage);

//     return error?.response;
//   }
// };

/**********************************  the below code is comment 30/8/2025 *******************************/

// export const useApproveRejectWithdraw = () => {
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: ({
//       id,
//       action,
//       isReject,
//       message,
//     }: {
//       id: string;
//       action: string;
//       isReject?: string;
//       message?: string;
//     }) =>
//       handleApproveRejectDeposit({
//         id,
//         action,
//         isReject,
//         message,
//       }),
//     onSuccess: (data) => {
//       if (data?.data?.responseCode === 200) {
//         navigate("/withdraw-inr");
//       }
//     },
//   });
// };

/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/********************************************************************Verified OR Rejected Crypto Withdrwal *********************************/
const handleApproveRejectCrptoWithdraw = async (
  data: VerifiedOrRejectedCryptoInrwithdrawlPlayload
) => {
  try {
    const response = await api({
      url: "/admin/acceptRejectCryptoWithdraw",
      method: "PUT",
      params: data,
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
    return error?.response?.data;
  }
};

export const useApproveRejectCrptoWithdraw = (
  
) => {
  return useMutation({
    mutationFn: (data: VerifiedOrRejectedCryptoInrwithdrawlPlayload) =>
      handleApproveRejectCrptoWithdraw(data),
  });
};

/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/********************************************************************Verified OR Rejected Inr Withdrwal ***********************************/

const handleApproveRejectInrWithdraw = async (
  data: VerifiedOrRejectedCryptoInrwithdrawlPlayload
) => {
  try {
    const { modeType } = data;

    const response = await api({
      url:
        modeType === "ZuelPay"
          ? `${zuelBaseURl}/admin/acceptRejectInrWithdrawManual`
          : "/admin/acceptRejectInrWithdrawManual",
      method: "PUT",
      data,
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
    return error?.response?.data;
  }
};

export const useApprovedRejectedInrWithdraw = (
) => {
  return useMutation({
    mutationFn: (data: VerifiedOrRejectedCryptoInrwithdrawlPlayload) =>
      handleApproveRejectInrWithdraw(data),
  });
};

/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
/***********************************************************View Withdraw Inr OR Crpto Details Withdrwal ***********************************/

export const handleViewWithdrawInrCrptoDetails = async (
  id: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/cryptoWithdraView",
      method: "GET",
      params: {
        id: id,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data?.result;
    } else {
      return {};
    }
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const useViewWithdrawInrCrptoDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["ViewWithdrawInrCrptoDetails"],
    queryFn: () => handleViewWithdrawInrCrptoDetails(id),
  });
};
