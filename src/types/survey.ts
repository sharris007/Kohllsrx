export type QuestionType =
  | 'radiogroup'
  | 'rating'
  | 'slider'
  | 'checkbox'
  | 'dropdown'
  | 'dropdown-multi'
  | 'boolean'
  | 'file'
  | 'imagepicker'
  | 'ranking'
  | 'text'
  | 'comment'
  | 'multipletext'
  | 'panel'
  | 'paneldynamic'
  | 'matrix'
  | 'matrixdropdown'
  | 'matrixdynamic'
  | 'html'
  | 'expression'
  | 'image'
  | 'signature';

export interface Question {
  id: string;
  type: QuestionType;
  name: string;
  title: string;
  options?: string[];
  required?: boolean;
}
