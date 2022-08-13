import './App.css';
import PhotoItem from './components/PhotoItem';
import SelfInformation from './components/SelfInformation';
import NavBar from './components/NavBar';
import itemList from './components/itemList';

function App() {
  return (
    <div>
      <header>
        <SelfInformation />
        <NavBar />
      </header>
      <main>
        <div className='galleryBlock'>
          {itemList.map(item => <PhotoItem key={item.title} itemsTitle = {item.title} itemsDescription = {item.description} itemsImageSrc = {item.image} itemCategory = {item.category} itemRating = {item.rating} itemDate = {item.date}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
