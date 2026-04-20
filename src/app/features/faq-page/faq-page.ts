import { Component } from '@angular/core';
import { Faq } from '@app/core/interfaces/faq.interface';

@Component({
  selector: 'faq-page',
  imports: [],
  standalone: true,
  templateUrl: './faq-page.html',
})
export default class FaqPage {
  faqs: Faq[] = [
    {
      question: '¿El curso es para todas las cátedras?',
      answer:
        '¡Sí! No importa si sos de cátedra 1, 2 o 3, nosotras damos el contenido para todas las cátedras, haciendo diferencias entre bibliografías y contenido específico de estas.',
    },
    {
      question: '¿Si no puedo conectarme a las clases en vivo, puedo verlas grabadas?',
      answer:
        '¡Obvio! Siempre van a tener la opción de presenciar la clase en vivo, con el contenido actualizado del año, pero entendemos que no todos pueden acceder en un determinado horario, por lo que absolutamente TODAS nuestras clases son grabadas y subidas a un drive para que las puedas ver todas las veces que quieras.',
    },
    {
      question:
        '¿El contenido del curso me alcanza para aprobar la materia o necesito otro material?',
      answer:
        'Nosotras siempre vamos a recomendar la utilización de la bibliografía oficial de cada cátedra, pero contamos con la tranquilidad de que en el curso les ofrecemos TODA la información (y más) que ustedes necesitan para cada trabajo práctico semanal como para rendir los parciales/finales. ¡El contenido del curso es más que suficiente!',
    },
    {
      question: '¿El curso es solamente para anatomía de la UBA?',
      answer:
        'Nosotras nos enfocamos en la UBA pero también tenemos agenda abierta para otras universidades. ¡Contactate con nosotras y consultanos!',
    },
  ];
}
