// interface Props {
//   items: string[];
//   heading: string;
//   onSelectItem: (item: string) => void;
// }

// function ListGroup({ items, heading, onSelectItem }: Props) {
//   return (
//     <>
//       <h1>{heading}</h1>
//       <ul className="list-group">
//         {items.map((item) => (
//           <li
//             className="list-group-item"
//             key={item}
//             onClick={() => {
//               onSelectItem(item);
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default ListGroup;
// const items = ["New York", "Delhi", "Mumbai"];
// function ListGroup() {
//   return (

//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }
// export default ListGroup;

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
