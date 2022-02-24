import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log('Creating h1 tag');

    const h1 = document.createElement('h1');
    h1.style = 'text-align: center';
    h1.innerText = `Hola ${nombre}`;

    document.body.append( h1 );

    // Img
    const image = document.createElement('img');
    image.src = webpacklogo;
    image.alt = 'webpacklogo';

    document.body.append( image );
};
