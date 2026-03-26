import { useLocation } from "react-router";
import BackComponent from "../../components/backcomponent/BackComponent";
import { useMessageHistoryView } from "../../queries/message-history";

const ViewMessageHistory = () => {
  const location = useLocation();
  const { callDetail } = location.state || {};

  const { data, isLoading } = useMessageHistoryView({
    user1: callDetail?.user1?._id,
    user2: callDetail?.user2?._id,
  });

  return (
    <>
      <BackComponent text="Chat Details" />

      <div className="p-4 h-[80vh] overflow-y-auto ">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((chat: any) => {
            const isUser = chat?.senderId?.userType === "User";

            return (
              <div
                key={chat._id}
                className={`flex mb-3 ${
                  isUser ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[60%] px-4 py-2 rounded-2xl text-sm shadow
                    ${
                      isUser
                        ? "bg-white text-black rounded-bl-none"
                        : "bg-blue-500 text-white rounded-br-none"
                    }`}
                >
                  {/* Name */}
                  <p className="text-xs font-semibold mb-1">
                    {chat?.senderId?.name}
                  </p>

                  {/* Message */}
                  {chat?.message && <p>{chat.message}</p>}

                  {/* Image (if exists) */}
                  {chat?.image && (
                    <img
                      src={chat.image}
                      alt="chat"
                      className="mt-2 rounded-lg max-h-40"
                    />
                  )}

                  {/* Time */}
                  <p className="text-[10px] text-right mt-1 opacity-70">
                    {new Date(chat.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ViewMessageHistory;