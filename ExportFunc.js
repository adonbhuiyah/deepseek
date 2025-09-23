import toast from "react-hot-toast";

const handleNewChat = ({ user, createNewChat }) => {
  if (!user) {
    console.log("login");

    toast.error("Login to Create Message");
  } else {
    console.log("create new chat");

    createNewChat();
  }
};

export default handleNewChat;
