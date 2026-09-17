import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";
export function minProductName(min:number):ValidatorFn{return (control:AbstractControl)=>{const value=(control.value||"").trim();return value.length>=min?null:{minProductName:{required:min,actual:value.length}};};}
@Directive({selector:"[appMinProductName]",providers:[{provide:NG_VALIDATORS,useExisting:forwardRef(()=>MinLengthDirective),multi:true}]})
export class MinLengthDirective implements Validator {validate(control:AbstractControl){return minProductName(3)(control);}}
