import React, { ComponentType, useRef, useState } from "react";
import Select, {
  components,
  ControlProps,
  GroupBase,
  MenuProps,
  SingleValueProps,
  StylesConfig,
  ValueContainerProps,
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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const placeholderRef = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  const selectStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
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
  
  const CustomControl : React.FC<ControlProps> = (props) => {
    return (
      <components.Control {...props} className={styles.control}>
        {props.children}
      </components.Control>
    );
  };
  const CustomValueContainer : React.FC<ValueContainerProps> = (props) => {
    return (
      <components.ValueContainer {...props} className={styles.valueContainer}>
        {props.children}
      </components.ValueContainer>
    );
  };
  const СustomPlaceholder = () => (
    <span ref={placeholderRef} className={styles.placeholder}>
      <UpAnimation ref={placeholderRef} classList={styles.placeholderText}>
        выбрать квартиру
      </UpAnimation>
      <IconDropdown />
    </span>
  );
  const СustomSingleValue : ComponentType<SingleValueProps<unknown, boolean, GroupBase<unknown>>> | undefined  = ({ data }) => {
    return (
      <div ref={valueRef} className={styles.value}>
        <UpAnimation ref={valueRef} classList={styles.valueText}>
        {(data as Option).label}
        </UpAnimation>
      </div>
    );
  };
  const CustomMenu : React.FC<MenuProps> = (props) => {
    return (
      <components.Menu {...props} className={styles.selectMenu}>
        {props.children}
      </components.Menu>
    );
  };

  const handleChange = (evt: unknown) => {
    setSelectedOption(evt as string);
  };

  return (
    <Select
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Placeholder: СustomPlaceholder,
        SingleValue: СustomSingleValue,
        Control: CustomControl,
        ValueContainer: CustomValueContainer,
        Menu: CustomMenu,
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
