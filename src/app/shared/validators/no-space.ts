import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpace {
    static noSpaceVal(control : AbstractControl):ValidationErrors | null{
        let val : string = control.value
        console.log(val);
        if(!val){
            return null
        }
        if(val.includes(" ")){
            return{
                noSpaceVal: "Space is not allowed"
            }
        }
        else{
            return null
        }

    }
}
