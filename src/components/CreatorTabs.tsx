'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { UndoIcon, RedoIcon, PencilIcon, SettingsIcon, HelpIcon, MoreIcon } from './icons';

const TabsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 48px;
  background: ${theme.colors.backgroundLight};
  border-bottom: 1px solid ${theme.colors.border};
`;

const TabsList = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Tab = styled.button<{ $active?: boolean }>`
  padding: 12px 16px;
  background: none;
  border: none;
  font-size: 14px;
  color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.text)};
  cursor: pointer;
  position: relative;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  &:hover {
    color: ${theme.colors.primary};
  }
  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      height: 2px;
      background: ${theme.colors.primary};
      border-radius: 1px;
    }
  `}
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconBtn = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 4px;
  color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.textSecondary)};
  cursor: pointer;
  &:hover {
    background: ${theme.colors.borderLight};
    color: ${theme.colors.primary};
  }
`;

const tabs = ['Designer', 'Preview', 'Themes', 'Logic', 'JSON Editor', 'Translations', 'Embed Survey'];

export default function CreatorTabs() {
  return (
    <TabsBar>
      <TabsList>
        {tabs.map((tab, i) => (
          <Tab key={tab} $active={i === 0}>
            {tab}
          </Tab>
        ))}
        <IconBtn style={{ marginLeft: 4 }}>
          <MoreIcon size={18} />
        </IconBtn>
      </TabsList>
      <ActionIcons>
        <IconBtn title="Undo">
          <UndoIcon />
        </IconBtn>
        <IconBtn title="Redo">
          <RedoIcon />
        </IconBtn>
        <IconBtn title="Edit">
          <PencilIcon />
        </IconBtn>
        <IconBtn $active title="Settings">
          <SettingsIcon active />
        </IconBtn>
        <IconBtn title="Help">
          <HelpIcon />
        </IconBtn>
      </ActionIcons>
    </TabsBar>
  );
}
