import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { People } from './people.model';
import { PeopleService } from './people.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'selpe-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleLists : People  
  countList:number  
  isEdit: boolean
  personFormGroup: FormGroup
  idPerson: string

  public strName: string;
  public strCPF: string;
  public strPhone: string;

  //Masks
  public cpfMask = [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/,];
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private peopleService: PeopleService,
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() {  
    this.isEdit = false;
    this.peopleService.getAllPeople(this.peopleLists).subscribe(peopleList => {
      this.peopleLists = peopleList
      this.countList = Object.keys(this.peopleLists).length;
    });    
  }

  createForm() {
    this.personFormGroup = this.fb.group({
      name:    ['',[Validators.required]],
      cpf:     ['',[Validators.required]],
      phone:   ['',[Validators.required]]      
    }); 
  }

  get f() { return this.personFormGroup.controls; }

  onReset(){    
    this.personFormGroup.reset();    
  }

  onSubmit() {    
    console.log(this.isEdit && (this.idPerson.length > 0));   
    if(this.isEdit && (this.idPerson.length > 0)){
      this.peopleService.putPeersonById(this.idPerson,this.personFormGroup.value).subscribe(peopleList => {
        this.isEdit = false;            
        alert("Pessoa Atualizada com sucesso!");
        //window.location.reload();
      });
    }else{
      this.peopleService.postPeerson(this.personFormGroup.value).subscribe(peopleList => {
        this.isEdit = false;            
        alert("Pessoa Criada com sucesso!");
        //window.location.reload();
      });
    }    
  }

  onEditPerson(person: People){
    this.isEdit = true;
    console.log(person);
    this.personFormGroup.value["name"] = person.name
    this.personFormGroup.value["cpf"] = person.cpf
    this.personFormGroup.value["phone"] = person.phone
    console.log(this.personFormGroup.value);
    this.idPerson = person.id;
    this.strCPF = person.cpf;
    this.strName = person.name;
    this.strPhone = person.phone;
  }

  onRemovePerson(id : string){    
    this.peopleService.deletePersonById(id).subscribe(resp => {
      alert("Pessoa removida com sucesso!");
      window.location.reload();
    })
  }
}