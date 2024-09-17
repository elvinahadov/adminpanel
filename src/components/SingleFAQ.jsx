import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const SingleFAQ = ({title,description,faqDeleteHandler}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="bg-gray-800 my-2 w-full relative">
      <Accordion open={open === 1} className="text-center w-full ">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-white flex justify-center"
        >
          {title}
        </AccordionHeader>
        <AccordionBody className="text-white">

          {open === 0 ? "": description}
        </AccordionBody>
      </Accordion>
      <div className="flex gap-4 absolute top-[10px] right-[10px]">
            <button className="border-yellow-700 border-2 rounded-lg py-1 px-4 bg-yellow-500 text-black font-bold">
              Edit
            </button>
            <button className="border-red-800 border-2 rounded-lg py-1 px-4 bg-red-500 text-black font-bold" onClick={faqDeleteHandler}>
              Delete
            </button>
          </div>
    </div>
  );
};

export default SingleFAQ;
