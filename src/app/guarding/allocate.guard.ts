import { CanActivateFn } from '@angular/router';

import { DataUseService } from '../services/data-use.service';

import { RequestServerService } from '../services/request-server.service';

import { inject } from '@angular/core';

import { Observable, of } from 'rxjs';

import Swal from 'sweetalert2';



export const allocateGuard: CanActivateFn = (route, state) => {

  const du = inject(DataUseService);

  const adminServ = inject(RequestServerService);



  // Variables to store data

  let profileData: any = du.getPatientProfileData();

  let trans: any[];

  let disch: any[];

  let canActivate: boolean = false;



  // Create an observable that represents the guard logic

  return new Observable<boolean>((observer) => {

    adminServ.getTransferRequest().subscribe((data) => {

      trans = data.filter((val: any) => val.pid == profileData[0].id);

      checkGuardConditions();

    });



    adminServ.getDischargeRequest().subscribe((data) => {

      disch = data.filter((val: any) => val.patientId  == profileData[0].id);

      checkGuardConditions();

    });





    // Function to check guard conditions

    function checkGuardConditions() {

      // Check if both profileData and trans are available

      if ((profileData && trans)|| (profileData && disch))

      {

         if (profileData[0].roomId && trans.length !== 0) {

          // alert('Room Transfer Request Pending...');

          Swal.fire({

            title: 'Error!',

            text: 'Room Transfer Request Pending...',

            icon: 'error',

            confirmButtonText: 'close',

            confirmButtonColor: 'red',

          });

        }

        else if (profileData[0].roomId && disch.length !== 0)

        {

          Swal.fire({

            title: 'Error!',

            text: 'Room Discharge Request Pending...',

            icon: 'error',

            confirmButtonText: 'close',

            confirmButtonColor: 'red',

          });

        }



        else {

          canActivate = true;

        }



        // Emit the canActivate value and complete the observable

        observer.next(canActivate);

        observer.complete();

      }

    }

  });

};
