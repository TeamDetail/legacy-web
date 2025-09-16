import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import Search from '@src/assets/search.svg?react';
import { LegacyTypography } from "@src/constants/font/fontToken";

type SearchBarProps = {
  value: string;
  handleValue: (s: string) => void;
  placeholder: string;
}
const SearchBar = ({
  value,
  handleValue,
  placeholder
}: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <Search width={24} height={24}/>
      <input placeholder={placeholder} type="text" name="searchBar" value={value} onChange={(e) => handleValue(e.target.value)}/>
    </SearchBarContainer>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  border-radius: 12px;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  color: ${LegacyPalette.labelNormal};
  background-color: ${LegacyPalette.fillNormal};
  > input {
    flex-grow: 1;
    background-color: transparent;
    outline: none;
    border: none;
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.Pretendard.Body2.Medium}
  }
`