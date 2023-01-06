import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  public formContacto!:FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
      this.formContacto =this.formBuilder.group({
        name:['',[
          Validators.required,
          Validators.minLength(5)
        ]],
        email:['',[
          Validators.required,
          Validators.email
        ]],
        mensaje:['',[
          Validators.required,
          Validators.minLength(6)
        ]],
      })
  }
  sms=false
  send(){
    this.sms=true
  }


}
