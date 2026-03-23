import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "../../components/ui/button/Button";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useMemo, useState } from "react";
import CommonTable from "../../components/common/CommonTable";
import { useNavigate } from "react-router";
import {
    useCallHistoryList,
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
  user2: {
    name: any;
   
  };
  user1: {
    name: any;
  
  };
  totalCalls: any;
  depositStatus: string;
  lastCallTime: string;
  updatedAt: string;
  Action: any;
}

const columnHelper = createColumnHelper<InrWithdrawListRowData>();

const CallHistoryList = () => {
  const navigate = useNavigate();
  const { setParam, searchParams, removeParam } = useSetSearchParam();
  const [filter, setFilter] = useState({ page: searchParams.get("page") });
  const debouncedFilter = useDebounce(filter, 1000);
  const [isDownloadCsv, setIsDownloadCsv] = useState(false);
  const { data, isLoading } = useCallHistoryList();

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
    columnHelper.accessor("user1.name", {
      header: "User",
      cell: (info) => info.getValue() || "--",
    }),
    columnHelper.accessor("user2.name", {
      header: "Buddy",
      cell: (info) => info.getValue() || "--",
    }),
    columnHelper.accessor("totalCalls", {
      header: "Total Calls",
      cell: (info) => info.getValue() || "--",
    }),
    columnHelper.accessor("lastCallTime", {
        header: "Last Call Time Date & Time",
        cell: (info) => DateTimeFormates(info.getValue()),
      }),
  

    {
      header: "Action",
      id: "view",
      cell: ({ row }: { row: any }) => {
        return (
          <Button
            onClick={() => {
              navigate(`/deposit-view`, {
                state: { withdrawDetail: row?.original },
              });
            }}
          >
            View
          </Button>
        );
      },
    },
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
      <BackComponent text="Call History" />
      <CommonTable tableData={tableData} />
    </>
  );
};

export default CallHistoryList;
