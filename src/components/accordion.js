import { useState } from 'react';

const Accordion = (props) => {
  const { items } = props;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }

  return (
    <div className="overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={`${index}`}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const AccordionItem = (props) => {
  const { title, content, isOpen, toggleAccordion } = props;

  const rotateIcon = isOpen ? 'rotate-0' : 'rotate-180';
  const contentHeight = isOpen ? 'max-h-96' : 'max-h-0';

  return (
    <div>
      <button
        className="w-full text-left mt-3 text-xl flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="currentColor"
            className={`transition-transform transform ${rotateIcon}`}
          >
            <polygon points="4,10 10,4 16,10"/>
          </svg>
        </span>
      </button>
      <div className={`${contentHeight} overflow-hidden transition-max-h duration-300 mx-3`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
