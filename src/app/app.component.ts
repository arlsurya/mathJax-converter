import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const MathJax: {
  Hub: {
    Queue: (param: Object[]) => void;
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'mathJax-converter';
  public data: any = '';
  public converterForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.converterForm = fb.group({
      text:[null,[Validators.required]],
    })

  } 

  getMathExpression(text:any): string {
    console.log(text)
    let data = '\\sqrt{x}'
    console.log('====')
    console.log(data)
    console.log(text)
    console.log('====')


    return data;
  }

  handleFormSubmit(data:any){
    console.log(data)
    console.log(this.converterForm.value)
   
  }
}
