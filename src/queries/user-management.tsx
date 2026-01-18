import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/apiServices";
import { convertDataFormateForServer, PayloadText } from "../utils";
import toast from "react-hot-toast";

type FilterType = {
  search?: string;
  deviceType?: string;
  fromDate?: string;
  toDate?: string;
  userType?: string;
  historyType?: string;
  kycStatus?: string;
  filter?: string;
  walletType?: string;
  PlanStatus?: string;
  orderType?: string;
  uid?: string;
  depositStatus?: string;
  status?: string;
  limit?: number;
  coinType?: string;
  coinValue?: string;
  page?: number | string | null | undefined;
  gender?: string;
  StateType?: string;
  ModuleType?: string;
  EmailMobileStatus?: string;
  userTag?: string;
  debitCurrency?: any;
  sortType?: string | undefined;
  isNewUser?: string;
};
interface MiningFilterType {
  search?: string;
  fromDate?: string;
  toDate?: string;
  limit?: number;
  page?: number | string | undefined | null;
  filter?: string;
}

type UpdateUserEmailMobileFilterType = {
  search?: string;
  page?: number | string | null;
  isNewUser?: string;
};
type AddUserFundPayload = {
  email: string;
  amount: string;
  symbol: any;
  ModuleType: string;
  message: string;
};

interface TrackingActiveUserFilterType {
  search?: string;
  fromDate?: string;
  toDate?: string;
  filter?: string;
  limit?: number;
  page?: number | string | null | undefined;
  isNewUser?: string;
  isTestUser?: string;
}

export const useUserList = (filter?: FilterType) => {
  return useQuery({
    queryKey: ["userlist", filter],
    queryFn: () => user(filter),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const user = async (filter?: FilterType) => {
  try {
    const response = await api({
      url: "/admin/userList",
      method: "POST",
      data: {
        search: filter?.search || undefined,
        deviceType: filter?.deviceType || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        isTestUser:
          filter?.userType == "Real User"
            ? 1
            : filter?.userType == "admin"
              ? 2
              : filter?.userType == "sub_admin"
                ? 3
                : filter?.userType == "Test User"
                  ? "true"
                  : undefined,

        ...(filter?.kycStatus && {
          kycStatus: filter?.kycStatus === "Verified" ? true : false,
        }),
        page: filter?.page ? filter?.page : undefined,
        filter: filter?.filter ? filter?.filter : undefined,
        gender:
          filter?.gender === "Male"
            ? "M"
            : filter?.gender === "Female"
              ? "F"
              : undefined,
        state: filter?.StateType || undefined,
        isNewUser: filter?.userTag
          ? PayloadText.UserList(filter?.userTag)
          : undefined,

        limit: 10,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

// ***********************************************************    user list csv download  ***************************************************************

export const useUserListCsvDownload = (filter?: FilterType, isDownloadCsv?: any) => {
  return useQuery({
    queryKey: ["userCsvDownload", filter],
    queryFn: () => userListCsvDownload(filter),
    enabled: isDownloadCsv
  });
};

export const userListCsvDownload = async (filter?: FilterType) => {
  try {
    const response = await api({
      url: "/admin/downloadUserListCSV",
      method: "POST",
      // data: {
      //   search: filter?.search || undefined,
      //   deviceType: filter?.deviceType || undefined,
      //   fromDate: filter?.fromDate
      //     ? convertDataFormateForServer(filter?.fromDate)
      //     : undefined,
      //   toDate: filter?.toDate
      //     ? convertDataFormateForServer(filter?.toDate)
      //     : undefined,
      //   isTestUser:
      //     filter?.userType == "Real User"
      //       ? 1
      //       : filter?.userType == "admin"
      //         ? 2
      //         : filter?.userType == "sub_admin"
      //           ? 3
      //           : filter?.userType == "Test User"
      //             ? "true"
      //             : undefined,
      //   gender:
      //     filter?.gender === "Male"
      //       ? "M"
      //       : filter?.gender === "Female"
      //         ? "F"
      //         : undefined,

      //   ...(filter?.kycStatus && {
      //     kycStatus: filter?.kycStatus === "Verified" ? true : false,
      //   }),
      //   isNewUser: filter?.userTag
      //     ? PayloadText.UserList(filter?.userTag)
      //     : undefined,
      //   filter: filter?.filter ? filter?.filter : undefined,
      // },
      data: {
        search: filter?.search || undefined,
        deviceType: filter?.deviceType || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        isTestUser:
          filter?.userType == "Real User"
            ? 1
            : filter?.userType == "admin"
              ? 2
              : filter?.userType == "sub_admin"
                ? 3
                : filter?.userType == "Test User"
                  ? "true"
                  : undefined,

        ...(filter?.kycStatus && {
          kycStatus: filter?.kycStatus === "Verified" ? true : false,
        }),
        filter: filter?.filter ? filter?.filter : undefined,
        gender:
          filter?.gender === "Male"
            ? "M"
            : filter?.gender === "Female"
              ? "F"
              : undefined,
        state: filter?.StateType || undefined,
        isNewUser: filter?.userTag
          ? PayloadText.UserList(filter?.userTag)
          : undefined,

      },
    });
    return response?.data;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

export const useUserDailyActivity = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["useUserDailyActivity", filter, uid],
    queryFn: () => userDailyActivity(filter, uid),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const userDailyActivity = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/userDailyActivity",
      method: "GET",
      params: {
        userId: uid || undefined,
        filter: filter?.filter || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        page: filter?.page || undefined,
        limit: 10,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

// ***************************************** user Activity  details  **********************************************************
export const useUserActivityWD = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["useUserActivityWD", filter, uid],
    queryFn: () => handleUserActivityWD(filter, uid),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const handleUserActivityWD = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/userActivityWD",
      method: "GET",
      params: {
        id: uid || undefined,
        // page: filter?.page || undefined,
        // filter: filter?.filter || undefined,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

// ***************************************** Bnpl history data   *******************************************************
export const useBnplHistoryData = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["useBnplHistory", filter, uid],
    queryFn: () => handleBnplHistoryData(filter, uid),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const handleBnplHistoryData = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/userBnplSubscription",
      method: "GET",
      params: {
        userId: uid || undefined,
        page: filter?.page || undefined,
        symbol: filter?.search
          ? filter?.search?.toLocaleUpperCase()
          : undefined,
        filterStatus: filter?.PlanStatus
          ? filter?.PlanStatus?.toLocaleLowerCase()
          : undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

// *************************** user funds details  *********************************************

export const useUserFundsDetails = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["userFundsDetails", filter, uid],
    queryFn: () => handleUserFunds(filter, uid),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const handleUserFunds = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/userFunds",
      method: "GET",
      params: {
        userId: uid || undefined,
        page: filter?.page || undefined,
        filter: filter?.filter || undefined,
        wallet_type: filter?.coinValue || undefined,
        sortType: filter?.sortType ? PayloadText.UserFundDetails(filter?.sortType) : PayloadText.UserFundDetails("TOP"),
        limit: 10,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

export const useFastTradeHistoryAdmin = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["fastTradeHistoryAdmin", filter, uid],
    queryFn: () => fastTradeHistoryAdmin(filter, uid),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return null;
      }
    },
  });
};

export const fastTradeHistoryAdmin = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/instaTrade/fastTradeHistoryAdmin",
      method: "POST",
      data: {
        userId: uid || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,

        filter: filter?.orderType?.toLocaleLowerCase() || undefined,

        creditCurrency: filter?.coinValue || undefined,
        debitCurrency: filter?.debitCurrency || undefined,
        status: filter?.status || undefined,
        sortType: filter?.sortType ? PayloadText.ParticularUserTradeSortType(filter?.sortType) : undefined,
        limit: 10,
        page: filter?.page || undefined,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return [];
  }
};

/********************************** individual Balance log *******************/
export const useindividualBalanceLogList = (
  filter: FilterType,
  id: string | undefined
) => {
  return useQuery({
    queryKey: ["individualbalanceLogList", filter],
    queryFn: () => individualbalanceLogList(filter, id),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result;
      } else {
        return { docs: [] };
      }
    },
  });
};

export const individualbalanceLogList = async (
  filter: FilterType,
  id: string
) => {
  try {
    const response = await api({
      // url: "/admin/balanceLogList",
      url: "/admin/userBalanceLogList",
      method: "GET",
      params: {
        search: filter?.search || undefined,
        userId: id,
        page: filter?.page ? filter?.page : undefined,

        coinType: filter?.coinValue || undefined,
        historyType: filter?.historyType || undefined,

        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
      },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

/************************************* User Bank List **************************************/
const handleUserBankList = async (filter: FilterType) => {
  try {
    const response = await api({
      url: "admin/listBank",
      method: "GET",
      params: {
        search: filter?.search || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        page: filter?.page ? filter?.page : undefined,
        filter:
          filter?.filter === "Verified"
            ? "verified"
            : filter?.filter === "Pending"
              ? "pending"
              : filter?.filter === "Rejected"
                ? "rejected"
                : undefined,
        isNewUser: filter?.isNewUser ? PayloadText.UserTag(filter?.isNewUser) : undefined,
        // filter: filter?.filter || undefined,
        limit: 10,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error;
  }
};

export const useUserBankList = (filter: FilterType) => {
  return useQuery({
    queryKey: ["userBankLits", filter],
    queryFn: () => handleUserBankList(filter),
  });
};

/************************************* View User Bank Details **************************************/
const handleViewUserBankDetails = async (id: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/viewParticularBank",
      method: "GET",
      params: {
        userId: id,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    } else {
      return null;
    }
  } catch (error: any) {
    // toast.error(error?.response?.data?.responseMessage);
    return null;
  }
};

export const useViewUserBankDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["ViewUserBankDetails"],
    queryFn: () => handleViewUserBankDetails(id),
  });
};

/************************************* Accept OR Reject User Bank  **************************************/

const handleAcceptOrRejectUserBank = async (data: any) => {
  try {
    const response = await api({
      url: "/admin/acceptRejectBank",
      method: "POST",
      data,
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
  }
};

export const useAcceptOrRejectUserBank = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => handleAcceptOrRejectUserBank(data),
    onSuccess: (data) => {
      if (data?.responseCode === 200) {
        queryClient.invalidateQueries({ queryKey: ["userBankLits"] });
        // onSuccessCallback();
      }
    },
  });
};

/*********************************** Deposite History Particular Person ***********************/
const handleDespositeHistory = async (filter: FilterType, uid: string) => {
  try {
    const response = await api({
      url: "admin/depositRequestListUser",
      method: "GET",
      params: {
        depositStatus: filter?.depositStatus || undefined,
        userId: uid || "",
        depositType: "ALL",
        symbol: filter?.coinValue || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        page: filter?.page || 1,
        limit: 10,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    // toast.error(error?.response?.data?.responseMessage);
  }
};

export const useDepositeHistory = (filter: object, uid: string) => {
  return useQuery({
    queryKey: ["depositeHistory", uid, filter],
    queryFn: () => handleDespositeHistory(filter, uid),
  });
};

/*********************************** Withdrawal History Particular Person ***********************/
const handleWithdrawHistory = async (filter: any, uid: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/cryptoWithdrawlist",
      method: "POST",
      data: {
        userId: uid || "",
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter.toDate)
          : undefined,
        filter: filter?.status == "Pending" ? "pending" : filter?.status,
        page: filter?.page || 1,
        limit: 10,
        symbol: filter?.search?.toLocaleUpperCase(),
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) { }
};

export const useWithdrawHistory = (filter: object, uid: string | undefined) => {
  return useQuery({
    queryKey: ["withdrawHistoryUserList", filter, uid],
    queryFn: () => handleWithdrawHistory(filter, uid),
  });
};

/*********************************** Refferal History data  ***********************/
const handleRefferalHistory = async (filter: FilterType, uid: string) => {
  try {
    const response = await api({
      url: "/admin/referralListUser",
      method: "GET",
      params: {
        userId: uid || "",
        search: filter?.search || undefined,
        isNewUser: filter?.isNewUser ? PayloadText.OverAllFunds(filter?.isNewUser) : undefined,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    return null;
  }
};

export const useRefferalHistory = (filter: object, uid: string) => {
  return useQuery({
    queryKey: ["refferalHistory", filter, uid],
    queryFn: () => handleRefferalHistory(filter, uid),
  });
};

/*********************************** Refferal History data  ***********************/
const handleNomineeDetails = async (filter: FilterType, uid: string) => {
  try {
    const response = await api({
      url: "/admin/nomineeList",
      method: "GET",
      params: {
        userId: uid || "",
      },
    });
    if (response?.data?.responseCode === 200) {
      // toast.success(response?.data?.responseMessage);
      return response;
    }
  } catch (error: any) {
    return null;
    // toast.error(error?.response?.data?.responseMessage);
  }
};

export const useNomineeDetails = (filter: object, uid: any) => {
  return useQuery({
    queryKey: ["NomineeDetails", filter, uid],
    queryFn: () => handleNomineeDetails(filter, uid),
  });
};

const handleUserSubscribedPlansList = async (
  filter: FilterType,
  uid: string
) => {
  try {
    const response = await api({
      url: "/installment/UserSubscribedPlansList",
      method: "GET",
      params: {
        userId: uid || "",
        page: filter?.page || 1,
        limit: 10,
        search: filter?.search || undefined,
        filter:
          filter?.search === "Pre Redemtion"
            ? "PRE_REDEMTION"
            : filter?.status?.toUpperCase() || undefined,
        ...(filter?.isClamed && {
          isClamed: filter?.isClamed === "Claimed" ? "true" : "false",
        }),
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter.toDate)
          : undefined,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    return null;
  }
};

export const useUserSubscribedPlansList = (filter: object, uid: any) => {
  return useQuery({
    queryKey: ["UserSubscribedPlansList", filter, uid],
    queryFn: () => handleUserSubscribedPlansList(filter, uid),
  });
};

const handleUserInstallmentHistory = async (filter: FilterType, id: string) => {
  try {
    const response = await api({
      url: "/installment/getallEmisAdmin",
      method: "GET",
      params: {
        sub_id: id || "",
      },
    });
    if (response?.data?.responseCode === 200) {
      return response;
    }
  } catch (error: any) {
    return null;
  }
};

export const useUserInstallmentHistory = (filter: object, id: any) => {
  return useQuery({
    queryKey: ["getAllSubscribedUsers", filter, id],
    queryFn: () => handleUserInstallmentHistory(filter, id),
  });
};

/************************************************************** BLOCK, DELETE, MAKE THE USER ****************************/
const handleUserAction = async (data: any) => {
  try {
    const response = await api({
      url: "/admin/deleteUserAccount",
      method: "POST",
      data,
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
    return error?.response;
  }
};

export const useUserAction = (onSuccessCallback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => handleUserAction(data),
    onSuccess: (data) => {
      if (data?.responseCode === 200) {
        onSuccessCallback();
        queryClient.invalidateQueries({ queryKey: ["ViewUpdateEmailMobile"] });
      }
    },
  });
};



/************************************* Activity Hold ******************************* */

const handleUserAH = async (data: any) => {
  try {
    const response = await api({
      url: "/admin/activeInactiveUserActivity",
      method: "POST",
      data,
    });
    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
    return error?.response;
  }
};

export const useUserAH = (onSuccessCallback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => handleUserAH(data),
    onSuccess: (data) => {
      if (data?.responseCode === 200) {
        onSuccessCallback();
        queryClient.invalidateQueries({ queryKey: ["ViewUpdateEmailMobile"] });
      }
    },
  });
};
/*********************************** Update Email and Mobile User **********************/
const handleUserUpdateEmailMobile = async (
  filter: UpdateUserEmailMobileFilterType
) => {
  try {
    const response = await api({
      url: "/admin/emailMobileRequestUsers",
      method: "GET",
      params: {
        isNewUser: filter?.isNewUser ? PayloadText.UserTag(filter?.isNewUser) : undefined,
        email: filter?.search || undefined,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const UserUpdateEmailMobile = (
  filter: UpdateUserEmailMobileFilterType
) => {
  return useQuery({
    queryKey: ["UpdateEmailMobile", filter],
    queryFn: () => handleUserUpdateEmailMobile(filter),
  });
};

const handleUserViewUpdateEmailMobile = async (id: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/viewMobileChangeRequest",
      method: "GET",
      params: { userId: id },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useUserViewUpdateEmailMobile = (id: string | undefined) => {
  return useQuery({
    queryKey: ["ViewUpdateEmailMobile"],
    queryFn: () => handleUserViewUpdateEmailMobile(id),
    enabled: !!id,
  });
};

const handleApprovedRejectedEmailMobile = async ({
  id,
  action,
  isReject,
  message,
}: {
  id: string;
  action: string;
  isReject?: string;
  message?: string;
}) => {
  try {
    const response = await api({
      url: "/admin/approveRejectEmailMobile",
      method: "POST",
      data: {
        id: id,
        action: action,
        ...(isReject === "Rejected" && { reason: message }),
      },
    });

    if (response?.data?.responseCode === 200) {
      toast.success(response?.data?.responseMessage);
      return response?.data;
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.responseMessage);
    return error?.response;
  }
};

export const useApprovedRejectedEmailMobile = (
  onSuccessCallback: () => void
) => {
  return useMutation({
    mutationFn: ({
      id,
      action,
      isReject,
      message,
    }: {
      id: string;
      action: string;
      isReject?: string;
      message?: string;
    }) =>
      handleApprovedRejectedEmailMobile({
        id,
        action,
        isReject,
        message,
      }),
    onSuccess: () => {
      onSuccessCallback();
    },
  });
};

const handleEmailMobileUpdateHistory = async (filter: FilterType) => {
  try {
    const response = await api({
      url: "/admin/chnageEmailMobileList",
      method: "GET",
      params: {
        search: filter?.search || undefined,
        isNewUser: filter?.isNewUser ? PayloadText.UserTag(filter?.isNewUser) : undefined,
        filter:
          filter?.ModuleType === "Mobile Update"
            ? "Mobile_UPDATE"
            : "EMAIL_UPDATE",
        page: filter?.page || 1,
        status:
          filter?.EmailMobileStatus === "Approved"
            ? "APPROVED"
            : filter?.EmailMobileStatus === "Rejected"
              ? "REJECTED"
              : undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter.toDate)
          : undefined,
        limit: 10,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useEmailMobileUpdateHistory = (filter: FilterType) => {
  return useQuery({
    queryKey: ["EmailMobileUpdateHistory", filter],
    queryFn: () => handleEmailMobileUpdateHistory(filter),
  });
};

const handleUserMiningHistory = async (
  filter: MiningFilterType,
  email: string,
  id: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/userMiningHistory",
      method: "GET",
      params: {
        userId: id || undefined,
        filter: filter?.filter || undefined,
        search: email ? email : filter?.search,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter.toDate)
          : undefined,
        limit: 10,
        page: filter?.page,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useUserMiningHistory = (
  filter: MiningFilterType,
  email: string,
  id: string | undefined
) => {
  return useQuery({
    queryKey: ["UserMiningHistory", filter, email, id],
    queryFn: () => handleUserMiningHistory(filter, email, id),
  });
};

const handleUserTotalPointCoin = async (uid: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/userTotalPointCoin",
      method: "GET",
      params: {
        userId: uid,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useUserTotalPointCoin = (uid: string | undefined) => {
  return useQuery({
    queryKey: ["UserMiningHistory"],
    queryFn: () => handleUserTotalPointCoin(uid),
  });
};

// ********************************** add user fund **********************************************

export const useAddUserFund = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddUserFundPayload) =>
      handleAddFundToUser(data as object),
    onSuccess: (data) => {
      if (data?.data?.responseCode == 200) {
        queryClient.invalidateQueries({ queryKey: ["GetUserAddFundList"] });
      }
    },
  });
};

export const handleAddFundToUser = async (data: FilterType) => {
  try {
    const response = await api({
      url: "/admin/addFundManual",
      method: "POST",
      data,
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};

// **************************************** get add fund user  **************************************************************

export const useGetUserAddFundList = (filter: MiningFilterType) => {
  return useQuery({
    queryKey: ["GetUserAddFundList", filter],
    queryFn: () => handleUseGetUserAddFundList(filter),
  });
};

const handleUseGetUserAddFundList = async (filter: any) => {
  try {
    const response = await api({
      url: "/admin/listAddFundManual",
      method: "GET",
      params: {

        isNewUser: filter?.isNewUser ? PayloadText.OverAllFunds(filter?.isNewUser) : undefined,

        filter: filter?.filter || undefined,
        search: filter?.search || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter.toDate)
          : undefined,
        // limit: 10,
        page: filter?.page,
        moduleType: filter?.moduleType,
        walletType: filter?.symbol
          ? String(filter?.symbol)?.toLocaleUpperCase()
          : undefined,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};
// ********************************************** no worry deal ************************************

const handleUserDealsSubscriptions = async (
  filter: FilterType,
  uid: string | undefined
) => {
  try {
    const response = await api({
      url: "/admin/dealSubscriptionUser",
      method: "GET",
      params: {
        userId: uid,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useUserDealsSubscriptions = (
  filter: FilterType,
  uid: string | undefined
) => {
  return useQuery({
    queryKey: ["UserDealsSubscriptions"],
    queryFn: () => handleUserDealsSubscriptions(filter, uid),
  });
};

// ********************************************** no worry deal ************************************

const handleStateList = async () => {
  try {
    const response = await api({
      url: "/bank/countryLisWithState",
      method: "GET",
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useStateList = () => {
  return useQuery({
    queryKey: ["StateList"],
    queryFn: handleStateList,
  });
};

/***************************************** Tracking Active USER ******************************** */
const handleTrackingActiveUser = async (
  filter: TrackingActiveUserFilterType
) => {
  try {
    const response = await api({
      url: "/admin/activeUsers",
      method: "GET",
      params: {
        isTestUser: filter?.isTestUser ? PayloadText.UserType(filter?.isTestUser) : undefined,
        isNewUser: filter?.isNewUser ? PayloadText.UserTag(filter?.isNewUser) : undefined,
        filter: filter?.filter
          ? filter?.filter === "24 hours"
            ? "24h"
            : filter?.filter === "7 days"
              ? "7d"
              : filter?.filter === "15 days"
                ? "15d"
                : filter?.filter === "30 days"
                  ? "30d"
                  : filter?.fromDate && filter?.toDate
                    ? "custom"
                    : "24h"
          : filter?.fromDate && filter?.toDate
            ? "custom"
            : "24h",

        search: filter?.search || undefined,
        fromDate: filter?.fromDate
          ? convertDataFormateForServer(filter?.fromDate)
          : undefined,
        toDate: filter?.toDate
          ? convertDataFormateForServer(filter?.toDate)
          : undefined,
        page: filter?.page ? filter?.page : undefined,
        limit: 10,
      },
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export const useTrackingActiveUser = (filter: TrackingActiveUserFilterType) => {
  return useQuery({
    queryKey: ["TrackingActiveUser", filter],
    queryFn: () => handleTrackingActiveUser(filter),
  });
};


// ********************************************** Withdrawal Balance ************************************

const handleWithdrawalBalance = async (userId: string | undefined) => {
  try {
    const response = await api({
      url: "/admin/totaluserportfolioBal",
      method: "GET",
      params: {
        userId
      }
    });
    if (response?.data?.responseCode === 200) {
      return response?.data ?? {};
    } else {
      return {}

    }
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const useWithdrawalBalance = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["WithdrawalBalance"],
    queryFn: () => handleWithdrawalBalance(userId),
  });
};



// ********************************************** Withdrawal Balance ************************************

const handleRewardHistory = async (userId: string | undefined) => {
  try {
    const response = await api({
      url: "/reward/rewardHistoryAdmin",
      method: "GET",
      params: { userId }
    });
    if (response?.data?.responseCode === 200) {
      return response?.data;
    } else {
      return null

    }
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const useRewardHistory = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["RewardHistory"],
    queryFn: () => handleRewardHistory(userId),
  });
};