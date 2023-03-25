import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styled';


const modalRoot = document.getElementById('modal');

export const Modal = ({closeModal, tags, modalImg}) => {


// eslint-disable-next-line react-hooks/exhaustive-deps
const handleKeyDown = e => {
  if (e.key === 'Escape') closeModal()
}


const handleBackdropClick = e => {
  
  if(e.currentTarget === e.target) closeModal()
}

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [handleKeyDown])




  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBlock>
        <ModalImg src={modalImg} alt={tags} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
}
