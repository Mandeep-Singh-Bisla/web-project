let count = 0;
const Message = () => {
  count++;
  return (
    <>
      <p>Message {count}</p>
    </>
  );
};

export default Message;
