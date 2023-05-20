import React from "react";
import ButtonCardStyle from "./ButtonCard.module.scss";
import AccordionDetails from "./accordionDetails/AccordionDetails";

const ButtonCard = ({ arr, oneElement }) => {
  const [active, setActive] = React.useState(oneElement);
  const ref = React.useRef();

  return (
    <>
      {arr.map(({ name, img, date }, i) => (
        <li key={i}>
          <div
            className={ButtonCardStyle.container}
            onClick={() => setActive(name)}
            ref={ref}
          >
            <button className={ButtonCardStyle.container_text}>
              <h3 className={ButtonCardStyle.text}>
                <span>{`0${i + 1} `}</span>
                {name}
              </h3>
            </button>
            <AccordionDetails
              name={name}
              img={img}
              active={active}
              listNumber={`0${i + 1}`}
              date={date}
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default ButtonCard;
