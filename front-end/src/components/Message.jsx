function Message({ role, content }) {
  return (
    <div>
      <strong>{role}:</strong> {content}
    </div>
  );
}

export default Message;