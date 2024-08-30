import React, { useEffect, useRef, useState } from "react";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
} from "react-select";
import IconDropdown from "../../icons/iconDropdown";
import styles from "./UISelect.module.scss";
import { Option } from "@/types/types";
import UpAnimation from "@/components/upAnimation/upAnimation";

type Props = {
  options: Option[];
  classList?: string;
};

export default function UISelect({ options, classList = "" }: Props) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isMediaXL, setIsMediaXL] = useState(false);

  const placeholderRef = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const selectStyles: StylesConfig<Option, false, GroupBase<Option>> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      width: "240px",
      minHeight: "50px",
      border: "none",
      borderRadius: "118px",
      backgroundColor: "#2F80ED",
      textTransfome: "uppercase",
      textWrap: "nowrap",
      textOverflow: "ellipsis",
      cursor: "pointer",
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "block",
      padding: isMediaXL ? "0 20px" : "0 28px",
    }),
    option: (provided) => ({
      ...provided,
      fontWeight: "600",
      textTransform: "uppercase",
    }),
    menuList: (provided) => ({
      ...provided,
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      scrollbarWidth: "thin",
    }),
  };

  const CustomPlaceholder = () => (
    <span ref={placeholderRef} className={styles.placeholder}>
      <UpAnimation ref={placeholderRef} classList={styles.placeholderText}>
        выбрать квартиру
      </UpAnimation>
      <IconDropdown />
    </span>
  );

  const CustomSingleValue = ({ data }) => {
    return (
      <div ref={valueRef} className={styles.value}>
        <UpAnimation ref={valueRef} classList={styles.valueText}>
          {data.label}
        </UpAnimation>
      </div>
    );
  };

  const handleChange = (evt: Option | null) => {
    setSelectedOption(evt);
  };

  const onResize = () => {
    const windowWidth = window.innerWidth;

    if (isMediaXL !== windowWidth < 1024) setIsMediaXL(windowWidth < 1024);
  };

  return (
    <Select
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Placeholder: CustomPlaceholder,
        SingleValue: CustomSingleValue,
      }}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      styles={selectStyles}
      isSearchable={false}
      className={styles.select + " " + classList}
    />
  );
}
