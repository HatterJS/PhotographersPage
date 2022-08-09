import './App.css';
import PhotoItem from './components/PhotoItem';
import SelfInformation from './components/SelfInformation';
import NavBar from './components/NavBar';
import imageSrc01 from './img/pictures/img_01.jpg';
import imageSrc02 from './img/pictures/img_02.jpg';
import imageSrc03 from './img/pictures/img_03.jpg';
import imageSrc04 from './img/pictures/img_04.jpg';
import imageSrc05 from './img/pictures/img_05.jpg';

function App() {
  return (
    <div>
      <header>
      </header>
      <body>
        <SelfInformation />
        <nav>
          <NavBar />
        </nav>
        <div className='galleryBlock'>
          <PhotoItem itemsImageSrc={imageSrc01} itemsTitle='Carpathians' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc02} itemsTitle='Bear' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc03} itemsTitle='Lake' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc04} itemsTitle='Lake' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc05} itemsTitle='Lake' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
        </div>
      </body>
    </div>
  );
}

export default App;
