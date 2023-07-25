import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Packs } from './modules/Packs';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Packs />
  </StrictMode>
);
