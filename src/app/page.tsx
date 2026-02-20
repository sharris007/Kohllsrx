'use client';

import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import CreatorTabs from '@/components/CreatorTabs';
import QuestionToolbox from '@/components/QuestionToolbox';
import Canvas from '@/components/Canvas';
import PropertiesPanel from '@/components/PropertiesPanel';
import { LABEL_TO_TYPE } from '@/lib/questionMapping';
import type { Question } from '@/types/survey';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainArea = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function createQuestion(label: string, index: number): Question {
  const type = LABEL_TO_TYPE[label] ?? 'text';
  const name = `question${index}`;
  const base: Question = {
    id: `${name}-${Date.now()}`,
    type,
    name,
    title: name,
  };
  if (type === 'multipletext') {
    base.options = ['text1', 'text2'];
  }
  if (type === 'radiogroup' || type === 'dropdown' || type === 'dropdown-multi' || type === 'ranking') {
    base.options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'None', 'Other (describe)'];
  }
  if (type === 'checkbox') {
    base.options = ['Select All', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'None', 'Other (describe)'];
  }
  return base;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  const handleAddQuestion = useCallback((label?: string) => {
    const typeLabel = label ?? 'Radio Button Group';
    const q = createQuestion(typeLabel, questions.length + 1);
    setQuestions((prev) => [...prev, q]);
    setSelectedQuestionId(q.id);
  }, [questions.length]);

  const handleToolboxAdd = useCallback((label: string) => {
    handleAddQuestion(label);
  }, [handleAddQuestion]);

  const handleUpdateQuestion = useCallback((id: string, updates: Partial<Question>) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  }, []);

  const handleDuplicateQuestion = useCallback((id: string) => {
    const idx = questions.findIndex((q) => q.id === id);
    if (idx === -1) return;
    const orig = questions[idx];
    const copy: Question = {
      ...orig,
      id: `${orig.name}-${Date.now()}`,
      name: `${orig.name}_copy`,
      title: `${orig.title} (copy)`,
    };
    setQuestions((prev) => [...prev.slice(0, idx + 1), copy, ...prev.slice(idx + 1)]);
    setSelectedQuestionId(copy.id);
  }, [questions]);

  const handleDeleteQuestion = useCallback((id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    setSelectedQuestionId((current) => (current === id ? null : current));
  }, []);

  const questionCallbacks = {
    onUpdateQuestion: handleUpdateQuestion,
    onDuplicateQuestion: handleDuplicateQuestion,
    onDeleteQuestion: handleDeleteQuestion,
  };

  return (
    <AppLayout>
      <Header />
      <CreatorTabs />
      <MainArea>
        <QuestionToolbox onAddQuestion={handleToolboxAdd} />
        <Canvas
          questions={questions}
          selectedQuestionId={selectedQuestionId}
          onSelectQuestion={setSelectedQuestionId}
          onAddQuestion={() => handleAddQuestion()}
          questionCallbacks={questionCallbacks}
        />
        <PropertiesPanel selectedQuestion={questions.find((q) => q.id === selectedQuestionId)} />
      </MainArea>
    </AppLayout>
  );
}
