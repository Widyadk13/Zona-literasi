import React, { useState } from 'react';
import { ModalFooter, Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';


const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink,
  infoLink
}) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card body inverse color="warning" style={{ width: '250px' }} className='m-auto'>
      <CardImg
        top
        style={{ width: '100%', height: '250px' }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button color="primary" onClick={toggle}>MORE INFO</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}></span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <ModalFooter>
            <Button color="primary" href={previewLink}>Read more</Button>{' '}
            <Button color="primary" href={infoLink}>Info Link</Button>
          </ModalFooter>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;
