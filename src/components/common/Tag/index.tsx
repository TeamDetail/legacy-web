import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import AddIcon from "@src/assets/plus.svg?react";

interface TagProps {
  data: string[];
  setData?: Dispatch<SetStateAction<string[]>>;
  disabled: boolean;
}

const Tag = ({ data, setData, disabled }: TagProps) => {
  const [isTagAdding, setIsTagAdding] = useState(false);

  const handleTagAdd = (tag: string) => {
    if (tag !== "" && data.length < 8 && !data.includes(tag)) {
      setData!((prev) => [...prev, tag]);
    }
  };

  return (
    <TagContainer>
      {data.map((item, idx) => {
        return (
          <TagWrapper
            $isActive={!disabled}
            $disabled={disabled}
            key={idx}
            onMouseEnter={!disabled ? (e) => (e.currentTarget.textContent = "삭제") : undefined}
            onMouseLeave={!disabled ? (e) => (e.currentTarget.textContent = `# ${item}`) : undefined}
            onClick={() => {
              if (!disabled && setData) {
                setData((prev) => prev.filter((_, i) => i !== idx));
              }
            }}
          >
            # {item}
          </TagWrapper>
        );
      })}
      {!isTagAdding && data.length < 8 && !disabled && (
        <TagAddButton
          onClick={() => {
            setIsTagAdding((prev) => !prev);
          }}
        >
          <AddIcon />
        </TagAddButton>
      )}
      {isTagAdding && !disabled && (
        <TagWrapper $isActive={false} $disabled={false}>
          #{" "}
          <TagInput
            type="text"
            placeholder="태그 입력.."
            onBlur={(e) => {
              handleTagAdd(e.target.value);
              setIsTagAdding(false);
            }}
            autoFocus
          />
        </TagWrapper>
      )}
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
`;

const TagAddButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${LegacyPalette.fillNormal};
  color: ${LegacyPalette.labelNormal};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TagWrapper = styled.div<{ $isActive: boolean; $disabled?: boolean }>`
  align-items: center;
  height: 28px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${LegacyPalette.fillNormal};
  min-height: 28px;
  width: fit-content;
  transition: 0.2s;

  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body2.Medium};

  cursor: ${({ $disabled, $isActive }) => 
    $disabled ? 'default' : ($isActive ? 'pointer' : 'default')};

  &:hover {
    ${({ $isActive, $disabled }) =>
      $isActive && !$disabled && `background-color: ${LegacySementic.red.netural};`}
  }
`;

const TagInput = styled.input`
  field-sizing: content;
  border: none;
  background: transparent;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body2.Medium};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${LegacyPalette.labelAlternative};
  }
`;