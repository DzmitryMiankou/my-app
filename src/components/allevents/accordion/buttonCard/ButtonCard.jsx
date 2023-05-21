import React from "react";
import ButtonCardStyle from "./ButtonCard.module.scss";
import AccordionDetails from "./accordionDetails/AccordionDetails";
import ButtonEl from "./button/Button";

const ButtonCard = ({ arr, oneElement }) => {
  const [active, setActive] = React.useState(oneElement);
  const ref = React.useRef();

  return (
    <>
      {arr.map(({ name, img, date }, i) => (
        <li
          key={i}
          className={ButtonCardStyle.container}
          onClick={() => setActive(name)}
          ref={ref}
        >
          <ButtonEl name={name} id={i} active={active} img={img} />
          <AccordionDetails
            name={name}
            img={img}
            active={active}
            listNumber={`0${i + 1}`}
            date={date}
          />
        </li>
      ))}
    </>
  );
};

export default ButtonCard;
