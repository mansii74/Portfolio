import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;