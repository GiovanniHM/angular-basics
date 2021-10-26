import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';

  arrayEmos: string[] =[ '😂' , '🐦', '🐳','🌮', '💚']
  newEmoji: string;

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
