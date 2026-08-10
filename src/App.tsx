import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Works } from './components/Works/Works';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Works />
        <Contacts />
      </main>
    </>
  );
}

export default App;