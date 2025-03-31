import ChatBase from "@/components/chat/ChatBase";

const Chat = ({ params }: { params: { id: string } }) => {

  console.log("The group id is: ", params.id);

  return (
    <div>
      <h1>Hello</h1>
      <ChatBase />
    </div>
  )
}
export default Chat