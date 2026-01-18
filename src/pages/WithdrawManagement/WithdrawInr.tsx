import moment from "moment";
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
import { useWithdrawCrypto, useWithdrawList } from "../../queries/deposit-management";
import BackComponent from "../../components/backcomponent/BackComponent";
import { DateTimeFormates, OldNewUserTag, Pagination, statusColor, statusText, TestRealUserType } from "../../utils";
import { useSetSearchParam } from "../../hooks/useSetSearchParam";
import { useWithdrawCryptoInrCSV } from "../../queries/downloadCSV";
import CopyButton from "../../components/common/CopyButton";

interface InrWithdrawListRowData {
  id: string;
  user: {
    name: number;
    email: string;
    user_id: string;
    isNewUser: boolean;
    isTestUser: boolean;
  };
  amount: string;
  withdrawStatus: string;
  createdAt: string;
  updatedAt: string;
  INRAmount: string;
  Action: any;
}

const columnHelper = createColumnHelper<InrWithdrawListRowData>();

const WithdrawInr = () => {


  const navigate = useNavigate();
  const { setParam, searchParams, removeParam } = useSetSearchParam();
  const [filter, setFilter] = useState({ page: searchParams.get("page") });
  const debouncedFilter = useDebounce(filter, 1000);
  const [isDownloadCsv, setIsDownloadCsv] = useState(false)
  const { data, isLoading } = useWithdrawList( debouncedFilter);
  const { data: WithdrawCryptoInrCSV, isLoading: WithdrawCryptoInrCSVLoading, isSuccess } = useWithdrawCryptoInrCSV(debouncedFilter, "Fiat", isDownloadCsv);

  const formateData = useMemo(() => {
    const tabledata = data?.docs ?? [];
    const pages = data?.pages ?? 0
    const WithCryptoInrCSVData = WithdrawCryptoInrCSV?.result?.docs?.map((item: any) => ({
      Name: item?.user?.name,
      Email: item?.user?.email,
      "User Id": item?.user?.user_id,
      "User Tag": OldNewUserTag(item?.user?.isNewUser),
      "User Type": TestRealUserType(item?.user?.isTestUser),
      "INR Amount": item?.amount,
      Status: statusText(item?.withdrawStatus),
      Coin: item?.symbol,
      "UTR/Trx Id": item?.UTRId,
      "Receive Amount": item?.amount,
      "Withdrawal Fee": item?.withdrawalFee ? `${item?.withdrawalFee}INR` : "--",
      "Transaction Id": item?.transection_id ? `\t${String(item?.transection_id)}` : "",
      "Requested Date & Time": DateTimeFormates(item?.createdAt),
      "Updated Date & Time": statusText(item?.withdrawStatus) === "Verified" || statusText(item?.withdrawStatus) === "Rejected" ? DateTimeFormates(item?.updatedAt) : "--",
      "Bank Name": item?.bankResult?.bankName || "--",
      "Beneficiary Name": item?.bankResult?.beneName || "--",
      "Account Number": item?.bankResult?.accountNumber || "--",
      "IFSC Code": item?.bankResult?.ifscCode || "--",
    })) ?? []
    return { tabledata, pages, WithCryptoInrCSVData };
  }, [data, WithdrawCryptoInrCSV]);


  useEffect(() => {
    if (isSuccess && WithdrawCryptoInrCSV?.result?.docs?.length > 0) {
      setIsDownloadCsv(false)
    }
  }, [isSuccess, WithdrawCryptoInrCSV])


  const columns = [
    {
      header: "Sr. No",
      id: "serial",
      cell: ({ row, table }: { row: any; table: any }) => {
        return Pagination({ filter, table, row });
      },
    },
    columnHelper.accessor("user.name", {
      header: "Name",
      cell: (info) => info.getValue() || "--",
    }),
    // columnHelper.accessor("user.email", {
    //   header: "Email",
    //   cell: (info) => info.getValue() || "--",
    // }),
    columnHelper.accessor("user.email", {
      header: "Email",
      cell: (info) => {
        const val = info.getValue() || "--";
        return val ? (<span>   {val}   <CopyButton textToCopy={val} /> </span>) : ("--");
      },
    }),


    columnHelper.accessor("user.user_id", {
      header: "User Id",
      cell: (info) => {
        const val = info.getValue();
        return val ? (
          <span>
            {val}
            <CopyButton textToCopy={val} />
          </span>
        ) : (
          "--"
        );
      },
    }),


    columnHelper.accessor("user.isNewUser", {
      header: "User Tag",
      cell: (info) => OldNewUserTag(info.getValue()),
    }),


    columnHelper.accessor("user.isTestUser", {
      header: "User Type",
      cell: (info) => TestRealUserType(info.getValue()),
    }),


    columnHelper.accessor("amount", {
      header: "INR Amount",
      cell: (info) => info.getValue() || "--",
    }),
    columnHelper.accessor("withdrawStatus", {
      header: "Status",
      cell: (info) => {
        let value = info.getValue() || "--";
        return (<span className={`${statusColor(value)}`}>{statusText(value)}</span>
        );
      },
    }),

    columnHelper.accessor("createdAt", {
      header: "Requested Date & Time",
      cell: (info) => DateTimeFormates(info.getValue())
    }),

    columnHelper.accessor("updatedAt", {
      header: "Updated Date & Time",
      cell: (info) => {
        const status = statusText(info?.row?.original?.withdrawStatus);
        if (status === "Verified" || status === "Rejected") {
          return DateTimeFormates(info.getValue())
        } else {
          return "--"
        }

      }
    }),

    {
      header: "Action",
      id: "view",
      cell: ({ row }: { row: any }) => {
        return (
          <Button
            onClick={() => {
              navigate(`/withdraw-crypto-view/${row?.original?.id}`, {
                state: { type: "Fiat", viewCryptoDetails: row?.original },
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
    type: "withdrawCrypto",
    totalPage: formateData?.pages,
    filterData: {
      WithCryptoInrCSVData: formateData?.WithCryptoInrCSVData,
      isCSVloading: WithdrawCryptoInrCSVLoading,
      setIsDownloadCsv: setIsDownloadCsv,
      isSuccess: isSuccess,
      isDownloadCsv: isDownloadCsv


    },
    removeParamFn: () => removeParam("page"),
    setSearchParamsFn: (page: number) => setParam("page", page),
  };

  return (
    <>
      <BackComponent text="Withdraw List" />
      <CommonTable tableData={tableData} />
    </>
  );
};

export default WithdrawInr;
