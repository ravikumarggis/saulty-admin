import { ChevronDown, Search } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, } from "@headlessui/react";
import DatePicker from "../form/date-picker";
import Button from "../ui/button/Button";
import { Fragment, memo, useState } from "react";
import Label from "../form/Label";
import CSVDownloader from "../DownloadCSV/DownlaodCSV";
import SelectDropDown, { SelectDropDownBuySellCoin, SelectDropDownDebit, } from "../selectDropDown/SelectDropDown";
import TabButton from "../tabs/tab";

const Userkyc = [
  { id: 1, name: "Verified" },
  { id: 2, name: "Not-Verified" },
];

const UserStatus = [
  { id: 1, name: "BLOCK" },
  { id: 2, name: "ACTIVE" },
];

const kycStatus = [
  { id: 1, name: "Verified" },
  { id: 2, name: "Rejected" },
  { id: 3, name: "Pending" },
];
const balanceLogHistoryType = [
  { id: 1, name: "INR_DEPOSIT" },
  { id: 2, name: "Fiat_WITHDRAW" },
  { id: 3, name: "FastTrade" },
];

const independenceData = [
  { id: 1, name: "Accepted" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Rejected" },
];

const UserTags = [
  { id: 1, name: "Old User" },
  { id: 2, name: "New User" },
];

const allUserPlanStatus = [
  { id: 1, name: "Active" },
  { id: 2, name: "Terminated" },
  { id: 3, name: "Completed" },
];

const allUserPlanVouchersStatus = [
  { id: 1, name: "Redeem" },
  { id: 2, name: "Non Redeem" },
];

const orderType = [
  { id: 1, name: "Sell" },
  { id: 2, name: "Buy" },
];

const tradeStatus = [
  { id: 1, name: "Success" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Cancel" },
];

const ModuleType = [
  { id: 1, name: "Withdraw" },
  { id: 2, name: "Deposit" },
];

const withdrawStatus = [
  { id: 2, name: "Verified" },
  { id: 1, name: "Pending" },
  { id: 3, name: "Rejected" },
];

const status = [
  { id: 1, name: "Verified" },
  { id: 2, name: "Rejected" },
  { id: 3, name: "Pending" },
];

const Depositstatus = [
  { id: 2, name: "Verified" },
  { id: 1, name: "Pending" },
  { id: 3, name: "Rejected" },
];

const DepositInr = [
  { id: 1, name: "Verified" },
  { id: 2, name: "Rejected" },
  { id: 3, name: "Pending" },
];

const QueryStatus = [
  { id: 1, name: "Pending" },
  { id: 2, name: "Resolved" },
  { id: 3, name: "In-Process" },
];

const CryptoDepositStatus = [
  { id: 1, name: "Pending" },
  { id: 2, name: "Rejected" },
  { id: 3, name: "Verified" },
];

const ReasonType = [
  { id: 1, name: "Nowory11" },
  { id: 2, name: "Security & Privacy" },
  { id: 3, name: "Refferal Program" },
  { id: 4, name: "Trading" },
  { id: 5, name: "Withdrawals" },
  { id: 6, name: "Deposits" },
  { id: 7, name: "Account & KYC" },
  { id: 8, name: "Getting Started" },
  { id: 9, name: "Sign Up & Login" },
];

const UserBankStatus = [
  { id: 3, name: "Verified" },
  { id: 1, name: "Pending" },
  { id: 2, name: "Rejected" },
];

const WalleteStatus = [
  { id: 1, name: "Approved" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Rejected" },
];

const TokenType = [
  { id: 1, name: "Rapid Token" },
  { id: 2, name: "Platform Token" },
];

const UserType = [
  { id: 4, name: "Test User" }
];

const UserType2 = [
  { id: 1, name: "Test User" },
  { id: 2, name: "Real User" }
];

const UserTag = [
  { id: 1, name: "New User" },
  { id: 2, name: "Old User" },
];

const languageTypes = [
  { id: 1, name: "Hindi" },
  { id: 2, name: "English" },
];

const GestUser = [
  { id: 1, name: "Yes" },
  { id: 2, name: "No" },
];

const moduleType = [
  { id: 1, name: "Add_Fund" },
  { id: 2, name: "Deduct_Fund" },
];

const GenderType = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

const TimePeriod = [
  { id: 1, name: "24 hours" },
  { id: 2, name: "7 days" },
  { id: 3, name: "15 days" },
  { id: 4, name: "30 days" },
];

const TradeOrderType = [
  { id: 1, name: "Buy" },
  { id: 2, name: "Sell" },
];

const dropsStaus = [
  { id: 1, name: "Completed" },
  { id: 2, name: "Cancled" },
  { id: 3, name: "Pending" },
];

const LockFreeze = [
  { id: 1, name: "FIXED" },
  { id: 2, name: "FLEXIBLE" },
];

const OFLock = [
  { id: 1, name: "Crypto" },
  { id: 2, name: "All" },
  { id: 3, name: "INR" },
];
const dealsPanlStaus = [
  { id: 1, name: "Completed" },
  { id: 2, name: "Cancled" },
  { id: 3, name: "Pending" },
];

const EmailStatus = [
  { id: 1, name: "Approved" },
  { id: 2, name: "Rejected" },
];

const dealsStatus = [
  { id: 1, name: "Participated" },
  { id: 2, name: "Interested" },
];

const sortType = [
  { id: 1, name: "Deposit Top" },
  { id: 2, name: "Deposit Down" },
  { id: 3, name: "Fund Top" },
  { id: 4, name: "Fund Down" },
  { id: 5, name: "Withdraw Top" },
  { id: 6, name: "Withdraw Down" },
];


const sortTypeAllUserTDS = [
  { id: 1, name: "Total TDS (INR) Top" },
  { id: 2, name: "Total TDS (INR) Down" },
  { id: 3, name: "Total TDS (USDT) Top" },
  { id: 4, name: "Total TDS (USDT) Down" },
];
const sortTypeTrade = [
  { id: 1, name: "Creadit Amount Top" },
  { id: 2, name: "Creadit Amount Down" },
  { id: 3, name: "Debit Amount Top" },
  { id: 4, name: "Debit Amount Down" },
];


const UserFundSortType = [
  { id: 1, name: "Top" },
  { id: 2, name: "Down" },
];

const OverAllsortType = [
  { id: 1, name: "Top" },
  { id: 2, name: "Down" },
];

const BalaceLogStatus = [
  { id: 1, name: "Active" },
  { id: 2, name: "Deleted" },
  { id: 3, name: "Blocked" },
];

interface TableFilterProps {
  filter: any;
  setFilter: any;
  type: string;
  walletType: string;
  isLoading: any;
  downloadCSV: any;
  removeParamFn: any;
  filterData: any;
  setIsDownloadCsv: any
}

const TableFilter: React.FC<TableFilterProps> = ({
  filter,
  setFilter,
  type,
  walletType,
  isLoading,
  downloadCSV,
  removeParamFn,
  filterData,
  setIsDownloadCsv
}) => {
  const [datePickerKey, setDatePickerKey] = useState(0);

  const parseDate = (str: string) => {
    const [day, month, year] = str.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  return (
    <>
      <div className="w-full my-4 p-2 grid grid-cols-8 2xl:grid-cols-12 gap-4">

        {type == "Independence" && (
          <Fragment>
            <div className="w-full flex flex-col col-span-12 md:col-span-4 2xl:col-span-2">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email, mobile"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 2xl:col-span-2">
              <Listbox
                onChange={(value) => {
                  setFilter((p) => ({ ...p, page: 1, filter: value?.name }));
                  removeParamFn();
                }}
                value={filter?.filter}
              >
                <Label>Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.filter || "Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {independenceData.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="min-w-40 flex items-end">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                  removeParamFn();
                }}
              >
                Reset
              </Button>
            </div>
          </Fragment>
        )}




        {type == "overallFund" && (
          <Fragment>
            <div className="w-full flex flex-col col-span-12 md:col-span-4 2xl:col-span-2">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by symbol"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 2xl:col-span-2">
              <Listbox
                onChange={(value) => {
                  setFilter((p) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Over All Funds.csv"
                />
              </div>
            </div>
          </Fragment>
        )}

        {/******************************************* user funds **************************************/}
        {type == "userFund" && (
          <Fragment>
            <div className="col-span-12 md:col-span-4 2xl:col-span-2">
              <div>
                <Label>Wallet Type</Label>
                <SelectDropDown filter={filter} setFilter={setFilter} />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 2xl:col-span-2">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.sortType}
              >
                <Label>Sort By (INR Amount)</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.sortType || "sortType"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserFundSortType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Funds.csv"
                />
              </div>
            </div>
          </Fragment>
        )}



        {/* **************************************************** admin wallet filter******************/}
        {type === "adminWallet" && (
          <Fragment>
            <div className="w-full flex flex-col col-span-12 md:col-span-4 2xl:col-span-2">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="min-w-40 flex items-end">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                }}
              >
                Reset
              </Button>
            </div>
          </Fragment>
        )}
      </div>



      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**************************************    depositUserHistory  ***************************************************/}

      {type == "depositUserHistory" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          <div className="w-full">
            <div>
              <Label>Coin Type</Label>
              <SelectDropDown filter={filter} setFilter={setFilter} />
            </div>
          </div>

          <div className="w-full">
            <Listbox
              onChange={(value) =>
                setFilter((p: any) => ({ ...p, depositStatus: value?.name }))
              }
              value={filter?.depositStatus}
            >
              <Label>Status</Label>
              <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                <p>{filter?.depositStatus || "Status"}</p>
                <ChevronDown />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom start"
                className="bg-blue-400 rounded-lg"
              >
                {Depositstatus.map((type) => (
                  <ListboxOption
                    key={type.id}
                    value={type}
                    className="capitalize
                       data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                  >
                    {type.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>

          <div className="w-full">
            <DatePicker
              id="from-date-picker"
              label="From Date"
              placeholder="DD/MM/YYYY"
              key={`from-${datePickerKey}`}
              defaultDate={filter.fromDate}
              maxDate={filter.toDate ? filter.toDate : undefined}
              onChange={(_, dateStr) => {
                if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                  setFilter((p: any) => ({
                    ...p,
                    fromDate: dateStr,
                    toDate: undefined,
                  }));
                } else {
                  setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                }
              }}
            />
          </div>

          <div className="w-full">
            <DatePicker
              id="to-date-picker"
              label="To Date"
              placeholder="DD/MM/YYYY"
              key={`to-${datePickerKey}`}
              defaultDate={filter.toDate}
              minDate={filter.fromDate ? filter.fromDate : undefined}
              onChange={(_, dateStr) => {
                if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                  setFilter((p: any) => ({
                    ...p,
                    toDate: dateStr,
                    fromDate: undefined,
                  }));
                } else {
                  setFilter((p: any) => ({ ...p, toDate: dateStr }));
                }
              }}
            />
          </div>


          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
            <div className="w-full min-w-40  2xl:min-w-30 flex items-end mt-4">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({ search: "" });
                  removeParamFn();
                }}
              >
                Reset
              </Button>
            </div>

            <div className="w-full  min-w-40  2xl:min-w-30 flex items-end justify-start">
              <CSVDownloader
                onClick={() => { }}
                isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                data={filterData?.downloadCSV ?? []}
                isSuccess={false}
                filename="User Deposit.csv"
              />
            </div>
          </div>
        </div >
      )}


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**********************************************rewardDistribution ***********************************************/}

      {type == "rewardDistribution" && (
        <div className="w-full xl:max-w-[55%] grid  md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_0.5fr] gap-3.5">
          <div className="w-full  ">
            <DatePicker
              id="from-date-picker"
              label="From Date"
              placeholder="DD/MM/YYYY"
              key={`from-${datePickerKey}`}
              defaultDate={filter.fromDate}
              maxDate={filter.toDate ? filter.toDate : undefined}
              onChange={(_, dateStr) => {
                if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                  setFilter((p: any) => ({
                    ...p,
                    page: 1,
                    fromDate: dateStr,
                    toDate: undefined,
                  }));
                } else {
                  setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                }
              }}
            />
          </div>

          <div className="w-full">
            <DatePicker
              id="to-date-picker"
              label="To Date"
              placeholder="DD/MM/YYYY"
              key={`to-${datePickerKey}`}
              defaultDate={filter.toDate}
              minDate={filter.fromDate ? filter.fromDate : undefined}
              onChange={(_, dateStr) => {
                if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                  setFilter((p: any) => ({
                    ...p,
                    page: 1,
                    toDate: dateStr,
                    fromDate: undefined,
                  }));
                } else {
                  setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                }
              }}
            />
          </div>

          <div className="flex items-end">
            <Button
              className="w-full py-3"
              onClick={() => {
                setDatePickerKey((p) => p + 1);
                setFilter({});
              }}
            >
              Reset
            </Button>
          </div>

        </div>
      )}



      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**********************************************************User Withdraw History list *************************/}
      {
        type == "userWithdrawHistory" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by symbol"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, status: value?.name }))
                }
                value={filter?.status}
              >
                <Label>Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.status || "Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {withdrawStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  2xl:min-w-30 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  2xl:min-w-30 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Withdraw.csv"
                />
              </div>
            </div>
          </div>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/*************************************************** userPlanDetails Nowory11 Particular USER************************************/}
      {
        type == "userPlanDetails" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter({});
                  setFilter((p: any) => ({ ...p, status: value?.name }));
                }}
                value={filter?.status}
              >
                <Label>Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.status || "Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {allUserPlanStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>


            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  2xl:min-w-30 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  2xl:min-w-30 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Nowory11.csv"
                />
              </div>
            </div>
          </div>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** Insta trade filter*************************/}
      {
        type == "user-fasttrade" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2">
            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, orderType: value?.name }))
                }
                value={filter?.orderType}
              >
                <Label>Trade Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.orderType || "Order Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {orderType.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, status: value?.name }))
                }
                value={filter?.status}
              >
                <Label>Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.status || "Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {tradeStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <div>
                <Label>Credit Currency</Label>
                <SelectDropDown filter={filter} setFilter={setFilter} />
              </div>
            </div>

            <div className="w-full">
              <div>
                <Label>Debit Currency</Label>
                <SelectDropDownDebit filter={filter} setFilter={setFilter} />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.sortType}
              >
                <Label>Sort By</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.sortType || "sortType"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {sortTypeTrade?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>



            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({ search: "" });
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Tarde.csv"
                />
              </div>
            </div>
          </div>
        )



      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** Insta trade filter*************************/}
      {
        type == "TradeOrderList" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2">
            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, orderType: value?.name }))
                }
                value={filter?.orderType}
              >
                <Label>Trade Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.orderType || "Order Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {orderType.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, status: value?.name }))
                }
                value={filter?.status}
              >
                <Label>Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.status || "Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {tradeStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <div>
                <Label>Credit Currency</Label>
                <SelectDropDown filter={filter} setFilter={setFilter} />
              </div>
            </div>

            <div className="w-full">
              <div>
                <Label>Debit Currency</Label>
                <SelectDropDownDebit filter={filter} setFilter={setFilter} />
              </div>
            </div>

            {/* <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.sortType}
              >
                <Label>Sort By</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.sortType || "sortType"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {sortTypeTrade?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div> */}

            <div className="w-full">
              <div>
                <Label>Buy/Sell Coin Type</Label>
                <SelectDropDownBuySellCoin filter={filter} setFilter={setFilter} />
              </div>
            </div>

            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>



            <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40  sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({ search: "" });
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full  min-w-40  sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Tarde.csv"
                />
              </div>
            </div>
          </div>
        )



      }
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* /*********************************** Refferal user history ******************************** */}
      {
        type == "userRefferal" && (
          <div className="w-full flex flex-col sm:flex-row sm:max-w-full lg:max-w-[90%] xl:max-w-[60%] 2xl::max-w-[50%] space-x-3.5">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email, user Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Refferal.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** Deals Subscriptions *********************************/}
      {
        type === "dealsSubscriptions" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user Id, mobile no."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, dealStatus: value?.name }));
                  removeParamFn();
                }}
                value={filter?.dealStatus}
              >
                <Label>Deals Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.dealStatus || "Deals status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {dealsStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>



            <div className="w-full">
              <DatePicker
                id="from-date-picker1"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker1"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                }}
              />
            </div>


            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Deals Subscriptions.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** userAllFund *****************************************/}

      {
        type == "userAllFund" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.sortType}
              >
                <Label>Sort By</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.sortType || "sortType"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {sortType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="flex items-end w-full space-x-2">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                  removeParamFn();
                }}
              >
                Reset
              </Button>
              <div className="w-full flex items-end">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User All Funds.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {
        type == "userAllFund1" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.sortType}
              >
                <Label>Sort By (INR Value)</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.sortType || "sortType"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {OverAllsortType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, userTag: value?.name }));
                  removeParamFn();
                }}
                value={filter?.Tag}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.userTag || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="flex items-end w-full space-x-2">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                  removeParamFn();
                }}
              >
                Reset
              </Button>
              <div className="w-full flex items-end">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Over All Funds.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** Deals Subscriptions *********************************/}
      {
        type === "DropsSubscriptions" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user Id, mobile no."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, dealStatus: value?.name }));
                  removeParamFn();
                }}
                value={filter?.dealStatus}
              >
                <Label>Drops Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.dealStatus || "Drops status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {dealsStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>




            <div className="w-full">
              <DatePicker
                id="from-date-picker1"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker1"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Drops Subscriptions.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/*************************************************************** KYC ********************************************/}
      {
        type == "kyc" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-3">
            <div className="w-full">
              <Label>Search</Label>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email, mobile, user id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p) => ({ ...p, page: 1, kycStatus: value?.name }));
                  removeParamFn();
                }}
                value={filter?.kycStatus}
              >
                <Label>KYC Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.kycStatus || "KYC Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {kycStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  removeParamFn();
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                }}
              />
            </div>



            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  removeParamFn();
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                }}
              />
            </div>


            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    // setFilter({ ModuleType: "Verified", page: 1 });
                    // filterData?.setSearchParamsFn()
                    // filterData?.setSearchParamsFn2()
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="KYC.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** User Mainagement ************************************/}
      {
        type == "userManagement" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-x-3 gap-y-3">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, mob, user Id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, kycStatus: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.kycStatus}
                >
                  <Label>KYC Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.kycStatus || "KYC Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {Userkyc.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, filter: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>User Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "User Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserStatus?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, gender: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.gender}
                >
                  <Label>Gender</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.gender || "Gender"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {GenderType.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, StateType: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.StateType}
                >
                  <Label>State</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.StateType || "State"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg h-[400px] w-[250px]"
                  >
                    {filterData?.StateList?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, userType: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.userType}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.userType || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, userTag: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.Tag}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.userTag || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({ filter: "ACTIVE" });
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={downloadCSV?.length > 0 ? "noCall" : ""}
                    data={downloadCSV ?? []}
                    isSuccess={isLoading}
                    filename="Users List.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}

      {/* ******************************************************** delete user   ****************************************/}
      {
        type == "deleteUser" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-x-3 gap-y-3">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, Id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({ filter: "DELETE" });
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={downloadCSV?.length > 0 ? "noCall" : ""}
                    data={downloadCSV ?? []}
                    isSuccess={isLoading}
                    filename="Deleted Users List.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ******************************************************** add user fund   **************************************/}
      {
        type == "addFundUser" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-3">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">
                  Search by Symbol
                </p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.symbol ? filter?.symbol : ""}
                    type="text"
                    placeholder="Search by Symobl"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        symbol: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">
                  Search by Email
                </p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by email, user Id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      moduleType: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.userType}
                >
                  <Label>Module Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.moduleType || "Module Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {moduleType?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTags?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>



              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:max-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:max-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Add User To Fund.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment >
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ****************************************************** Activity list ******************************************/}

      {
        type == "activityList" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-3">
              {filterData?.Type !== "TrakingActiveUserActivity" && (
                <div className="w-full">
                  <p className="text-gray-700 dark:text-gray-400">
                    Search by Email
                  </p>
                  <div className="relative">
                    <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                      <Search />
                    </button>
                    <input
                      value={filter?.search ? filter?.search : ""}
                      type="text"
                      placeholder="Search by name, email"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      onChange={(e) => {
                        setFilter((p: any) => ({
                          ...p,
                          page: 1,
                          search: String(e.target.value),
                        }));
                        removeParamFn();
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      moduleType: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.moduleType}
                >
                  <Label>Module Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.moduleType || "Module Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg h-[430px]"
                  >
                    {filterData?.HistoryTypeData?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:max-w-[70%] flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({ ModuleType: "Admin" });
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                {/* <div className="w-full sm:min-w-40 flex items-end">
                <CSVDownloader
                  onClick={() => {}}
                  isCall={downloadCSV?.length > 0 ? "noCall" : ""}
                  data={downloadCSV ?? []}
                  isSuccess={isLoading}
                  filename="UsersList.csv"
                />
              </div> */}
              </div>
            </div>
          </Fragment>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ****************************************************** Tracing Ative USER Activity list ***********************/}
      {
        type == "activityList1" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-3">
              {filterData?.Type !== "TrakingActiveUserActivity" && (
                <div className="w-full">
                  <p className="text-gray-700 dark:text-gray-400">
                    Search by Email
                  </p>
                  <div className="relative">
                    <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                      <Search />
                    </button>
                    <input
                      value={filter?.search ? filter?.search : ""}
                      type="text"
                      placeholder="Search by name, email"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      onChange={(e) => {
                        setFilter((p: any) => ({
                          ...p,
                          page: 1,
                          search: String(e.target.value),
                        }));
                        removeParamFn();
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      moduleType: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.moduleType}
                >
                  <Label>Module Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.moduleType || "Module Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg h-[430px]"
                  >
                    {filterData?.HistoryTypeData?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end">
                  <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Tracking Active User Activity.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* /****************************************************** View Reward distribution **************************** */}
      {
        type == "ViewRewardDistribution" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-3 gap-y-3">
              {filterData?.Type !== "TrakingActiveUserActivity" && (
                <div className="w-full">
                  <p className="text-gray-700 dark:text-gray-400">Search</p>
                  <div className="relative">
                    <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                      <Search />
                    </button>
                    <input
                      value={filter?.search ? filter?.search : ""}
                      type="text"
                      placeholder="Search by name, email, mob, user id"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      onChange={(e) => {
                        setFilter((p: any) => ({
                          ...p,
                          page: 1,
                          search: String(e.target.value),
                        }));
                        removeParamFn();
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="w-full">
                <div>
                  <Label>Symbol</Label>
                  <SelectDropDown filter={filter} setFilter={setFilter} />
                </div>
              </div>
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, userTag: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.Tag}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.userTag || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>


              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end">
                  <CSVDownloader
                    onClick={() => { }}
                    isCSVloading={filterData?.isCSVloading}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Reward Distribution.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** View Deposit CashBack Reward distribution ******** */}
      {
        type == "ViewDepositCashbackRewardDistribution" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-3">
              {filterData?.Type !== "TrakingActiveUserActivity" && (
                <div className="w-full">
                  <p className="text-gray-700 dark:text-gray-400">Search</p>
                  <div className="relative">
                    <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                      <Search />
                    </button>
                    <input
                      value={filter?.search ? filter?.search : ""}
                      type="text"
                      placeholder="Search by name, email, mob, user id"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      onChange={(e) => {
                        setFilter((p: any) => ({
                          ...p,
                          page: 1,
                          search: String(e.target.value),
                        }));
                        removeParamFn();
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, userTag: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.Tag}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.userTag || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:max-w-[70%] flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end">
                  <CSVDownloader
                    onClick={() => { }}
                    isCSVloading={filterData?.isCSVloading}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Reward Distribution.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }




      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ****************************************************** subAdmin details ****************************************/}
      {
        type == "subAdminDetails" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-3">
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      moduleType: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.moduleType}
                >
                  <Label>Module Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.moduleType || "Module Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {filterData?.HistoryTypeData?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:max-w-[60%] flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                {/* <div className="w-full sm:min-w-40 flex items-end">
                <CSVDownloader
                  onClick={() => {}}
                  isCall={downloadCSV?.length > 0 ? "noCall" : ""}
                  data={downloadCSV ?? []}
                  isSuccess={isLoading}
                  filename="UsersList.csv"
                />
              </div> */}
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/***************************************************** Update User Email and Mobile *****************************/}
      {
        type == "updateUserMobile" && (
          <div className="w-full sm:max-w-[92%] md:max-w-[80%] lg:max-w-[76%] xl:max-w-[61%] 2xl:max-w-[46%] flex sm:flex-row flex-col space-y-3 sm:space-y-0 space-x-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by  mobile no., user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) =>
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="min-w-40 sm:w-20 flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************************** Upadet User Email *************************************/}
      {
        type == "updateUserEmail" && (
          <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[43%] flex sm:flex-row flex-col space-y-3 sm:space-y-0 space-x-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) =>
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="min-w-40 sm:w-20 flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************** Email Mobile Update History *************************************/}
      {
        type == "EmailMobileUpdateHistory" && (
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, mob, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      EmailMobileStatus: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.userType}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.EmailMobileStatus || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {EmailStatus?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>


              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:max-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:max-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Email Mobile Update.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* /************************************************ all plan details *******************************************/}
      {
        type == "allPlanDetails" && (
          <Fragment>
            <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, status: value?.name }));
                  }}
                  value={filter?.status}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.status || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {allUserPlanStatus.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              {/* <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p) => ({ ...p, isClamed: value?.name }));
                }}
                value={filter?.status}
              >
                <Label>Redeem Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isClamed || "Reedem Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {allUserPlanVouchersStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div> */}

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Nowory Subscriptions Plan.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/************************************************** all plan subscriptions **************************************/}
      {
        type == "allPlanSubscriptions" && (
          <Fragment>
            <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by symbol"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-full sm:max-w-[50%] flex">
                <div className="w-full flex items-end">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/************************************************** User plan subscriptions******* ******************************/}
      {
        type == "userPlanSubscriptions" && (
          <Fragment>
            <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, userId"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              {/* <div className="w-full sm:max-w-[50%] flex">
              <div className="w-full flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </div> */}


              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>


              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Nowory11 Subscriptions.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/************************************************** Nowory11 Invited User ***************************************/}
      {
        type == "Nowory11InvitedUser" && (
          <Fragment>
            <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, userId"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Nowory11 Invited User.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**************************************************View Nowory11 Invited User ***************************************/}
      {
        type == "ViewNowory11InvitedUser" && (
          <Fragment>
            <div className="w-ful flex justify-end">
              <div className="w-full sm:max-w-[35%] md:max-w-[30%] lg:max-w-[25%] xl:max-w-[20%] 2xl:max-w-[15%]">
                <div className="w-full">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Nowory11 Invited User.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**************************************************particularUserFundFreeze User ***************************************/}
      {
        type == "particularUserFundFreeze" && (
          <Fragment>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center space-y-3.5">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                <div className="w-full">
                  <div>
                    <Label>Symbol</Label>
                    <SelectDropDown filter={filter} setFilter={setFilter} />
                  </div>
                </div>

                <div className="w-full not-first:flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Fund Freeze.csv"
                  />
                </div>

              </div>
              <div className="border p-2 py-3 xl:-mb-6 rounded-lg w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] 2xl:max-w-[22%] flex justify-between items-center dark:text-white  border-gray-300  dark:border-gray-700">
                <span>Total Freeze Amount (INR):</span>
                <span>{(filterData?.TotalFreezeAmountINR)?.toFixed(2) || "--"}</span>
              </div>
            </div>

          </Fragment>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**************************************************ParticularUserFundLock User ***************************************/}
      {
        type == "ParticularUserFundLock" && (
          <Fragment>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
              <div className="w-full">

                <div>
                  <Label>Symbol</Label>
                  <SelectDropDown filter={filter} setFilter={setFilter} />
                </div>
              </div>

              <div className="w-full not-first:flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Fund Lock.csv"
                />
              </div>

            </div>

          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************* Balance log ********************************************************/}
      {
        type == "balanceLog" && (
          <Fragment>
            <div className="w-full grid-cols-1 sm:grid-cols-2  grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by email, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      removeParamFn();
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="">
                <Listbox
                  onChange={(value) => {
                    removeParamFn();
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      historyType: value?.name,
                    }));
                  }}
                  value={filter?.kycStatus}
                >
                  <Label>History Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.historyType || "History Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg h-[450px]"
                  >
                    {filterData?.historyTypeList?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="">
                <Listbox
                  onChange={(value) => {
                    removeParamFn();
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      status: value?.name,
                    }));
                  }}
                  value={filter?.status}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.status || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {BalaceLogStatus?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <div>
                  <Label>Coin</Label>
                  <SelectDropDown filter={filter} setFilter={setFilter} />
                </div>
              </div>
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full flex space-x-3">
                <div className="w-full flex items-end">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="flex items-end w-full min-w-[180px]">
                  {/* <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={isLoading}
                    filename="Balancelog.csv"
                  /> */}

                  <CSVDownloader
                    isDownloadCsv={filterData?.isDownloadCsv}
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={filterData?.isSuccess}
                    filename="Balancelog.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************* Balance log ********************************************************/}
      {
        type == "IndividualbalanceLogs" && (
          <Fragment>
            <div className="w-full grid-cols-1 sm:grid-cols-2  grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              <div className="">
                <Listbox
                  onChange={(value) => {
                    removeParamFn();
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      historyType: value?.name,
                    }));
                  }}
                  value={filter?.kycStatus}
                >
                  <Label>History Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.historyType || "History Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg h-[450px]"
                  >
                    {filterData?.historyTypeList?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <div>
                  <Label>Coin</Label>
                  <SelectDropDown filter={filter} setFilter={setFilter} />
                </div>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full flex space-x-3">
                <div className="w-full flex items-end">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="flex items-end w-full min-w-[150px]">
                  <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={isLoading}
                    filename="User Balancelog.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************************* Tds management *****************************************/}
      {
        type == "tdsmanagement" && (
          <Fragment>
            <div className="w-full grid-cols-1 sm:grid-cols-2  grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by user id, email"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) =>
                      setFilter((p: any) => ({
                        ...p,
                        search: String(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, sortType: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.sortType}
                >
                  <Label>Sort By</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.sortType || "sortType"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {sortTypeAllUserTDS?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full flex items-end">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="flex items-end w-full min-w-[150px]">
                  <CSVDownloader
                    isDownloadCsv={filterData?.isDownloadCsv}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isSuccess={filterData?.isSuccess}
                    isCSVloading={filterData?.isCSVloading}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    filename="All Users TDS.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/**************************************************** view management ******************************************/}
      {
        type === "viewtdsmanagement" && (
          <Fragment>
            <div className="w-full grid-cols-1 sm:grid-cols-2  grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, orderType: value?.name }))
                    filterData?.setIsDownloadCsv(false)
                  }

                  }
                  value={filter?.orderType}
                >
                  <Label>Trade Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.orderType || "Order Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {orderType?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>




              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (
                      filter.toDate &&
                      parseDate(dateStr) > parseDate(filter.toDate)
                    ) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (
                      filter.fromDate &&
                      parseDate(dateStr) < parseDate(filter.fromDate)
                    ) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>


              <div className="w-full flex flex-col space-y-3 sm:space-y-0 sm:flex-row space-x-3">
                <div className="w-full flex  items-end">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                      filterData?.setIsDownloadCsv(false)
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="flex items-end w-full min-w-[150px]">
                  <CSVDownloader
                    isDownloadCsv={filterData?.isDownloadCsv}
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={filterData?.isSuccess}
                    filename="TDS Data.csv"
                  />
                </div>
              </div>
            </div>
          </Fragment >
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** Withdarw Crypto list ********************************/}
      {
        type == "withdrawCrypto" && (
          <div className="w-full xl:w-[100%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid 2xl:grid-cols-5 gap-x-3.5 gap-y-3.5 space-x-3 space-y-3 sm:space-y-0">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user Id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      filter: value?.name,
                    }));
                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {status.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>



              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>



              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    isDownloadCsv={filterData?.isDownloadCsv}
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isCall={
                      filterData?.WithCryptoInrCSVData?.length > 0 ? "noCall" : ""
                    }
                    data={filterData?.WithCryptoInrCSVData ?? []}
                    isSuccess={filterData?.isSuccess}
                    filename="Crypto Or INR Withdraw.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** INR Deposite list ***********************************/}
      {
        type == "depositInr" && (
          <div className="w-ful 2xl:w-[100%] grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      filter:
                        value?.name === "Rejected"
                          ? "Rejected"
                          : value?.name === "Verified"
                            ? "Verified"
                            : value?.name === "Pending"
                              ? "Pending"
                              : "",
                    }));

                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border z-9 border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {DepositInr.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center z-50 justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    isDownloadCsv={filterData?.isDownloadCsv}
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { filterData?.setIsDownloadCsv(true) }}
                    isCall={filterData?.depositInrCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.depositInrCSV ?? []}
                    isSuccess={filterData?.isSuccess}

                    filename="Deposit INR List.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }


      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** UsersReward list ***********************************/}
      {
        type == "UsersReward" && (
          <div className="w-ful 2xl:w-[90%] grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              {/* <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p) => ({
                      ...p,
                      page: 1,
                      filter:
                        value?.name === "Rejected"
                          ? "Rejected"
                          : value?.name === "Verified"
                            ? "Verified"
                            : value?.name === "Pending"
                              ? "Pending"
                              : "",
                    }));

                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border z-9 border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {DepositInr?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center z-50 justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div> */}

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                {/* <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.depositInrCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.depositInrCSV ?? []}
                    isSuccess={false}
                    filename="Users Reward.csv"
                  />
                </div> */}
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** INR Deposite list ***********************************/}
      {
        type == "Depositnowory11" && (
          <div className="w-ful 2xl:w-[100%] grid 2xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      filter:
                        value?.name === "Rejected"
                          ? "Rejected"
                          : value?.name === "Verified"
                            ? "Verified"
                            : value?.name === "Pending"
                              ? "Pending"
                              : "",
                    }));

                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Status</Label>
                  <ListboxButton className="rounded-lg border z-9 border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {DepositInr.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center z-50 justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTags?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              {/* <div className="flex items-end">
              <div>
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div>
                <CSVDownloader
                  onClick={() => { }}
                  isCall={downloadCSV?.length > 0 ? "noCall" : ""}
                  data={downloadCSV ?? []}
                  isSuccess={isLoading}
                  filename="ticketDetails.csv"
                />

              </div>
            </div> */}

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={filterData?.depositInrCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.depositInrCSV ?? []}
                    isSuccess={false}
                    filename="Deposit Nowory11.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** INR Deposite list ***********************************/}
      {
        type == "turbosubscriptionsuser" && (
          <div className="w-ful 2xl:w-[90%] grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user ID"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="min-w-40 sm:w-20 flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/************************************************* Ticket List **************************************************/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-x-4 gap-y-2">
        {type == "ticket" && (
          <Fragment>
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by Name, User Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">
                Search by Ticket no.
              </p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.ticketId ? filter?.ticketId : ""}
                  type="text"
                  placeholder="Search by ticket no."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      ticketId: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({
                    ...p,
                    page: 1,
                    categoryType: value?.name,
                  }));
                  removeParamFn();
                }}
                value={filter?.categoryType}
              >
                <Label>Subject</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.categoryType || "Subject"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {filterData?.Subject?.map((type: any) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({
                    ...p,
                    page: 1,
                    filterBy:
                      value?.name === "Pending"
                        ? "pending"
                        : value?.name === "Resolved"
                          ? "resolved"
                          : value?.name === "In-Process"
                            ? "in-process"
                            : "",
                  }))
                  filterData?.setIsDownloadCsv(false);
                }

                }
                value={filter?.filterBy}
              >
                <Label>Query Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.filterBy || "Query Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {QueryStatus.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-1 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, userType: value?.name }));
                  filterData?.setIsDownloadCsv(false);
                  removeParamFn();
                }}
                value={filter?.userType}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.userType || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, userTag: value?.name }));
                  filterData?.setIsDownloadCsv(false);
                  removeParamFn();
                }}
                value={filter?.userTag}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.userTag || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isGuestUser: value?.name }));
                  filterData?.setIsDownloadCsv(false);
                  removeParamFn();
                }}
                value={filter?.isGuestUser}
              >
                <Label>Guest User</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isGuestUser || "Guest User"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {GestUser?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, languageType: value?.name }));
                  filterData?.setIsDownloadCsv(false);
                }}
                value={filter?.languageType}
              >
                <Label>Language Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.languageType || "Language Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {languageTypes?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }

                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="min-w-40 gap-4 flex items-end">
              <Button
                className="w-[60%] py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({ languageType: "English" });
                  removeParamFn();
                  filterData?.setIsDownloadCsv(false);
                }}
              >
                Reset
              </Button>

              <CSVDownloader
                isDownloadCsv={filterData?.isDownloadCsv}
                isCSVloading={filterData?.isCSVloading}
                onClick={() => { filterData?.setIsDownloadCsv(true) }}
                isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                data={filterData?.downloadCSV ?? []}
                isSuccess={filterData?.isSuccess}
                filename="Ticket Details.csv"
              />
            </div>
          </Fragment>
        )}
      </div >

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ******************************************** User Bank Account ********************************************* */}
      {
        type == "userBankAccount" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            <div className="w-full">
              <Label>Search</Label>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email, user id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    })),
                      removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, filter: value?.name }));
                  removeParamFn();
                }}
                value={filter?.filter}
              >
                <Label>Bank Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.filter || "Bank Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg z-20"
                >
                  {UserBankStatus?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-1 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  removeParamFn();
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  removeParamFn();
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>

            {/* <div className="w-full sm:max-w-[60%] flex items-end">
            <Button
              className="w-full md:w-[90%] py-3"
              onClick={() => {
                setDatePickerKey((p) => p + 1);
                setFilter({});
                removeParamFn();
              }}
            >
              Reset
            </Button>
          </div> */}
            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:max-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:max-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="User Bank.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ******************************************** TokenList ******************************************************/}
      {
        type === "tokenList" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-4">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.symbol ? filter?.symbol : ""}
                  type="text"
                  placeholder="Search by Symbol"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({ ...p, symbol: String(e.target.value) }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) =>
                  setFilter((p: any) => ({ ...p, TokenType: value?.name }))
                }
                value={filter?.TokenType}
              >
                <Label>Token Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.TokenType || "Token Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {TokenType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full lg:min-w-56 xl:min-w-52  2xl:max-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full lg:min-w-56 xl:min-w-52  2xl:max-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Token List.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ******************************************** Cripto Deposit **************************************************/}
      {
        type == "CryptoDeposit" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-4">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, user Id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">
                  Search By Symbol
                </p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.symbol || ""}
                    type="text"
                    placeholder="Search by symbol"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        symbol: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, filter: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Crypto Deposit Status</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "Crypto Deposit Status"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg z-20"
                  >
                    {CryptoDepositStatus.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-1 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>


              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>


              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (
                      filter.toDate &&
                      parseDate(dateStr) > parseDate(filter.toDate)
                    ) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (
                      filter.fromDate &&
                      parseDate(dateStr) < parseDate(filter.fromDate)
                    ) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-0">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    onClick={() => { }}
                    isCall={
                      filterData?.DepositCryptoCSVData?.length > 0 ? "noCall" : ""
                    }
                    data={filterData?.DepositCryptoCSVData ?? []}
                    isSuccess={false}
                    filename="Deposit Crypto List.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* ******************************************** AccountActivity *************************************************/}
      {
        type === "AccountActivity" && (
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row space-x-3 w-full md:w-[90%] lg:w-[80%] xl:w-[60%]">
            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && dateStr > filter.toDate) {
                    setFilter((p: any) => ({
                      ...p,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, fromDate: dateStr }));
                  }
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && dateStr < filter.fromDate) {
                    setFilter((p: any) => ({
                      ...p,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, toDate: dateStr }));
                  }
                }}
              />
            </div>
            <div className="w-full flex items-end">
              <Button
                className="w-full py-3 md:w-[50%]"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/*********************************************** Mining Histroy *************************************************/}
      {
        type === "mningHistory" && (
          <div className="w-full gap-x-2.5 grid grid-cols-1 sm:grid-cols-2 gap-y-3  md:grid-cols-3 lg:grid-cols-5">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({ page: 1, ModuleType: "Activity Points" });
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={isLoading}
                  filename="Activity & Holding Points.csv"
                />
              </div>
            </div>

          </div>
        )
      }




      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/*********************************************** Mining Histroy *************************************************/}
      {
        type === "HelpAndSupport" && (
          <div className="w-full gap-x-2.5 grid grid-cols-1 sm:grid-cols-2 gap-y-3  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
            {/* <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div> */}

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, languageType: value?.name }));
                }}
                value={filter?.languageType}
              >
                <Label>Language Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.languageType || "Language Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {languageTypes?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({ languageType: "English" });
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>

          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/*********************************************** Mining Histroy Details *****************************************/}
      {
        type === "mningHistoryDetails" && (
          <div className="w-full flex justify-end">
            <div className="w-full sm:max-w-[40%] md:max-w-[30%] lg:max-w-[20%] 2xl:max-w-[10%]">
              <CSVDownloader
                isCSVloading={filterData?.isCSVloading}
                onClick={() => { }}
                isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                data={filterData?.downloadCSV ?? []}
                isSuccess={isLoading}
                filename="Activity & Holding Points Details.csv"
              />
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/****************************************************** Wallet Address ******************************************/}
      {
        type === "walletAddress" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-2">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email, mob. user Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, filter: value?.name }));
                  removeParamFn();
                }}
                value={filter?.filter}
              >
                <Label>Wallet Status</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.filter || "Wallet Status"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg z-20"
                >
                  {WalleteStatus?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-1 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isTestUser}
              >
                <Label>User Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isTestUser || "User Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserType2?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>
            {/* <div className="w-full flex items-end">
            <Button
              className="w-full py-3 md:w-[50%]"
              onClick={() => {
                setDatePickerKey((p) => p + 1);
                setFilter({});
                removeParamFn();
              }}
            >
              Reset
            </Button>
          </div> */}

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Wallet Address.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************* Cashflow(Limit setting) ********************************************/}
      {
        type == "limitSetting" && (
          <Fragment>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0.5 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[40%] xl:max-w-[30%] sm:space-x-4">
              <div className="w-full">
                <Listbox
                  onChange={(value) =>
                    setFilter((p: any) => ({ ...p, walletType: value?.name }))
                  }
                  value={filter?.walletType}
                >
                  <Label>Coin Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.walletType || "Coin Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {walletType?.map((type: any) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="min-w-40 flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Fragment>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/******************************************* CreateCuopnRewardforUser ********************************************/}
      {
        type === "CreateCuopnRewardforUser" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-2">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({ ...p, search: String(e.target.value) }))
                  }
                />
              </div>
            </div>

            <div className="w-full flex items-end">
              <Button
                className="w-full py-3 md:w-[50%]"
                onClick={() => {
                  setFilter({});
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************* User feedback*****************************************************/}
      {
        type === "userFeeback" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-2">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by name, email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <DatePicker
                id="from-date-picker"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter.fromDate}
                maxDate={filter.toDate ? filter.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter.toDate}
                minDate={filter.fromDate ? filter.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-30 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-30 flex items-end justify-start">
                <CSVDownloader
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Feedback.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************* SupportContactUs*****************************************************/}
      {
        type === "SupportContactUs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-3 gap-y-2">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search By Email</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.email ? filter?.email : ""}
                  type="text"
                  placeholder="Search by email"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      email: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">
                Search By Mobile No.
              </p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.mobileNumber ? filter?.mobileNumber : ""}
                  type="text"
                  placeholder="Search by mob"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) =>
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      mobileNumber: String(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, reasonType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.filter}
              >
                <Label>Reason Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.reasonType || "Reason Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg z-20"
                >
                  {ReasonType.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-1 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full min-w-40 flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Support Contact Us.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************* Buy Sell Change***************************************************/}
      {
        type == "BuySellChange" && (
          <div className="w-full flex flex-col sm:flex-row items-center sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%] space-x-4">
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, orderType: value?.name }));
                  removeParamFn();
                }}
                value={filter?.orderType}
              >
                <Label>Order Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.orderType || "Order Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {orderType?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full sm:max-w-[30%] flex items-end min-h-[70px]">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                  removeParamFn();
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************* Hotwallet*********************************************************/}
      {
        type == "Hotwallet" && (
          <div className="w-full flex  flex-col sm:flex-row items-center sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%] space-x-4 justify-center">
            {/* <div className="w-full">
            <Listbox
              onChange={(value) =>
                setFilter((p) => ({ ...p, page: 1, ModuleType: value?.name }))
              }
              value={filter?.ModuleType}
            >
              <Label>Module Type</Label>
              <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                <p>{filter?.ModuleType || "Module Type"}</p>
                <ChevronDown />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom start"
                className="bg-blue-400 rounded-lg"
              >
                {ModuleType?.map((type) => (
                  <ListboxOption
                    key={type.id}
                    value={type}
                    className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                  >
                    {type.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div> */}

            <div className="w-full flex  flex-col justify-center items-center  ">
              {/* <Label>Module Type</Label> */}
              <div className="w-full flex flex-col md:flex-row gap-4 ">
                {ModuleType?.map((item, idx) => {
                  return (
                    <div key={idx + 1}>
                      <TabButton
                        setFilter={setFilter}
                        filter={filter}
                        item={item}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="w-full sm:max-w-[30%] flex items-end min-h-[70px]">
            <Button
              className="w-full py-3"
              onClick={() => {
                setDatePickerKey((p) => p + 1);
                setFilter({ ModuleType: "Withdraw" });
              }}
            >
              Reset
            </Button>
          </div> */}
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************** Tracking Active User *************************************/}
      {
        type == "trackingactiveUser" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by name, email, mob, user id"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, filter: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Time Period</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.filter || "24 hours"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {TimePeriod.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>


              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                    removeParamFn();
                  }}
                />
              </div>

              <div className="w-full flex flex-col space-y-3 sm:space-y-0 sm:flex-row space-x-3">
                <div className="w-full flex  items-end min-w-40">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="flex items-end w-full min-w-40">
                  <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Tracking Active User.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************** Trade Activity **************************************************/}
      {
        type == "TradeActivity" && (
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            <Fragment>
              <div className="w-full">
                <div>
                  <Label>Coin</Label>
                  <SelectDropDown filter={filter} setFilter={setFilter} />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isTestUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isTestUser}
                >
                  <Label>User Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isTestUser || "User Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserType2?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>


              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full sm:min-w-40 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full sm:min-w-40 flex items-end justify-start">
                  <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Trade Activity.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************** Trade Activity Details **************************************************/}
      {
        type == "TradeDetailActivity" && (
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            <Fragment>
              <div className="w-full">
                <p className="text-gray-700 dark:text-gray-400">Search</p>
                <div className="relative">
                  <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                    <Search />
                  </button>
                  <input
                    value={filter?.search ? filter?.search : ""}
                    type="text"
                    placeholder="Search by email"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    onChange={(e) => {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        search: String(e.target.value),
                      }));
                      removeParamFn();
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, orderType: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.filter}
                >
                  <Label>Order Type</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.orderType || "Order Type"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {TradeOrderType.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <Listbox
                  onChange={(value) => {
                    setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                    removeParamFn();
                  }}
                  value={filter?.isNewUser}
                >
                  <Label>User Tag</Label>
                  <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                    <p>{filter?.isNewUser || "User Tag"}</p>
                    <ChevronDown />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom start"
                    className="bg-blue-400 rounded-lg"
                  >
                    {UserTag?.map((type) => (
                      <ListboxOption
                        key={type.id}
                        value={type}
                        className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                      >
                        {type.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>

              <div className="w-full">
                <DatePicker
                  id="from-date-picker"
                  label="From Date"
                  placeholder="DD/MM/YYYY"
                  key={`from-${datePickerKey}`}
                  defaultDate={filter.fromDate}
                  maxDate={filter.toDate ? filter.toDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        fromDate: dateStr,
                        toDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <DatePicker
                  id="to-date-picker"
                  label="To Date"
                  placeholder="DD/MM/YYYY"
                  key={`to-${datePickerKey}`}
                  defaultDate={filter.toDate}
                  minDate={filter.fromDate ? filter.fromDate : undefined}
                  onChange={(_, dateStr) => {
                    removeParamFn();
                    if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                      setFilter((p: any) => ({
                        ...p,
                        page: 1,
                        toDate: dateStr,
                        fromDate: undefined,
                      }));
                    } else {
                      setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                    }
                  }}
                />
              </div>

              {/* <div className="min-w-40 sm:w-20 flex items-end">
              <Button
                className="w-full py-3"
                onClick={() => {
                  setDatePickerKey((p) => p + 1);
                  setFilter({});
                  removeParamFn();
                }}
              >
                Reset
              </Button>
            </div> */}

              <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
                <div className="w-full min-w-30 flex items-end mt-4">
                  <Button
                    className="w-full py-3"
                    onClick={() => {
                      setDatePickerKey((p) => p + 1);
                      setFilter({});
                      removeParamFn();
                    }}
                  >
                    Reset
                  </Button>
                </div>

                <div className="w-full min-w-35 flex items-end justify-start">
                  <CSVDownloader
                    isCSVloading={filterData?.isCSVloading}
                    onClick={() => { }}
                    isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                    data={filterData?.downloadCSV ?? []}
                    isSuccess={false}
                    filename="Trade Activity Details.csv"
                  />
                </div>
              </div>
            </Fragment>
          </div>
        )
      }



    

      {/****************************************************************************************************************/}
      {/******************************************* Balance log ********************************************************/}
   

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** User FundLock List *********************************/}
      {
        type === "userFundLockList" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, type: value?.name }));
                  removeParamFn();
                }}
                value={filter?.type}
              >
                <Label>Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.type || "Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {OFLock?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTag?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className="data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <div className="w-full">
              <DatePicker
                id="from-date-picker1"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter?.fromDate}
                maxDate={filter?.toDate ? filter?.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker1"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter?.toDate}
                minDate={filter?.fromDate ? filter?.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Overall Users Withdrawal Freeze.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** User FundLock List *********************************/}
      {
        type === "assetFundLockList" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search By Freeze Id</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.freezeId ? filter?.freezeId : ""}
                  type="text"
                  placeholder="Search by freeze Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      freezeId: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>


            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, type: value?.name }));
                  removeParamFn();
                }}
                value={filter?.type}
              >
                <Label>Freeze Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.type || "Freeze Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {LockFreeze.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <div>
                <Label>Symbol</Label>
                <SelectDropDown filter={filter} setFilter={setFilter} />
              </div>
            </div>


            <div className="w-full">
              <DatePicker
                id="from-date-picker1"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter?.fromDate}
                maxDate={filter?.toDate ? filter?.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker1"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter?.toDate}
                minDate={filter?.fromDate ? filter?.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();

                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Asset Wise Users Fund Freeze.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** User FundLock List *********************************/}
      {
        type === "assetFundLockList1" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>


            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search By Lock Id</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.lockId ? filter?.lockId : ""}
                  type="text"
                  placeholder="Search by Lock Id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      lockId: String(e.target.value),
                    }));
                    removeParamFn();
                  }}
                />
              </div>
            </div>

            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, isNewUser: value?.name }));
                  removeParamFn();
                }}
                value={filter?.isNewUser}
              >
                <Label>User Tag</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.isNewUser || "User Tag"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {UserTags?.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>


            <div className="w-full">
              <div>
                <Label>Symbol</Label>
                <SelectDropDown filter={filter} setFilter={setFilter} />
              </div>
            </div>



            <div className="w-full">
              <DatePicker
                id="from-date-picker1"
                label="From Date"
                placeholder="DD/MM/YYYY"
                key={`from-${datePickerKey}`}
                defaultDate={filter?.fromDate}
                maxDate={filter?.toDate ? filter?.toDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.toDate && parseDate(dateStr) > parseDate(filter.toDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      fromDate: dateStr,
                      toDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, fromDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>

            <div className="w-full">
              <DatePicker
                id="to-date-picker1"
                label="To Date"
                placeholder="DD/MM/YYYY"
                key={`to-${datePickerKey}`}
                defaultDate={filter?.toDate}
                minDate={filter?.fromDate ? filter?.fromDate : undefined}
                onChange={(_, dateStr) => {
                  if (filter.fromDate && parseDate(dateStr) < parseDate(filter.fromDate)) {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      toDate: dateStr,
                      fromDate: undefined,
                    }));
                  } else {
                    setFilter((p: any) => ({ ...p, page: 1, toDate: dateStr }));
                  }
                  removeParamFn();
                }}
              />
            </div>
            <div className="w-full">
              <Listbox
                onChange={(value) => {
                  setFilter((p: any) => ({ ...p, page: 1, type: value?.name }));
                  removeParamFn();
                }}
                value={filter?.type}
              >
                <Label>Lock Type</Label>
                <ListboxButton className="rounded-lg border border-gray-200 dark:border-gray-800 text-sm flex items-center justify-between w-full px-2 py-2.5 text-gray-400 dark:text-white/30">
                  <p>{filter?.type || "Lock Type"}</p>
                  <ChevronDown />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom start"
                  className="bg-blue-400 rounded-lg"
                >
                  {LockFreeze.map((type) => (
                    <ListboxOption
                      key={type.id}
                      value={type}
                      className=" data-[focus]:bg-blue-100 cursor-pointer flex items-center justify-between w-full px-2 py-2.5 dark:bg-black bg-white text-gray-400 dark:text-white/30 min-w-32"
                    >
                      {type.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>

            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full flex items-end mt-4">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={false}
                  filename="Asset Wise Users Fund Lock.csv"
                />
              </div>
            </div>
          </div>
        )
      }

      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/********************************************************** User FundLock List *********************************/}
      {
        type === "diwaliLeaderboard" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-3">
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-400">Search</p>
              <div className="relative">
                <button className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-500 dark:text-gray-400">
                  <Search />
                </button>
                <input
                  value={filter?.search ? filter?.search : ""}
                  type="text"
                  placeholder="Search by email, user id"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  onChange={(e) => {
                    setFilter((p: any) => ({
                      ...p,
                      page: 1,
                      search: String(e.target.value),
                    }));
                    removeParamFn();
                    filterData?.setIsDownloadCsv(false)
                  }}
                />
              </div>
            </div>
            <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full sm:min-w-40 flex items-end mt-0">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                    filterData?.setIsDownloadCsv(false)
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="w-full sm:min-w-40 flex items-end justify-start">
                <CSVDownloader
                  isDownloadCsv={filterData?.isDownloadCsv}
                  isCSVloading={filterData?.isCSVloading}
                  onClick={() => { filterData?.setIsDownloadCsv(true) }}
                  isCall={filterData?.downloadCSV?.length > 0 ? "noCall" : ""}
                  data={filterData?.downloadCSV ?? []}
                  isSuccess={filterData?.isSuccess}
                  filename="Trade Volume Booster.csv"
                />
              </div>
            </div>

            {/* <div className=" w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-3">
              <div className="w-full   md:max-w-[80%] xl:max-w-[60%] flex items-end">
                <Button
                  className="w-full py-3"
                  onClick={() => {
                    setDatePickerKey((p) => p + 1);
                    setFilter({});
                    removeParamFn();
                  }}
                >
                  Reset
                </Button>
              </div>
            </div> */}
          </div>
        )
      }
      {/****************************************************************************************************************/}
      {/****************************************************************************************************************/}
      {/* /****************************** Dont remove the below code otherwise all the fitler effected*******************/}
      {/* <div className="w-full my-4 p-2 grid grid-cols-8 2xl:grid-cols-12 gap-4"></div> */}
      <div className="w-full mb-4 p-0 grid grid-cols-8 2xl:grid-cols-12 gap-4"></div>
    </>
  );
};

export default memo(TableFilter);
