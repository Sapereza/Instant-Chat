import Message from "../components/Message";

const ChatBox = () => {
    const messages = [
        {
            id: 1,
            text: "Hello there!",
            name:"Sarah"
        },

        {
            id: 2,
            text: "Hi!",
            name: "John Doe"
        }
    ]

  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message={message} />
        ))}
    </div>
  )
}

export default ChatBox