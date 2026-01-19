import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Button from "../../components/ui/button/Button";
import LoadingScreen from "../../components/common/LoadingScreen";
import BackComponent from "../../components/backcomponent/BackComponent";
import {
  useApprovedRejectedInrWithdraw,
  useApproveRejectCrptoWithdraw,
  useViewWithdrawInrCrptoDetails,
} from "../../queries/withdrawal-management";
import {
  DateTimeFormates,
  DetailRow,
  newSortAddress,
  statusColor,
  statusText,
} from "../../utils";
import CopyButton from "../../components/common/CopyButton";
import DynamicConfirmModal from "../../components/modal/DynamicConfirmModal";

const WithDrawCryptoView: React.FC = () => {
  const location = useLocation();

  const { withdrawDetail } = location.state || {};

  console.log(withdrawDetail, "withdrawDetailwithdrawDetail");

  const {
    mutate: ApproveRejectCryptoWithdrawal,
    isPending: AprovedRejectedCryptoPending,
    isSuccess: AprovedRejectedCryptoSuccess,
  } = useApproveRejectCrptoWithdraw();

  const {
    mutate: ApproveRejectInrWithdrawal,
    isPending: AprovedRejectedInrPending,
    isSuccess: AprovedRejectedInrSuccess,
  } = useApprovedRejectedInrWithdraw();

  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showDeleteIcon] = useState(false);
  const [TextMessage, setIsTextMessage] = useState<string>("");
  const [VerifyOrRejected, setIsVerifyOrRejected] = useState<string>("");
  const [showTextArea, setIsShowTextArea] = useState<boolean>(false);

  useEffect(() => {
    if (AprovedRejectedInrSuccess || AprovedRejectedCryptoSuccess) {
      refetch();
      setShowConfirmModal(false);
    }
  }, [AprovedRejectedInrSuccess, AprovedRejectedCryptoSuccess]);

  return (
    <>
      <BackComponent text={`Withdraw Details`} />

      <div className="dark:text-white w-full flex flex-col xl:px-40 xl:flex-col justify-evenly mt-[5%]">
        <div className="dark:text-white mb-8 border p-5 rounded-[8px]  border-gray-300 dark:border-gray-700 ">
          <div className="space-y-3">
            <DetailRow
              label="Amount"
              value={` ₹${withdrawDetail?.amount}` || "--"}
            />
            <DetailRow
              label="Name"
              value={withdrawDetail?.user?.name || "--"}
            />
            <DetailRow
              label="Email"
              value={withdrawDetail?.user?.email || "--"}
            />

            <div className="flex justify-start items-center -mr-2">
              <DetailRow
                label="User Id"
                value={withdrawDetail?.user?._id || "--"}
              />
              <CopyButton textToCopy={withdrawDetail?.user?._id} />
            </div>

            <DetailRow
              label="Date & Time"
              value={
                DateTimeFormates(withdrawDetail?.createdAt)

                // moment(withdrawDetail?.createdAt)?.format("llll")
              }
            />
            {/* {(statusText(withdrawDetail?.withdrawStatus) === "Rejected" ||
              statusText(withdrawDetail?.withdrawStatus) === "Verified") && (
              <DetailRow
                label="Updated Date & Time"
                value={
                  DateTimeFormates(withdrawDetail?.updatedAt)

                  // moment(withdrawDetail?.createdAt)?.format("llll")
                }
              />
            )} */}

            <div className="flex justify-start items-center -mr-2">
              <DetailRow
                label="Withdraw Id"
                value={withdrawDetail?._id || "--"}
              />
              <CopyButton textToCopy={withdrawDetail?._id} />
            </div>

            <DetailRow
              label="A/C Number"
              value={withdrawDetail?.bank?.accountNumber || "--"}
            />
            <DetailRow
              label="Bank Name"
              value={withdrawDetail?.bank?.bankName || "--"}
            />
            <DetailRow
              label="IFSC Code"
              value={withdrawDetail?.bank?.ifscCode || "--"}
            />
            <DetailRow
              label="Holder Name"
              value={withdrawDetail?.bank?.holderName || "--"}
            />

            <DetailRow
              color={statusColor(withdrawDetail?.withdrawStatus)}
              label="Status"
              value={statusText(withdrawDetail?.withdrawStatus)}
            />

            {withdrawDetail?.message && (
              <DetailRow
                color={statusColor(withdrawDetail?.withdrawStatus)}
                label="Reason"
                value={withdrawDetail?.message || "--"}
              />
            )}
          </div>
        </div>
      </div>

      {(AprovedRejectedCryptoPending || AprovedRejectedInrPending) && (
        <LoadingScreen />
      )}
    </>
  );
};

export default WithDrawCryptoView;
