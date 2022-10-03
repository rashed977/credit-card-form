import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  display: boolean = false
  doneDisplay: boolean = true
  constructor(private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log(this.visa)
  }
  visa = this.fb.group({
    name: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.pattern("^[0-9 &&' ']*$") ,
    Validators.maxLength(19), Validators.minLength(19)]],
    mm: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
    yy: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
    cvc: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
  })

  onSubmit(){
    // console.log(this.visa)
    this.display = !this.display
    this.doneDisplay = !this.doneDisplay
  }
  space(value:string){

    // console.log(value.replace(/.{2}/g, '$&c'));
    if (value.length > 0) {

      if (value.length % 4 == 0) {
        // console.log(value,'before');
        // this.number?.setValue(' ')
        // value = value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();



      }
  }

  }

  get name(){
  return this.visa.get('name')
  }
  get number(){
    return this.visa.get('number')
  }
  get mm(){
    return this.visa.get('mm')
  }
  get yy(){
    return this.visa.get('yy')
  }
  get cvc(){
    return this.visa.get('cvc')
  }
}
export interface Visa{
  name: string ,
  number: string,
  mm: number  ,
  yy: number  ,
  cvc: number
}
