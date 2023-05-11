import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Mainbody from './components/Mainbody';
import Template from './components/Template';
import Formheader from './components/Formheader';
import Centeredtabs from './components/Centeredtabs';
import Questionform from './components/Questionform';

const LayoutHome = () => {
  return (
    <>
      <Header />
      <Template />
      <Mainbody />
    </>
  );
};

const LayoutForm = () => {
  return (
    <>
      <Formheader />
      <Centeredtabs />
      <Questionform />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LayoutHome />} />
          <Route path='/form/:id' element={<LayoutForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
