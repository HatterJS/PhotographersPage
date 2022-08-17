import './App.css';
import SelfInformation from './components/SelfInformation';
import NavBar from './components/NavBar';
import {ReactComponent as ArrowTop} from './img/ico/up-arrow.svg'

function App() {
  return (
    <div>
      <header>
        <SelfInformation />
        <NavBar />
      </header>
      <main>
        <div id="scrollTop" onClick={scrollTop} style={{opacity: '0%'}}>
          <ArrowTop id='arrowTop'/>
        </div>
      </main>
    </div>
  );
}

window.onscroll = () => {
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 500) {
    scrollTop.style.opacity = '100%';
  } else {
    scrollTop.style.opacity = '0%';
  }
}
function scrollTop() {
  window.scrollTo(0, 0);
}

export default App;