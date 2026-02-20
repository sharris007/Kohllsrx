'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { SearchIcon, ChevronRightIcon } from './icons';
import {
  RadioIcon,
  StarIcon,
  SliderIcon,
  CheckboxIcon,
  DropdownIcon,
  ToggleIcon,
  UploadIcon,
  ImageIcon,
  TextIcon,
  TextAreaIcon,
  PanelIcon,
  PlusIcon,
  GridIcon,
  HtmlIcon,
  FxIcon,
  SignatureIcon,
} from './icons';

const Toolbox = styled.aside`
  width: 280px;
  min-width: 280px;
  background: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  background: ${theme.colors.white};
  position: relative;
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.textMuted};
  }
`;

const QuestionList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
`;

const QuestionItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: ${theme.colors.text};
  background: none;
  border: none;
  text-align: left;
  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;

const QuestionItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const questionTypes = [
  { icon: RadioIcon, label: 'Radio Button Group', expandable: false },
  { icon: StarIcon, label: 'Rating Scale', expandable: true },
  { icon: SliderIcon, label: 'Slider', expandable: false },
  { icon: CheckboxIcon, label: 'Checkboxes', expandable: false },
  { icon: DropdownIcon, label: 'Dropdown', expandable: false },
  { icon: DropdownIcon, label: 'Multi-Select Dropdown', expandable: false },
  { icon: ToggleIcon, label: 'Yes/No (Boolean)', expandable: false },
  { icon: UploadIcon, label: 'File Upload', expandable: false },
  { icon: ImageIcon, label: 'Image Picker', expandable: false },
  { icon: GridIcon, label: 'Ranking', expandable: false },
  { icon: TextIcon, label: 'Single-Line Input', expandable: true },
  { icon: TextAreaIcon, label: 'Long Text', expandable: false },
  { icon: TextIcon, label: 'Multiple Textboxes', expandable: false },
  { icon: PanelIcon, label: 'Panel', expandable: false },
  { icon: PanelIcon, label: 'Dynamic Panel', expandable: false },
  { icon: GridIcon, label: 'Single-Select Matrix', expandable: false },
  { icon: GridIcon, label: 'Multi-Select Matrix', expandable: false },
  { icon: GridIcon, label: 'Dynamic Matrix', expandable: false },
  { icon: HtmlIcon, label: 'HTML', expandable: false },
  { icon: FxIcon, label: 'Expression (read-only)', expandable: false },
  { icon: ImageIcon, label: 'Image', expandable: false },
  { icon: SignatureIcon, label: 'Signature', expandable: false },
];

interface QuestionToolboxProps {
  onAddQuestion: (type: string) => void;
}

export default function QuestionToolbox({ onAddQuestion }: QuestionToolboxProps) {
  return (
    <Toolbox>
      <SearchWrapper>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput type="text" placeholder="Type to search..." />
        </SearchInputWrapper>
      </SearchWrapper>
      <QuestionList>
        {questionTypes.map(({ icon: Icon, label, expandable }) => (
          <QuestionItem
            key={label}
            type="button"
            onClick={() => onAddQuestion(label)}
          >
            <QuestionItemLeft>
              <Icon size={20} />
              {label}
            </QuestionItemLeft>
            {expandable && <ChevronRightIcon size={14} />}
          </QuestionItem>
        ))}
      </QuestionList>
    </Toolbox>
  );
}
