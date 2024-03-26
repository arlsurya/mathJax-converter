import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathJax-converter';

  convert() {
 
  }
  getMathExpression(): string {
    return "\\( \\sqrt{16} = 4 \\)";
  }
}
