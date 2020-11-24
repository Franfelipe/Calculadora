import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  result: any = "";
  value1: number = 0
  value2: number = 0
  fields = ["AC", "+/-", " % ", " / ", "7","8", "9", " X ","4", "5", "6", " - ", "1", "2", "3", " + ","0", "."];

  getField(field: string){
    if(field == "AC"){
      this.Clear();
    } else if(field == "+/-"){
      this.setNegativo();
    }else{
      this.result += field
    }
  }

  calculate(){
      var calculo = this.result.split(" ")
      console.log(calculo)
      this.value1 = Number(calculo[0]);
      this.value2 = Number(calculo[2]);
      switch(calculo[1]){
        case "+":
          this.result = this.value1 + this.value2;
          break
        case "-":
          this.result = this.value1 - this.value2;
          break;
        case "X":
          this.result = this.value1 * this.value2;
          break;
        case "/":
          this.result = this.value1 / this.value2;
          break;
      }
  }

  private Clear(){
    this.result = "";
  }

  private setNegativo(){
    this.result += "-";
  }
}
