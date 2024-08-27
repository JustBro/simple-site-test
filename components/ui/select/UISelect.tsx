import React, { useState } from "react";
import Select, {
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  StylesConfig,
} from "react-select";
import IconDropdown from "../../icons/IconDropdown";
import { UISelectProps, Option } from "@/types/types";
import styles from "./UISelect.module.scss";

export default function UISelect({ options }: UISelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const selectStyles: StylesConfig<Option, false, GroupBase<Option>> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      minWidth: "240px",
      padding: "10px 26px",
      border: "none",
      borderRadius: "118px",
      backgroundColor: "#2F80ED",
      textTransfome: "uppercase",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
      fontWeight: "600",
      textTransform: "uppercase",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: "600",
      textTransform: "uppercase",
    }),
  };

  const handleChange = (evt: Option | null) => {
    setSelectedOption(evt);
  };

  return (
    <Select
      components={{
        DropdownIndicator: (IconDropdown as unknown) as React.ComponentType<
          DropdownIndicatorProps<Option, false, GroupBase<Option>>
        >,
        IndicatorSeparator: null,
      }}
      placeholder={<span className={styles.placeholder}>Выбрать квартиру</span>}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      styles={selectStyles}
      isSearchable={false}
      className={styles.select}
    />
  );
}
