import React from "react";

import { IMaskInput } from "react-imask";

interface PhoneMaskProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

const PhoneMask = React.forwardRef<HTMLInputElement, PhoneMaskProps>(
    function PhoneMask(props, ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask="+7 (000) 000-00-00"
          inputRef={ref}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );

export default PhoneMask;
