import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "../../components/ui/button/Button";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useMemo, useState } from "react";
import CommonTable from "../../components/common/CommonTable";
import { useLocation, useNavigate } from "react-router";
import {
  useCallHistoryList,
  useCallHistoryView,
} from "../../queries/call-history";
import BackComponent from "../../components/backcomponent/BackComponent";
import {
  DateTimeFormates,
  Pagination,
  statusColor,
  statusText,
} from "../../utils";
import { useSetSearchParam } from "../../hooks/useSetSearchParam";
import { useWithdrawCryptoInrCSV } from "../../queries/downloadCSV";
import CopyButton from "../../components/common/CopyButton";

interface InrWithdrawListRowData {
  id: string;

  adminCommissionAmount: any;
  buddyEarning: any;


  durationSeconds: any;
  totalAmount: any;
  pricePerMinute: any;
 
}

const columnHelper = createColumnHelper<InrWithdrawListRowData>();

const ViewCallHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { callDetail } = location.state || {};
  const { setParam, searchParams, removeParam } = useSetSearchParam();
  const [filter, setFilter] = useState({ page: searchParams.get("page") });
  const debouncedFilter = useDebounce(filter, 1000);
  const [isDownloadCsv, setIsDownloadCsv] = useState(false);

  console.log(debouncedFilter, "debouncedFilterdebouncedFilter");

  const { data, isLoading } = useCallHistoryView({
    user1: callDetail?.user1?._id,
    user2: callDetail?.user2?._id,
    page: debouncedFilter?.page,
  });
  const {
    data: WithdrawCryptoInrCSV,
    isLoading: WithdrawCryptoInrCSVLoading,
    isSuccess,
  } = useWithdrawCryptoInrCSV(debouncedFilter, "Fiat", isDownloadCsv);

  const formateData = useMemo(() => {
    const tabledata = data?.docs ?? [];
    const pages = data?.totalPages ?? 0;
    const WithCryptoInrCSVData =
      WithdrawCryptoInrCSV?.result?.docs?.map((item: any) => ({
        Name: item?.user?.name,
        Email: item?.user?.email,

        Status: statusText(item?.withdrawStatus),
      })) ?? [];
    return { tabledata, pages, WithCryptoInrCSVData };
  }, [data, WithdrawCryptoInrCSV]);

  useEffect(() => {
    if (isSuccess && WithdrawCryptoInrCSV?.result?.docs?.length > 0) {
      setIsDownloadCsv(false);
    }
  }, [isSuccess, WithdrawCryptoInrCSV]);

  const columns = [
    {
      header: "Sr. No",
      id: "serial",
      cell: ({ row, table }: { row: any; table: any }) => {
        return Pagination({ filter, table, row });
      },
    },
    columnHelper.accessor("adminCommissionAmount", {
        header: "Admin Commission Amount",
        cell: (info) => {
          const value = info.getValue();
          return `₹${Number(value ?? 0).toFixed(2)}`;
        },
      }),
  
    columnHelper.accessor("buddyEarning", {
        header: "Buddy Earning",
        cell: (info) => {
          const value = info.getValue();
          return `₹${Number(value ?? 0).toFixed(2)}`;
        },
      }),
  
    columnHelper.accessor("totalAmount", {
        header: "Total Amount",
        cell: (info) => {
          const value = info.getValue();
          return `₹${Number(value ?? 0).toFixed(2)}`;
        },
      }),
  
    columnHelper.accessor("durationSeconds", {
        header: "Duration Seconds",
        cell: (info) => {
          const value = info.getValue();
          return `${Number(value ?? 0)} Sec`;
        },
      }),
    columnHelper.accessor("pricePerMinute", {
        header: "Price per  Minute",
        cell: (info) => {
          const value = info.getValue();
          return `₹${Number(value ?? 0).toFixed(2)}`;
        },
      }),
  

  ];

  const table = useReactTable({
    data: formateData?.tabledata,
    columns: columns ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const tableData = {
    filter,
    setFilter,
    isLoading,
    table,
    type: "deposite",
    totalPage: formateData?.pages,
    filterData: {
      WithCryptoInrCSVData: formateData?.WithCryptoInrCSVData,
      isCSVloading: WithdrawCryptoInrCSVLoading,
      setIsDownloadCsv: setIsDownloadCsv,
      isSuccess: isSuccess,
      isDownloadCsv: isDownloadCsv,
    },
    removeParamFn: () => removeParam("page"),
    setSearchParamsFn: (page: number) => setParam("page", page),
  };

  return (
    <>
      <BackComponent text="Details" />
      <CommonTable tableData={tableData} />
    </>
  );
};

export default ViewCallHistory;
