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
  const { type } = location.state || {};
  const { id } = useParams();

  const [verifyWithdrawInrAutoManual, setverifyWithdrawInrAutoManual] =
    useState("");
  const {
    data: viewCryptoDetails,
    isLoading,
    refetch,
  } = useViewWithdrawInrCrptoDetails(id);
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
      <BackComponent
        text={`Withdraw ${type == "Crypto" ? "Crypto" : "INR"} Details`}
      />
      {viewCryptoDetails && (
        <div className="dark:text-white w-full flex flex-col xl:px-40 xl:flex-col justify-evenly mt-[5%]">
          {type == "Fiat" && (
            <>
              <div className=" border p-5 rounded-[8px]  border-gray-300 dark:border-gray-700 mb-3">
                <h2 className="text-xl font-semibold text-center">
                  Bank Details
                </h2>
                <div className="space-y-2">
                  <DetailRow
                    label="Name"
                    value={viewCryptoDetails?.bankResult?.beneName || "--"}
                  />
                  <DetailRow
                    label="Bank Name"
                    value={viewCryptoDetails?.bankResult?.bankName || "--"}
                  />
                  <DetailRow
                    label="Account Number"
                    value={viewCryptoDetails?.bankResult?.accountNumber || "--"}
                  />

                  <DetailRow
                    label="IFSC Code"
                    value={viewCryptoDetails?.bankResult?.ifscCode || "---"}
                  />

                  <DetailRow
                    label="Status"
                    color={statusColor(viewCryptoDetails?.bank?.bankStatus)}
                    value={
                      statusText(viewCryptoDetails?.bank?.bankStatus) || "---"
                    }
                  />

                  {/* <DetailRow
                label="Active/Deleted Bank"
                color={statusColor(viewCryptoDetails?.bank?.status)}
                value={statusText(viewCryptoDetails?.bank?.status) || "---"}
              /> */}
                </div>
              </div>
            </>
          )}
          <div className="dark:text-white mb-8 border p-5 rounded-[8px]  border-gray-300 dark:border-gray-700 ">
            <h2 className="dark:text-white text-xl font-bold text-gray-800 mb-4">
              {`Withdraw ${type == "Crypto" ? "Crypto" : "INR"} Details`}
            </h2>
            <div className="space-y-3">
              <DetailRow
                label="Name"
                value={viewCryptoDetails?.user?.name || "--"}
              />
              <DetailRow
                label="Email"
                value={viewCryptoDetails?.user?.email || "--"}
              />

              <div className="flex justify-start items-center -mr-2">
                <DetailRow
                  label="User Id"
                  value={viewCryptoDetails?.user?.user_id || "--"}
                />
                <CopyButton textToCopy={viewCryptoDetails?.user?.user_id} />
              </div>

              <DetailRow
                label="Coin"
                value={viewCryptoDetails.symbol || "--"}
              />

              {type == "Crypto" && (
                <>
                  <DetailRow
                    label="Withdraw Amount"
                    value={
                      Number(viewCryptoDetails?.amount || 0) +
                      Number(viewCryptoDetails?.withdrawalFee || 0) || "---"
                    }
                  />
                  <DetailRow
                    label="Receive Amount"
                    value={viewCryptoDetails?.amount || "---"}
                  />
                  <DetailRow
                    label="Withdrawal Fee"
                    value={`${viewCryptoDetails.withdrawalFee} USDT` || "--"}
                  />
                </>
              )}

              {type === "Fiat" && (
                <>
                  <DetailRow
                    label="Withdraw Amount"
                    value={viewCryptoDetails?.amount || "---"}
                  />
                  <DetailRow
                    label="Withdrawal Fee"
                    value={`${viewCryptoDetails.withdrawalFee} INR` || "--"}
                  />

                  {Number(viewCryptoDetails.tdsFee) !== 0 && (
                    <DetailRow
                      label="TDS"
                      value={`${viewCryptoDetails.tdsFee} INR`}
                    />
                  )}

                  <DetailRow
                    label="Receive Amount"
                    value={
                      viewCryptoDetails?.amount
                      // Number(viewCryptoDetails?.amount || 0) -
                      // (Number(viewCryptoDetails.withdrawalFee || 0) +
                      //   Number(viewCryptoDetails.tdsFee || 0)) || "---"
                    }
                  />

                  {/* <DetailRow
                    label="INR Amount"
                    value={viewCryptoDetails?.INRAmount || "--"}
                  /> */}
                </>
              )}

              {type == "Crypto" && (
                <>
                  <DetailRow
                    label="Network"
                    value={viewCryptoDetails?.network || "--"}
                  />
                  <DetailRow
                    label="Source of Fund"
                    value={viewCryptoDetails?.incomeSources || "--"}
                  />

                  <DetailRow
                    label="Source of Crypto"
                    value={viewCryptoDetails?.acquisitionMethods || "--"}
                  />

                  <DetailRow
                    label="Previously Withdraw Crypto"
                    value={viewCryptoDetails?.preCryptoWithdrawal || "--"}
                  />

                  <DetailRow
                    label="Crypto Withdrawal Purpose"
                    value={viewCryptoDetails?.usagePurposes || "--"}
                  />

                  <DetailRow
                    label="Withdrawal Beneficiary"
                    value={viewCryptoDetails?.transferInitiators || "--"}
                  />

                  <DetailRow
                    label="Sending the funds to"
                    value={viewCryptoDetails?.walletSources || "--"}
                  />

                  <DetailRow
                    label="Blockchain"
                    value={viewCryptoDetails?.network || "--"}
                  />

                  <div className="flex justify-start items-center -mr-2">
                    <DetailRow
                      label="Transaction Hash"
                      value={
                        newSortAddress(
                          viewCryptoDetails?.transectionHash,
                          6,
                          6
                        ) || "--"
                      }
                    />
                    <CopyButton
                      textToCopy={viewCryptoDetails?.transectionHash}
                    />
                  </div>

                  <div className="flex justify-start items-center -mr-2">
                    <DetailRow
                      label="Withdrawal Address"
                      value={
                        newSortAddress(viewCryptoDetails?.walletAdress, 6, 6) ||
                        "--"
                      }
                    />
                    <CopyButton textToCopy={viewCryptoDetails?.walletAdress} />
                  </div>

                  <DetailRow
                    label="Date & Time"
                    value={
                      DateTimeFormates(viewCryptoDetails?.createdAt)


                      // moment(viewCryptoDetails?.createdAt)?.format("llll")

                    }
                  />
                </>
              )}




              {/* <DetailRow
                label="User Id"
                value={viewCryptoDetails?.user?.user_id || "--"}
              /> */}

              {type == "Fiat" && (
                <>

                  <DetailRow
                    label="Requested Date & Time"
                    value={
                      DateTimeFormates(viewCryptoDetails?.createdAt)

                      // moment(viewCryptoDetails?.createdAt)?.format("llll")

                    }
                  />
                  {
                    (statusText(viewCryptoDetails?.withdrawStatus) === "Rejected" || statusText(viewCryptoDetails?.withdrawStatus) === "Verified") && <DetailRow
                      label="Updated Date & Time"
                      value={
                        DateTimeFormates(viewCryptoDetails?.updatedAt)

                        // moment(viewCryptoDetails?.createdAt)?.format("llll")

                      }
                    />
                  }




                  {/* <DetailRow
                    label="Withdraw Rate"
                    value={`1USDT=₹${viewCryptoDetails?.withdrawRate}` || "--"}
                  /> */}

                  <div className="flex justify-start items-center -mr-2">
                    <DetailRow
                      label="Transaction Id"
                      value={viewCryptoDetails?.transection_id || "--"}
                    />
                    <CopyButton
                      textToCopy={viewCryptoDetails?.transection_id}
                    />
                  </div>

                  <DetailRow
                    label="UTR/Trx ID"
                    value={viewCryptoDetails?.UTRId || "--"}
                  />
                </>
              )}

              <DetailRow
                color={statusColor(viewCryptoDetails?.withdrawStatus)}
                label="Status"
                value={statusText(viewCryptoDetails?.withdrawStatus)}
              />

              {viewCryptoDetails?.message && (
                <DetailRow
                  color={statusColor(viewCryptoDetails?.withdrawStatus)}
                  label="Reason"
                  value={viewCryptoDetails?.message || "--"}
                />
              )}
            </div>
          </div>
        </div>
      )}

     

      {type === "Crypto" && (
        <DynamicConfirmModal
          showDeleteIcon={showDeleteIcon}
          isOpen={showConfirmModal}
          lable=""
          placeholderText={`${VerifyOrRejected === "Rejected" ? "Enter the rejection reason" : ""
            }`}
          errorText={`${VerifyOrRejected === "Rejected"
            ? "Rejection reason is required."
            : ""
            } `}
          showTextArea={showTextArea}
          onClose={() => {
            setIsTextMessage("");
            setShowConfirmModal(false);
            setIsShowTextArea(false);
          }}
          message={
            VerifyOrRejected === "Rejected"
              ? "Are you sure you want to reject? "
              : "Are you sure you want to verify?"
          }
          TextMessage={TextMessage}
          setIsTextMessage={setIsTextMessage}
          VerifyOrRejected={VerifyOrRejected}
          onConfirm={() => {
            ApproveRejectCryptoWithdrawal({
              id: viewCryptoDetails?.id || "",
              action: VerifyOrRejected || "",
              ...(VerifyOrRejected === "Rejected" && {
                message: TextMessage || "",
              }),
              // ...(VerifyOrRejected === "Approved" && {
              //   transectionHash: TextMessage || "",
              // }),
            });

            setIsTextMessage("");
            setIsShowTextArea(false);
          }}
        />
      )}
      {type === "Fiat" && (
        <DynamicConfirmModal
          showDeleteIcon={showDeleteIcon}
          isOpen={showConfirmModal}
          lable="Enter Transaction / UTR Id"
          placeholderText={`${VerifyOrRejected === "Rejected"
            ? "Enter the rejection reason"
            : "Enter the transaction id"
            }`}
          errorText={`${VerifyOrRejected === "Rejected"
            ? "Rejection reason is required."
            : "Transaction id is required to verify."
            } `}
          showTextArea={showTextArea}
          onClose={() => {
            setIsTextMessage("");
            setShowConfirmModal(false);
            setIsShowTextArea(false);
          }}
          message={
            VerifyOrRejected === "Rejected"
              ? "Are you sure you want to reject? "
              : "Are you sure you want to verify?"
          }
          TextMessage={TextMessage}
          setIsTextMessage={setIsTextMessage}
          VerifyOrRejected={VerifyOrRejected}
          onConfirm={() => {
            ApproveRejectInrWithdrawal({
              id: viewCryptoDetails?.id || "",
              action: VerifyOrRejected || "",
              ...(VerifyOrRejected === "Rejected" && {
                message: TextMessage || "",
              }),

              ...(VerifyOrRejected === "Approved" && {
                ...(verifyWithdrawInrAutoManual === "manual" && {
                  transactionId: TextMessage || "",
                }),
                modeType: verifyWithdrawInrAutoManual || "",
              }),
            });
            setIsTextMessage("");
            setIsShowTextArea(false);
          }}
        />
      )}
      {(AprovedRejectedCryptoPending ||
        AprovedRejectedInrPending ||
        isLoading) && <LoadingScreen />}
    </>
  );
};

export default WithDrawCryptoView;
