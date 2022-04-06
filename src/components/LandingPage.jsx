import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
    {
        src: 'https://images.pexels.com/photos/3747464/pexels-photo-3747464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        altText: 'Slide 1',
        caption: 'Sampai saat ini, kami berhasil mengumpulkan berbagai jenis buku dan akan terus bertambah seiring perkembangan situs ini.',
        header: 'Welcome to Zona Literasi'
    },
    {
        src: 'https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        altText: 'Slide 2',
        caption: 'Kami menyediakan lebih dari 50,000 ebook yang dapat diakses secara gratis oleh siapapun dan dimanapun.',
        header: 'lots Of Books And Lets Reading'
    },
    {
        src: 'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        altText: 'Slide 2',
        caption: 'Melalui website ini anda bisa mengakses berbagai jenis buka seusai dengan yang kamu inginkan.',
        header: 'The Ultimate Guide To Free Ebooks'
    }
];

const Landingpage = () => <UncontrolledCarousel items={items} />;

export default Landingpage;