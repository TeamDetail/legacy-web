import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
} from "./style";
import ArrowDown from "@src/assets/arrow-down.svg?react";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: string[];
  value: string;
  onSelectedItemChange: (type: string) => void;
  zIndex?: number;
  customStyle?: CSSObject;
}

export const Select = ({
  items,
  value,
  zIndex,
  onSelectedItemChange,
  customStyle,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);

  return (
    <SelectContainer
      onClick={() => setClose((prev) => !prev)}
      style={customStyle}
    >
      <p>{value}</p>
      <SelectIcon close={close ? "true" : "false"}>
        <ArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap style={{ zIndex }}>
          {items.map((item, idx) => (
            <SelectItem key={idx} onClick={() => onSelectedItemChange(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};
