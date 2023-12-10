import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isexpanded, setisexpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isexpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <p>
        {text}...
        <button type="button" onClick={() => setisexpanded(!isexpanded)}>
          {isexpanded ? "less" : "more"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
