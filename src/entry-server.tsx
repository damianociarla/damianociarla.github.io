import { renderToString } from 'react-dom/server';
import { App } from './App';
import type { Language } from './content';

export function render(language: Language) {
  return renderToString(<App initialLanguage={language} staticRender />);
}
