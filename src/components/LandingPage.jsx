import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCarouselCaption,
} from "mdbreact";


const CarouselPage = () => {
  return (
  
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/3747464/pexels-photo-3747464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide" 
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">Welcome to Zona Literasi</h3>
            <h6>Sampai saat ini, kami berhasil mengumpulkan berbagai jenis buku dan akan terus bertambah seiring perkembangan situs ini</h6>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
                alt="Second slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">lots Of Books And Lets Reading</h3>
            <h6>Kami menyediakan lebih dari 50,000 ebook yang dapat diakses secara gratis oleh siapapun dan dimanapun</h6>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Third slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">Ultimate Guide To Free Ebooks</h3>
            <h6>Melalui website ini anda bisa mengakses berbagai jenis buka seusai dengan yang kamu inginkan</h6>
          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  
  );
}

export default CarouselPage;