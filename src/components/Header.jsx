import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";

const Header = () => {
  return (
    <MDBContainer className='mt-4 text-center'fluid>
    
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Welcome to Open Library</h2>
            <p className="lead">
            Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas. Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu.
        Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar. Mereka dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.
            </p>
            <hr className="my-2" />
            <p className="lead">FIND YOUR BOOKS HERE !! <i class="fa-solid fa-cloud-arrow-down"></i>
        </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Header;