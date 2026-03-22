import { DashBoard } from './pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans">

      <main className="flex-grow flex items-stretch">
        <DashBoard />
      </main>
    </div>
  );
}

export default App;
