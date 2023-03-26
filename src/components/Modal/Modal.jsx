import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styled';


const modalRoot = document.getElementById('modal');

export const Modal = ({closeModal, tags, modalImg}) => {


  const handleBackdropClick = e => {
  
    if(e.currentTarget === e.target) closeModal()
  }
  
  useEffect(() => {
  const handleKeyDown = e => {
    if (e.key === 'Escape') closeModal()
  }
    window.addEventListener('keydown', handleKeyDown)
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal])






  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBlock>
        <ModalImg src={modalImg} alt={tags} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
}
