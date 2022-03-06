import { Buggy } from './Buggy';
import { ErrorBoundary } from './error-boundary';
import { Loader } from './loader';

function App() {
  return (
    <div className='App bg-indigo-400'>
      <Loader />
      <ErrorBoundary>
        <Buggy />
      </ErrorBoundary>
    </div>
  );
}

export default App;
