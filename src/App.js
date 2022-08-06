import './App.css';
import PhotoItem from './components/PhotoItem';
import SelfInformation from './components/SelfInformation';
import imageSrc01 from './img/pictures/img_01.jpg';
import imageSrc02 from './img/pictures/img_02.jpg';
import imageSrc03 from './img/pictures/img_03.jpg';

function App() {
  return (
    <div>
      <header>
      </header>
      <body>
        <SelfInformation />
        <div className='galleryBlock'>
          <PhotoItem itemsImageSrc={imageSrc01} itemsTitle='Carpathians' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc02} itemsTitle='Bear' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem itemsImageSrc={imageSrc03} itemsTitle='Lake' itemsDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae neque dicta repellendus reiciendis magni vitae animi, asperiores doloremque illo ullam, sunt odit assumenda! Hic eveniet nemo iste numquam odit!' />
          <PhotoItem />
          <PhotoItem />
        </div>
      </body>
    </div>
  );
}

export default App;
