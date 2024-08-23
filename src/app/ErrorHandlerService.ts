 import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, ErrorHandler } from "@angular/core";
import {Location} from "@angular/common";

 
 
import {Router} from "@angular/router";
 
@Injectable()
export class ErrorHandlerService implements ErrorHandler {
    
    constructor(private location: Location) {
         
    }

    public handleError( error: any ) : void {
        // Log to the console.
        try {

            console.log("Custom error handler");
            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();
 
            alert( error.message);
            

        } catch ( handlingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }
    }
}