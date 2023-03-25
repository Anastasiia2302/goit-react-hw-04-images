import {Modal} from '../Modal/Modal';
import { useState } from 'react'


export const ImageGalleryItem = ({webformatURL, tags, largeImageURL} ) => {

const [ isModalOpen, setIsModalOpen ] = useState(false) 

const toggleModal = () => {
    setIsModalOpen(prevState => !prevState)
}

return (
    <li >
      <img 
        src={webformatURL}
        alt={tags}
        width="430"
        height="210"
        loading="lazy"
        onClick={toggleModal}
      />

      {isModalOpen && (
        <Modal
          modalImg={largeImageURL}
          tags={tags}
          closeModal={toggleModal}
        />
      )}
    </li>
  );
}











// }





