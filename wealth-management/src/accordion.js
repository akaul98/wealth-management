import AccordionList from "./accordionList";
import { useState } from "react";
const Accordian = () => {
  const [data, setData] = useState([
    { title: "Portfolio", id: 1, content: "Adarsh" },
    { title: "Stocks", id: 2, content: "Abhey" },
    { title: "Mutual Funds", id: 3, content: "Anil" },
  ]);

  return (
    <div>
      <AccordionList data={data} title="All Sections" />
    </div>
  );
};

export default Accordian;
