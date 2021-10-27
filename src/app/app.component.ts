import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  arrayEmos: string[] =[ '😂' , '🐦', '🐳','🌮', '💚']
  newEmoji: string;
  nameP: string;
  windthImg =10;

  products :Product[] =[
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'

    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


  btnStatus = false;
  progressValor = 33;
  edad = 1;
  namePerson = 'Roy';
  namePerson2 = 'Tales';

  config = {
    btnStatus: false,
    progressValor: 33
  }

  toogleButton(){
    this.btnStatus = !this.btnStatus;
  }

  masViejo(){
    this.edad++;
    console.log(this.edad);
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.namePerson = element.value;

  }

  addEmoji(){
    this.arrayEmos.push(this.newEmoji)
    this.newEmoji = '';

  }

  DeletEmoji(index: number){
    this.arrayEmos.splice(index, 1);

  }

}
