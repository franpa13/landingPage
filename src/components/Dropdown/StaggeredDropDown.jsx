import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
const StaggeredDropDown = ({ setSelected, selected }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="p-0 mt-4 md:mt-8 md:p-0 pb-0 flex items-center justify-center bg-white"
    >
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex text-black items-center gap-2 px-2 py-1 rounded-md  bg-ligthYellow hover:text-white hover:bg-ligthYellowText transition-colors"
        >
          {selected == "Todos" ? (
            <DensitySmallOutlinedIcon fontSize="small" />
          ) : selected == "Panaderia" ? (
            <BakeryDiningOutlinedIcon fontSize="small"></BakeryDiningOutlinedIcon>
          ) : (
            <EmojiFoodBeverageOutlinedIcon fontSize="small"></EmojiFoodBeverageOutlinedIcon>
          )}
          <span className="font-medium text-xs md:text-lg">{selected}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-1 rounded-lg z-50 bg-white shadow-xl absolute top-[120%] left-[100%] md:left-[50%] w-48 overflow-hidden"
        >
          <Option
            option={"Cafeteria"}
            setOpen={setOpen}
            Icon={EmojiFoodBeverageOutlinedIcon}
            setSelected={setSelected}
            text="Cafeteria"
          />
          <Option
            option={"Pasteleria"}
            setSelected={setSelected}
            setOpen={setOpen}
            Icon={BakeryDiningOutlinedIcon}
            text="Pasteleria"
          />
          <Option
            option={"Todos"}
            setSelected={setSelected}
            setOpen={setOpen}
            Icon={DensitySmallOutlinedIcon}
            text="Todos"
          />
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen, option, setSelected }) => {
  const handleClick = (option) => {
    setOpen(false);
    setSelected(option);
  };
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => handleClick(option)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-ligthYellowText text-slate-700 hover:text-white transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon fontSize="small" />
      </motion.span>
      <span className="text-xs  md:text-base">{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.02,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
