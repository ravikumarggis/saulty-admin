import { useMemo, useState } from "react";
import { IndianRupee, Percent } from "lucide-react";
import { useGetFeeStructure, useUpdateFeeStructure } from "../../queries/fee";
import Button from "../../components/ui/button/Button";
import BackComponent from "../../components/backcomponent/BackComponent";
import LoadingScreen from "../../components/common/LoadingScreen";

const FeeStructure = () => {
  const { data, isLoading } = useGetFeeStructure();
  const { mutate: updateFee, isPending } = useUpdateFeeStructure();

  const [fees, setFees] = useState({
    withdrawFee: 0,
    adminCommission: 0,
  
  });

  /* ==========================
     SET DATA FROM BACKEND
  ========================== */

  useMemo(() => {
    if (data) {
      setFees({
        withdrawFee: data?.withdrawFee || 0,
        adminCommission: data?.adminCommission || 0,
     
      });
    }
  }, [data]);

  /* ==========================
     HANDLE INPUT CHANGE
  ========================== */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFees({
      ...fees,
      [e.target.name]: Number(e.target.value),
    });
  };

  /* ==========================
     HANDLE UPDATE
  ========================== */

  const handleSubmit = () => {
    updateFee(fees);
  };

  if (isLoading || isPending) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full justify-center ">
      <BackComponent text=" Fee Structure Management" />

      <div className="mt-4 justify-center items-center  rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700 ">
        {isLoading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading fees...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Registration Fee */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Withdraw Fee
                </label>
                <div className="relative">
                  <Percent
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                  <input
                    type="number"
                    name="withdrawFee"
                    value={fees.withdrawFee}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border 
                               border-gray-300 dark:border-gray-600
                               bg-white dark:bg-gray-700 
                               focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                  />
                </div>
              </div>

              {/* Task Commission Fee */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Call & Message Commission Fee
                </label>
                <div className="relative">
                  <Percent
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                  <input
                    type="number"
                    name="adminCommission"
                    value={fees?.adminCommission}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border 
                               border-gray-300 dark:border-gray-600
                               bg-white dark:bg-gray-700 
                               focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white"
                  />
                </div>
              </div>

              {/* Cancellation Fee */}
             
            </div>

            {/* Update Button */}
            <div className="mt-8 flex justify-end">
              <Button
                className=" py-3"
                onClick={handleSubmit}
                disabled={isPending}
              >
                {isPending ? "Updating..." : "Update Fees"}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeeStructure;
