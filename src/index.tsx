import './styles/global.scss';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root'),
);
