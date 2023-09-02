const AccordionList = ({ data, title }) => {
  // const section = props.data;
  // const pageTitle = props.title;
  return (
    <div>
      <h2>
        <u>
          <i> {title}</i>
        </u>
      </h2>
      {data.map((list) => (
        <div key={list.id}>
          <h2>{list.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
