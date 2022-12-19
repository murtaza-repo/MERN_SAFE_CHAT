// import { Avatar } from "@chakra-ui/avatar";
// import { Tooltip } from "@chakra-ui/tooltip";
// import ScrollableFeed from "react-scrollable-feed";
import moment from "moment";
import {
  // isLastMessage,
  // isSameSender,
  // isSameSenderChat,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

var nameColors = ["red", "green", "blue", "brown", "crimson"];

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    // <ScrollableFeed>
    <>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex", alignItems: "flex-end" }} key={m._id}>
            {/* {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <>
                  <Tooltip
                    label={m.sender.name}
                    placement="bottom-start"
                    hasArrow
                  >
                    <Avatar
                      mt="7px"
                      mr={1}
                      size="sm"
                      cursor="pointer"
                      name={m.sender.name}
                      color="white"

                      // src={m.sender.pic}
                    />
                  </Tooltip>
                </>
              )} */}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "10px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.chat.isGroupChat && (
                <div
                  style={{
                    fontSize: "0.8rem",
                    color:
                      nameColors[Math.floor(Math.random() * nameColors.length)],
                  }}
                >
                  {m.sender.name}
                </div>
              )}
              <div>{m.content}</div>
              <div
                style={{
                  fontSize: "0.60rem",
                  color: "gray",
                  float: "right",
                }}
              >
                <span>
                  <i>{moment(m.updatedAt).calendar()}</i>
                </span>
              </div>
            </span>
          </div>
        ))}
    </>
    // </ScrollableFeed>
  );
};

export default ScrollableChat;
