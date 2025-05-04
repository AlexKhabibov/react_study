import Message from "./Message";

function MessageList({ themeColor }) {
    return (
        <>
            {
                messages.map((message) => (
                    <Message themeColor={themeColor} key={message.id} {...message} /> // спрэд - тоже смое что id={message.id} text={message.text}
                ))
            }
        </>
    );
}

const messages = [
    {
        id: 1,
        text: 'текстовое сообщение номер 1',
    },
    {
        id: 2,
        text: 'текстовое сообщение номер 2',
    }
]

export default MessageList;