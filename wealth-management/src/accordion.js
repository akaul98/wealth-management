import AccordionList from "./accordionList";
import { useState } from "react";
const Accordian = () => {
  const [data, setData] = useState([
    { title: "Portfolio", id: 1 },
    { title: "Stocks", id: 2 },
    { title: "Mutual Funds", id: 3 },
  ]);

  return (
    <div>
      <AccordionList data={data} title="All Sections" />
    </div>
  );
};

export default Accordian;
