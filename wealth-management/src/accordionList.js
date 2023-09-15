import React from "react";
import { Accordion } from "flowbite-react";

const AccordionList = ({ data, title }) => {
  //const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <h2 className="text-3xl font-bold underline">{title}</h2>
      {data.map((list) => (
        <div key={list.id}>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>{list.title}</Accordion.Title>
              <Accordion.Content>{list.content}</Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
