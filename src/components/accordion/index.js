import { useState } from 'react';

import AccordionItem from './AccordionItem';

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

export default Accordion;
