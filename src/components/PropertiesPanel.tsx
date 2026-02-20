'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { SearchIcon, ChevronRightIcon } from './icons';
import type { Question } from '@/types/survey';

const ClipboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="3" width="12" height="14" rx="2"/>
    <path d="M7 5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
  </svg>
);

const PaintIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 12l2 2 8-8 8 8 2-2L12 2z"/>
  </svg>
);

const CommentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const BanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const Panel = styled.aside`
  width: 320px;
  min-width: 320px;
  background: ${theme.colors.white};
  border-left: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.text};
  }
  span {
    font-size: 12px;
    color: ${theme.colors.textSecondary};
  }
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const SearchWrapper = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${theme.colors.border};
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

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const PropertiesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 56px 16px 16px;
`;

const PropertyGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${theme.colors.text};
  margin-bottom: 8px;
  cursor: pointer;
`;

const HelpIconBtn = styled.span`
  color: ${theme.colors.textMuted};
  cursor: help;
  font-size: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  color: ${theme.colors.text};
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  background: ${theme.colors.white};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SegmentedControl = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const SegmentedOption = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 8px 12px;
  border: none;
  background: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.white)};
  color: ${({ $active }) => ($active ? theme.colors.white : theme.colors.text)};
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: ${({ $active }) => ($active ? theme.colors.primaryHover : theme.colors.backgroundLight)};
  }
`;

const IconBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 4px;
  border-left: 1px solid ${theme.colors.borderLight};
  background: ${theme.colors.backgroundLight};
`;

const IconBarBtn = styled.button<{ $active?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ $active }) => ($active ? theme.colors.primaryLight : 'transparent')};
  color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.textMuted)};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
  }
`;

const PanelWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SectionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconBtn = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: ${theme.colors.backgroundLight};
    color: ${theme.colors.text};
  }
`;

const ChoicesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 13px;
`;

const ChoicesThead = styled.thead`
  background: ${theme.colors.backgroundLight};
  th {
    text-align: left;
    padding: 10px 12px;
    font-weight: 600;
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

const ChoicesTbody = styled.tbody`
  td {
    padding: 10px 12px;
    border-bottom: 1px solid ${theme.colors.borderLight};
    vertical-align: middle;
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

const DragHandleCell = styled.td`
  width: 32px;
  cursor: grab;
  color: ${theme.colors.textMuted};
`;

const DragHandleDots = () => (
  <span style={{ display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <span key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: theme.colors.textMuted }} />
    ))}
  </span>
);

const PencilIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const TrashIconSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const SortIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <circle cx="4" cy="6" r="1.5"/>
    <circle cx="4" cy="12" r="1.5"/>
    <circle cx="4" cy="18" r="1.5"/>
  </svg>
);

const PlusCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const HelpCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
);

const TextCell = styled.td`
  display: flex;
  align-items: center;
  gap: 8px;
  .choice-actions {
    opacity: 0.6;
    display: flex;
    gap: 4px;
  }
  &:hover .choice-actions {
    opacity: 1;
  }
`;

interface PropertiesPanelProps {
  selectedQuestion?: Question | null;
  onUpdateQuestion?: (id: string, updates: Partial<Question>) => void;
}

function ChoicesPanel({
  question,
  onUpdateQuestion,
}: {
  question: Question;
  onUpdateQuestion?: (id: string, updates: Partial<Question>) => void;
}) {
  const choices = question.options ?? ['Item 1', 'Item 2', 'Item 3'];

  const handleAddChoice = () => {
    const next = [...choices, `Item ${choices.length + 1}`];
    onUpdateQuestion?.(question.id, { options: next });
  };

  const handleDeleteChoice = (index: number) => {
    if (choices.length <= 1) return;
    const next = choices.filter((_, i) => i !== index);
    onUpdateQuestion?.(question.id, { options: next });
  };

  return (
    <>
      <PropertyGroup>
        <SectionHeader>
          <SectionTitle>
            Choices
            <span style={{ color: theme.colors.textMuted, cursor: 'help', display: 'inline-flex' }}><HelpCircleIcon /></span>
          </SectionTitle>
          <SectionIcons>
            <IconBtn type="button" title="Bulk Edit">
              <PencilIcon />
            </IconBtn>
            <IconBtn type="button" title="Sort">
              <SortIcon />
            </IconBtn>
            <IconBtn type="button" title="Add New Choice" onClick={handleAddChoice}>
              <PlusCircleIcon />
            </IconBtn>
          </SectionIcons>
        </SectionHeader>
        <ChoicesTable>
          <ChoicesThead>
            <tr>
              <th style={{ width: 32 }}></th>
              <th>Value</th>
              <th>Text</th>
            </tr>
          </ChoicesThead>
          <ChoicesTbody>
            {choices.map((choice, idx) => (
              <tr key={`${choice}-${idx}`}>
                <DragHandleCell>
                  <DragHandleDots />
                </DragHandleCell>
                <td>{choice}</td>
                <TextCell as="td">
                  <span style={{ flex: 1 }}>{choice}</span>
                  <span className="choice-actions">
                    <IconBtn type="button" title="Edit">
                      <PencilIcon />
                    </IconBtn>
                    <IconBtn type="button" title="Delete" onClick={() => handleDeleteChoice(idx)}>
                      <TrashIconSmall />
                    </IconBtn>
                  </span>
                </TextCell>
              </tr>
            ))}
          </ChoicesTbody>
        </ChoicesTable>
        <Label style={{ marginBottom: 8 }}>
          Copy choices from the following question
        </Label>
        <Select style={{ marginBottom: 16 }}>
          <option>Select a question...</option>
        </Select>
        <Label style={{ marginBottom: 8 }}>Choice order</Label>
        <Select style={{ marginBottom: 16 }}>
          <option>None</option>
        </Select>
        <CheckboxWrapper>
          <Checkbox />
          Enable the &quot;Other&quot; option
          <HelpIconBtn>?</HelpIconBtn>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox />
          Enable the &quot;None&quot; option
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox />
          Show the Clear button
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox />
          Separate special choices
          <HelpIconBtn>?</HelpIconBtn>
        </CheckboxWrapper>
      </PropertyGroup>
    </>
  );
}

export default function PropertiesPanel({ selectedQuestion, onUpdateQuestion }: PropertiesPanelProps) {
  const isRadioGroup = selectedQuestion?.type === 'radiogroup';

  return (
    <Panel>
      <PanelHeader>
        <HeaderText>
          <h3>{isRadioGroup ? 'Choices' : 'General'}</h3>
          <span>{selectedQuestion ? selectedQuestion.name : 'Survey'}</span>
        </HeaderText>
        <BackBtn>
          <ChevronRightIcon size={18} />
        </BackBtn>
      </PanelHeader>
      <SearchWrapper>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput type="text" placeholder="Type to search..." />
        </SearchInputWrapper>
      </SearchWrapper>
      <PanelWrapper>
        <PropertiesList>
          {selectedQuestion ? (
            isRadioGroup ? (
              <ChoicesPanel question={selectedQuestion} onUpdateQuestion={onUpdateQuestion} />
            ) : (
            <>
              <PropertyGroup>
                <Label>
                  Question name
                  <HelpIconBtn>?</HelpIconBtn>
                </Label>
                <Input type="text" defaultValue={selectedQuestion.name} />
              </PropertyGroup>
              <PropertyGroup>
                <Label>
                  Question title
                  <HelpIconBtn>?</HelpIconBtn>
                </Label>
                <Input type="text" defaultValue={selectedQuestion.title} />
              </PropertyGroup>
              <PropertyGroup>
                <Label>
                  Question description
                  <HelpIconBtn>?</HelpIconBtn>
                </Label>
                <Textarea placeholder="" />
              </PropertyGroup>
              <PropertyGroup>
                <CheckboxWrapper>
                  <Checkbox defaultChecked />
                  Visible
                  <HelpIconBtn>?</HelpIconBtn>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox />
                  Read-only
                  <HelpIconBtn>?</HelpIconBtn>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox />
                  Required
                  <HelpIconBtn>?</HelpIconBtn>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox defaultChecked />
                  Show the title and description
                  <HelpIconBtn>?</HelpIconBtn>
                </CheckboxWrapper>
              </PropertyGroup>
            </>
            )
          ) : (
            <>
              <PropertyGroup>
                <Label>
                  Survey title
                  <HelpIconBtn>?</HelpIconBtn>
                </Label>
                <Input type="text" placeholder="" />
              </PropertyGroup>
              <PropertyGroup>
                <Label>
                  Survey description
                  <HelpIconBtn>?</HelpIconBtn>
                </Label>
                <Textarea placeholder="" />
              </PropertyGroup>
          <PropertyGroup>
            <CheckboxWrapper>
              <Checkbox defaultChecked />
              Make the title and description visible
              <HelpIconBtn>?</HelpIconBtn>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox />
              Make the survey read-only
              <HelpIconBtn>?</HelpIconBtn>
            </CheckboxWrapper>
          </PropertyGroup>
          <PropertyGroup>
            <Label>
              Select a survey language
              <HelpIconBtn>?</HelpIconBtn>
            </Label>
            <Select>
              <option>Default (English)</option>
            </Select>
          </PropertyGroup>
          <PropertyGroup>
            <Label>
              Limit to one response
              <HelpIconBtn>?</HelpIconBtn>
            </Label>
            <Input type="text" placeholder="" />
          </PropertyGroup>
          <PropertyGroup>
            <Label>
              Survey width mode
              <HelpIconBtn>?</HelpIconBtn>
            </Label>
            <SegmentedControl>
              <SegmentedOption $active>Auto</SegmentedOption>
              <SegmentedOption>Static</SegmentedOption>
              <SegmentedOption>Responsive</SegmentedOption>
            </SegmentedControl>
          </PropertyGroup>
            </>
          )}
        </PropertiesList>
        <IconBar>
          <IconBarBtn $active title="General"><ClipboardIcon /></IconBarBtn>
          <IconBarBtn title="Appearance"><PaintIcon /></IconBarBtn>
          <IconBarBtn title="Comments"><CommentIcon /></IconBarBtn>
          <IconBarBtn title="Data"><DatabaseIcon /></IconBarBtn>
          <IconBarBtn title="Validation"><BanIcon /></IconBarBtn>
          <IconBarBtn title="Tools"><WrenchIcon /></IconBarBtn>
          <IconBarBtn title="Timing"><ClockIcon /></IconBarBtn>
          <IconBarBtn title="Settings"><GearIcon /></IconBarBtn>
        </IconBar>
      </PanelWrapper>
    </Panel>
  );
}
