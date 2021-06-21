import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 
reactform:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.reactform =this.formbuilder.group({
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',Validators.required),
      id:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      items:new FormArray([
        this.formbuilder.group({
          deg:new FormControl('',Validators.required),
          ins:new FormControl('',Validators.required),
          year:new FormControl('',Validators.required),
          percent:new FormControl('',Validators.required),
        })
      ]),
      Experiences:new FormArray([
        this.formbuilder.group({
          Des:new FormControl(''),
          com:new FormControl,
          exp:new FormControl('')
        })
      ])
      
     });
  }
  get itemsControls(){
return (<FormArray>this.reactform.get('items')).controls;
  }

  get ExpsControls(){
    return (<FormArray>this.reactform.get('Experiences')).controls;
      }
  adduser(){
    const control=new FormControl(null,[Validators.required]);
     (<FormArray>this.reactform.get('items')).push(control); 
    
    }
    removeuser(i:number){
      let arr=this.reactform.controls['items'] as FormArray;
      if(i>=1){
       arr.removeAt(i);
      }
      else{
        alert("this field cannot be removed")
      }
      
    }
    addexp(){
   
      const controls = this.reactform.controls['Experiences'] as FormArray;
      (<FormArray>this.reactform.get('Experiences')).push(controls);
      
    }
    removeexp(j:number){
    let rem=this.reactform.controls['Experiences'] as FormArray;
    if(j>=1){
      rem.removeAt(j);
     }
     else{
       alert("this field cannot be removed")
     }
     
   }

    

  ngOnInit(): void {
  }
 
  submit() {
    console.log(this.reactform.value);
    this.reactform.reset();
  }
}
