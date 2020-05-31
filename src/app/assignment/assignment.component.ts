import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  forbiddenName: string = "Test";
  form: FormGroup;
  constructor() { }



  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.forbiddenNameValidator),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    })
  }

  // forbiddenNameValidator(control: FormControl): {[s:string]:boolean}{
  //   if(this.forbiddenName==control.value){
  //     return {'nameIsForbidden':true};
  //   }
  //   return null;
  // }

  forbiddenNameValidator(control: FormControl): Promise<any> | Observable<any>{

    const promise = new Promise(resolve => {
      setTimeout(()=>{
        if('Test'==control.value){
          resolve ({'nameIsForbidden':true});
        }else{
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

  onSubmit(){
    console.log("Form: ", this.form);
  }

  /*forbiddenNames(control: FormControl): {[s:string]:boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !==-1){
      return {'nameIsForbidden':true}
    }
    return null;
  }*/

}
