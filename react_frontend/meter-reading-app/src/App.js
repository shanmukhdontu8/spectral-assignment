import "./App.css";
import MeterDataPlot from "./components/MeterDataPlot";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MeterDataPlot />
      </QueryClientProvider>
    </div>
  );
}

export default App;
