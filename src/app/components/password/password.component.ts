import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  //TODO: 👉 password, passwordChange "Change" --> porque si! 

  @Input() password: string = ''; //TODO: Recibe datos de entrada PADRE --> HIJO
  @Output() passwordChange = new EventEmitter<string>(); //TODO: Emite evento hacia el padre HIJO --> PADRE

  checkMin!: boolean;
  checkUppercase!: boolean;
  checkLowercase!: boolean;

  updateValue(value: any) {
    const text = value?.target?.value || '';
    this.password = text || '';
    this.checkString(text)
    this.passwordChange.emit(text);
  }

  //TODO: {{}} --> Interpolacion Forma de mostrar
  //TODO: [] ---> Binding Forma de pasar, Usarlo cuando NO es String
  //TODO: Los binding reciben template expression
  //TODO


  constructor() { }

  ngOnInit(): void {
  }

  checkString(value: string): void {
    this.checkMin = /^(?=.{8,})/.test(value);
    this.checkUppercase = /(?=.*[A-Z])/.test(value);
    this.checkLowercase = /(?=.*[a-z])/.test(value);
  }

}
