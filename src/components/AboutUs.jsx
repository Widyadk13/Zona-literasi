import React from 'react'

function AboutUs() {
    return (
        <div>
            <br />
            <br />
            <section className="page-section" id="aboutUs" mx="auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center rounded">
                            <h2>
                                About Us
                            </h2>
                            <br />
                            <div class="d-flex justify-content-sm-lg-xl-around">
                                <div href="">
                                    <img
                                        alt="ebook"
                                        src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        width="500"
                                        height="310"
                                        className="d-inline-block align-top rounded-pill"
                                    />
                                </div>
                                <h4>
                                    Perpustakaan digital memberikan akses ke banyak konten dengan sumber daya dan pilihan yang berpotensi tak terbatas.
                                    Batasan utama perpustakaan tradisional diwakili oleh ruang fisik: buku menghabiskan banyak ruang dan orang sering kali harus berjalan berkeliling untuk mencari materi tertentu. Berkat Internet dan penyimpanan cloud, perpustakaan digital mengatasi keterbatasan ini, memperluas wawasan siswa dalam belajar.
                                    Semua orang dapat mengakses sejumlah besar pengetahuan dan berbagi konten dengan orang lain, memfasilitasi perluasan pendidikan.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default AboutUs;