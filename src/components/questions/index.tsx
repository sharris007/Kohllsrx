'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { MinusCircleIcon, PlusCircleIcon, DuplicateIcon, RequiredIcon, TrashIcon, ChevronDownIcon } from '../icons';
import type { Question } from '@/types/survey';

export interface QuestionCallbacks {
  onUpdateQuestion: (id: string, updates: Partial<Question>) => void;
  onDuplicateQuestion: (id: string) => void;
  onDeleteQuestion: (id: string) => void;
}

const QuestionCard = styled.div<{ $selected?: boolean }>`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
  ${({ $selected }) =>
    $selected &&
    `
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
  `}
`;

const QuestionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const QuestionDescription = styled.p`
  font-size: 13px;
  color: ${theme.colors.textSecondary};
  margin-bottom: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
  font-size: 14px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 18px;
  height: 18px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
  font-size: 14px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const RatingScale = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
`;

const RatingOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  &:has(input:checked) {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: white;
  }
`;

const SliderTrack = styled.div`
  margin-top: 16px;
  padding: 0 8px;
`;

const SliderMarks = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${theme.colors.textMuted};
  margin-bottom: 8px;
`;

const SliderInput = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 8px;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 10px 12px;
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

const YesNoButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const YesNoBtn = styled.button<{ $active?: boolean }>`
  padding: 10px 24px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  background: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.white)};
  color: ${({ $active }) => ($active ? theme.colors.white : theme.colors.text)};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border-color: ${theme.colors.primary};
    background: ${({ $active }) => ($active ? theme.colors.primaryHover : theme.colors.primaryLight)};
  }
`;

const DropZone = styled.div`
  border: 2px dashed ${theme.colors.border};
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  margin-top: 12px;
  color: ${theme.colors.textSecondary};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primaryLight};
  }
`;

const DropZoneButton = styled.button`
  margin-top: 12px;
  padding: 8px 20px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

const RankingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  margin-bottom: 8px;
  background: ${theme.colors.white};
`;

const RankingHandle = styled.span`
  color: ${theme.colors.textMuted};
  cursor: grab;
`;

const RankingRemove = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: ${theme.colors.text};
  }
`;

const MultipleTextRow = styled.div`
  margin-bottom: 12px;
`;

const MultipleTextLabel = styled.label`
  display: block;
  font-size: 13px;
  color: ${theme.colors.textSecondary};
  margin-bottom: 6px;
`;

const SignaturePad = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  background: ${theme.colors.backgroundLight};
  margin-top: 12px;
`;

const defaultOptions = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'None', 'Other (describe)'];

const RadioCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const DragHandle = styled.span`
  color: ${theme.colors.textMuted};
  font-size: 12px;
  letter-spacing: 2px;
  cursor: grab;
`;

const CollapseBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: ${theme.colors.text};
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  background: ${theme.colors.white};
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const RadioOptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
`;

const OptionIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  &:hover {
    opacity: 0.8;
  }
`;

const RadioBullet = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid ${theme.colors.border};
  border-radius: 50%;
  flex-shrink: 0;
`;

const QuestionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${theme.colors.borderLight};
`;

const QuestionTypeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: none;
  border: none;
  font-size: 14px;
  color: ${theme.colors.text};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const FooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FooterActionBtn = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: none;
  border: none;
  font-size: 13px;
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: ${theme.colors.backgroundLight};
    color: ${theme.colors.text};
  }
  ${({ $active }) => $active && `color: ${theme.colors.primary};`}
`;

function RadioGroupQuestion({
  q,
  selected,
  callbacks,
}: {
  q: Question;
  selected?: boolean;
  callbacks?: QuestionCallbacks;
}) {
  const options = q.options ?? defaultOptions;
  const title = q.title;

  const handleDeleteOption = (index: number) => {
    if (options.length <= 1) return;
    const next = options.filter((_, i) => i !== index);
    callbacks?.onUpdateQuestion(q.id, { options: next });
  };

  const handleAddBefore = (index: number) => {
    const newItem = `Item ${options.length + 1}`;
    const next = [...options.slice(0, index), newItem, ...options.slice(index)];
    callbacks?.onUpdateQuestion(q.id, { options: next });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callbacks?.onUpdateQuestion(q.id, { title: e.target.value, name: e.target.value });
  };

  const showDeleteIcon = (i: number) => i < 3;
  const showAddIcon = (i: number) => i >= options.length - Math.min(3, options.length);

  return (
    <QuestionCard $selected={selected}>
      <RadioCardTop>
        <DragHandle>⋮ ⋮ ⋮</DragHandle>
        <CollapseBtn type="button" title="Collapse">—</CollapseBtn>
      </RadioCardTop>
      <TitleInput
        value={title}
        onChange={handleTitleChange}
        onFocus={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      />
      <div style={{ marginTop: 12 }}>
        {options.map((opt, idx) => (
          <RadioOptionRow key={`${opt}-${idx}`}>
            <OptionIconBtn
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (showDeleteIcon(idx)) handleDeleteOption(idx);
                else if (showAddIcon(idx)) handleAddBefore(idx);
              }}
              title={showDeleteIcon(idx) ? 'Delete item' : showAddIcon(idx) ? 'Add item before' : undefined}
            >
              {showDeleteIcon(idx) ? (
                <MinusCircleIcon color="#e74c3c" size={20} />
              ) : showAddIcon(idx) ? (
                <PlusCircleIcon color={theme.colors.primary} size={20} />
              ) : (
                <span style={{ width: 20, height: 20, flexShrink: 0 }} />
              )}
            </OptionIconBtn>
            <RadioBullet />
            <span style={{ flex: 1 }}>{opt}</span>
            {opt === 'Other (describe)' && (
              <TextInput placeholder="" style={{ flex: 1, maxWidth: 200 }} onClick={(e) => e.stopPropagation()} />
            )}
          </RadioOptionRow>
        ))}
      </div>
      <QuestionFooter>
        <QuestionTypeBtn type="button" onClick={(e) => e.stopPropagation()}>
          Radio Button Group
          <ChevronDownIcon size={14} />
        </QuestionTypeBtn>
        <FooterActions>
          <FooterActionBtn
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              callbacks?.onDuplicateQuestion(q.id);
            }}
          >
            <DuplicateIcon size={14} />
            Duplicate
          </FooterActionBtn>
          <FooterActionBtn
            type="button"
            $active={q.required}
            onClick={(e) => {
              e.stopPropagation();
              callbacks?.onUpdateQuestion(q.id, { required: !q.required });
            }}
          >
            <RequiredIcon size={14} />
            Required
          </FooterActionBtn>
          <FooterActionBtn
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              callbacks?.onDeleteQuestion(q.id);
            }}
          >
            <TrashIcon size={14} />
            Delete
          </FooterActionBtn>
        </FooterActions>
      </QuestionFooter>
    </QuestionCard>
  );
}

function RatingQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <RatingScale>
        {[1, 2, 3, 4, 5].map((n) => (
          <RatingOption key={n}>
            <input type="radio" name={`rating-${q.id}`} value={n} style={{ display: 'none' }} />
            {n}
          </RatingOption>
        ))}
      </RatingScale>
    </QuestionCard>
  );
}

function SliderQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <SliderTrack>
        <SliderMarks>
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100</span>
        </SliderMarks>
        <SliderInput min={0} max={100} defaultValue={50} />
      </SliderTrack>
    </QuestionCard>
  );
}

function CheckboxQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  const options = ['Select All', ...defaultOptions];
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      {options.map((opt) => (
        <CheckboxLabel key={opt}>
          <CheckboxInput name={`${q.id}-${opt}`} value={opt} />
          {opt}
          {opt === 'Other (describe)' && <TextInput placeholder="" style={{ marginLeft: 8, flex: 1, maxWidth: 200 }} />}
        </CheckboxLabel>
      ))}
    </QuestionCard>
  );
}

function DropdownQuestion({ q, selected, multi }: { q: Question; selected?: boolean; multi?: boolean }) {
  const options = q.options ?? defaultOptions;
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <SelectInput multiple={multi}>
        <option>Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </SelectInput>
    </QuestionCard>
  );
}

function BooleanQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <YesNoButtons>
        <YesNoBtn type="button">No</YesNoBtn>
        <YesNoBtn type="button" $active>
          Yes
        </YesNoBtn>
      </YesNoButtons>
    </QuestionCard>
  );
}

function FileQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <DropZone>
        Drag and drop a file here or click the button below to select a file to upload.
        <br />
        <DropZoneButton type="button">Select File</DropZoneButton>
      </DropZone>
    </QuestionCard>
  );
}

function ImagePickerQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <DropZone>
        Drag and drop an image here or click the button below and choose an image to upload.
        <br />
        <DropZoneButton type="button">Choose Image</DropZoneButton>
      </DropZone>
    </QuestionCard>
  );
}

function RankingQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  const items = q.options ?? ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      {items.map((item) => (
        <RankingItem key={item}>
          <RankingHandle>⋮⋮</RankingHandle>
          {item}
          <RankingRemove type="button">×</RankingRemove>
        </RankingItem>
      ))}
    </QuestionCard>
  );
}

function TextQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <TextInput placeholder="" />
    </QuestionCard>
  );
}

function CommentQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <TextAreaInput placeholder="" />
    </QuestionCard>
  );
}

function MultipleTextQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  const fields = q.options ?? ['text1', 'text2'];
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      {fields.map((f) => (
        <MultipleTextRow key={f}>
          <MultipleTextLabel>{f}</MultipleTextLabel>
          <TextInput placeholder="" />
        </MultipleTextRow>
      ))}
    </QuestionCard>
  );
}

function PanelQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title || 'Panel'}</QuestionTitle>
      <QuestionDescription>Add questions inside this panel</QuestionDescription>
    </QuestionCard>
  );
}

function HtmlQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <div style={{ fontSize: 13, color: theme.colors.textMuted }}>HTML content</div>
    </QuestionCard>
  );
}

function ExpressionQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <div style={{ fontSize: 13, color: theme.colors.textMuted }}>Expression (read-only)</div>
    </QuestionCard>
  );
}

function ImageQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <div style={{ color: theme.colors.textMuted, fontSize: 13 }}>Image placeholder</div>
    </QuestionCard>
  );
}

function SignatureQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <SignaturePad />
    </QuestionCard>
  );
}

function MatrixQuestion({ q, selected }: { q: Question; selected?: boolean }) {
  return (
    <QuestionCard $selected={selected}>
      <QuestionTitle>{q.title}</QuestionTitle>
      <div style={{ color: theme.colors.textMuted, fontSize: 13 }}>Matrix question</div>
    </QuestionCard>
  );
}

export function QuestionComponent({
  question,
  selected,
  callbacks,
}: {
  question: Question;
  selected?: boolean;
  callbacks?: QuestionCallbacks;
}) {
  const q = question;
  switch (q.type) {
    case 'radiogroup':
      return <RadioGroupQuestion q={q} selected={selected} callbacks={callbacks} />;
    case 'rating':
      return <RatingQuestion q={q} selected={selected} />;
    case 'slider':
      return <SliderQuestion q={q} selected={selected} />;
    case 'checkbox':
      return <CheckboxQuestion q={q} selected={selected} />;
    case 'dropdown':
      return <DropdownQuestion q={q} selected={selected} />;
    case 'dropdown-multi':
      return <DropdownQuestion q={q} selected={selected} multi />;
    case 'boolean':
      return <BooleanQuestion q={q} selected={selected} />;
    case 'file':
      return <FileQuestion q={q} selected={selected} />;
    case 'imagepicker':
      return <ImagePickerQuestion q={q} selected={selected} />;
    case 'ranking':
      return <RankingQuestion q={q} selected={selected} />;
    case 'text':
      return <TextQuestion q={q} selected={selected} />;
    case 'comment':
      return <CommentQuestion q={q} selected={selected} />;
    case 'multipletext':
      return <MultipleTextQuestion q={q} selected={selected} />;
    case 'panel':
    case 'paneldynamic':
      return <PanelQuestion q={q} selected={selected} />;
    case 'matrix':
    case 'matrixdropdown':
    case 'matrixdynamic':
      return <MatrixQuestion q={q} selected={selected} />;
    case 'html':
      return <HtmlQuestion q={q} selected={selected} />;
    case 'expression':
      return <ExpressionQuestion q={q} selected={selected} />;
    case 'image':
      return <ImageQuestion q={q} selected={selected} />;
    case 'signature':
      return <SignatureQuestion q={q} selected={selected} />;
    default:
      return <QuestionCard $selected={selected}><QuestionTitle>{q.title}</QuestionTitle></QuestionCard>;
  }
}
