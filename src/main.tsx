import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import './styles.css';
import App from './App';

const root = document.getElementById('root')!;
const isPrerendered = root.hasChildNodes();
const application = (
  <StrictMode>
    <App staticRender={isPrerendered} />
  </StrictMode>
);

if (isPrerendered) {
  hydrateRoot(root, application);
} else {
  createRoot(root).render(application);
}
