'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { PlusIcon, MoreIcon } from './icons';
import { QuestionComponent, type QuestionCallbacks } from './questions';
import type { Question } from '@/types/survey';

const CanvasArea = styled.main`
  flex: 1;
  min-width: 0;
  background: ${theme.colors.backgroundLight};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
`;

const QuestionsContainer = styled.div`
  flex: 1;
  padding: 24px 48px 48px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const SurveyHeader = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};
`;

const SurveyTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const SurveyDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
`;

const Illustration = styled.div`
  margin-bottom: 32px;
  color: ${theme.colors.border};
  opacity: 0.8;
`;

const EmptyIllustrationSvg = () => (
  <svg width="200" height="160" viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="40" y="20" width="80" height="100" rx="4" strokeDasharray="4 2"/>
    <rect x="50" y="35" width="60" height="8" rx="2"/>
    <rect x="50" y="55" width="50" height="6" rx="2"/>
    <rect x="50" y="70" width="55" height="6" rx="2"/>
    <rect x="50" y="85" width="45" height="6" rx="2"/>
    <rect x="100" y="110" width="50" height="8" rx="4"/>
    <path d="M130 70 L150 50 L170 70 L170 120 L130 120 Z" strokeDasharray="4 2"/>
    <rect x="140" y="80" width="20" height="4" rx="1"/>
    <rect x="140" y="90" width="25" height="4" rx="1"/>
    <circle cx="155" cy="105" r="8"/>
  </svg>
);

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  margin-bottom: 32px;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const AddQuestionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${theme.shadows.sm};
  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;

const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${theme.shadows.sm};
  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;

const QuestionWrapper = styled.div`
  cursor: pointer;
`;

interface CanvasProps {
  questions: Question[];
  selectedQuestionId: string | null;
  onSelectQuestion: (id: string | null) => void;
  onAddQuestion: () => void;
  questionCallbacks?: QuestionCallbacks;
}

export default function Canvas({
  questions,
  selectedQuestionId,
  onSelectQuestion,
  onAddQuestion,
  questionCallbacks,
}: CanvasProps) {
  if (questions.length === 0) {
    return (
      <CanvasArea>
        <EmptyState>
          <Illustration>
            <EmptyIllustrationSvg />
          </Illustration>
          <Title>Your form is empty</Title>
          <Subtitle>Drag an element from the toolbox or click the button below.</Subtitle>
          <ButtonRow>
            <AddQuestionBtn onClick={onAddQuestion}>
              <PlusIcon size={18} />
              Add Question
            </AddQuestionBtn>
            <MoreBtn>
              <MoreIcon size={18} />
            </MoreBtn>
          </ButtonRow>
        </EmptyState>
      </CanvasArea>
    );
  }

  return (
    <CanvasArea>
      <QuestionsContainer>
        <SurveyHeader>
          <SurveyTitle>Survey Title</SurveyTitle>
          <SurveyDescription>Description</SurveyDescription>
        </SurveyHeader>
        {questions.map((q) => (
          <QuestionWrapper
            key={q.id}
            onClick={() => onSelectQuestion(q.id)}
          >
            <QuestionComponent
              question={q}
              selected={selectedQuestionId === q.id}
              callbacks={questionCallbacks}
            />
          </QuestionWrapper>
        ))}
        <ButtonRow style={{ marginTop: 24, justifyContent: 'flex-start' }}>
          <AddQuestionBtn onClick={onAddQuestion}>
            <PlusIcon size={18} />
            Add Question
          </AddQuestionBtn>
          <MoreBtn>
            <MoreIcon size={18} />
          </MoreBtn>
        </ButtonRow>
      </QuestionsContainer>
    </CanvasArea>
  );
}
