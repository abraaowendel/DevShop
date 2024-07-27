import './App.css'
import { Header } from './components/header';
import { Footer } from "./components/footer";
import MainRoutes from './routers/MainRoutes';

function App() {

  return (
    <main>
      <Header/>
      <MainRoutes/>
      <Footer/>
    </main>
  )
}

export default App
