import { api } from "../services/apiServices";
import { useQuery } from "@tanstack/react-query";

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

/************************************** Crypto Desposite Request List  **********************************/

export const fetchCategoryList = async () => {
  try {
    const response = await api({
      url: `/admin/listCategory`,
      method: "GET",
      //   params: {
      //     search: filter?.search || undefined,
      //     userType: filter?.filter,

      //     limit: 10,
      //     page: filter?.page || 1,
      //   },
    });
    return response;
  } catch (error: any) {
    console.error("API error:", error);
    return error?.response;
  }
};
export const useCategoryList = () => {
  return useQuery({
    queryKey: ["listCategory"],
    queryFn: () => fetchCategoryList(),
    select(data) {
      if (data?.data?.responseCode === 200) {
        return data?.data?.result || [];
      } else {
        return null;
      }
    },
  });
};
