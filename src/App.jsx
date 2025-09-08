import Header from './components/Header';
import Clock from './components/Clock'
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <Clock />
      </div>
    </>
  )
};

export default App;