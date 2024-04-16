import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<FrontPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
