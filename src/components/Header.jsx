import React from 'react';
import { Jumbotron,} from 'reactstrap';


const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Open Library</h1>
        <p className="lead">Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas. Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu.
        Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar. Mereka dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.</p>
        <p className="lead">FIND YOUR BOOKS HERE !! <i class="fa-solid fa-cloud-arrow-down"></i>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;