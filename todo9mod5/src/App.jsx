import Header from "./components/Header/Header"
import Form from "./components/Form/Form";
import Produtos from "./components/Products/Products.jsx";
import Share from "./components/Share/Share";
import Footer from './components/Footer/Footer';
import 'normalize.css';
import styles from './App.module.css';
import Section from "./components/Section/Section";

function App() {

  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <section className={styles.section}>
          <Section/>
          <Form/>
        </section>
        <Produtos/>
        <Share/>
      </main>
      <Footer/>
    </div>
  )
}

export default App