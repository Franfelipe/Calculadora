import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  result: any;
  fields = ["AC", "+/-", "%", "/", "7","8", "9", "X","4", "5", "6", "-", "1", "2", "3", "+","0", "."]


  getField(field: string){
    if(field == 'AC'){
      this.result = 0
    }else{
      this.result = field
    }

  }
}
