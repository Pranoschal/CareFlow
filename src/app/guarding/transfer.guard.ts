import { CanActivateFn } from '@angular/router';
import { DataUseService } from '../services/data-use.service';
import { RequestServerService } from '../services/request-server.service';
import { inject } from '@angular/core';
import { Observable} from 'rxjs';
import Swal from 'sweetalert2';

export const transferGuard: CanActivateFn = (route, state) => {
  const du = inject(DataUseService);
  const adminServ = inject(RequestServerService);

  // Variables to store data
  let profileData: any = du.getPatientProfileData()
  let disch: any[];
  let canActivate: boolean = false;

  // Create an observable that represents the guard logic
  return new Observable<boolean>((observer) => {

    adminServ.getDischargeRequest().subscribe(
      (data) => {
        disch = data.filter((val: any) => val.patientId == profileData[0].id);
        checkGuardConditions();
      }
    );

    // Function to check guard conditions
    function checkGuardConditions() {
      // Check if both profileData and trans are available
      if (profileData && disch) {
        if (!profileData[0].roomId) {
          // alert('You have not been allocated a room yet!');
          Swal.fire({
            title: 'Error!',

            text: 'You have not been allocated a room yet!',

            icon: 'error',

            confirmButtonText: 'close',

            confirmButtonColor: 'red',
          });
        }
        else if (profileData[0].roomId && disch.length !== 0) {
          // alert('Room Discharge Request Pending...');
          Swal.fire({
            title: 'Error!',

            text: 'Room Discharge Request Pending...',

            icon: 'error',

            confirmButtonText: 'close',

            confirmButtonColor: 'red',
          });
        } else
        {
          canActivate = true;
        }
        // Emit the canActivate value and complete the observable
        observer.next(canActivate);
        observer.complete();
      }
    }
  });
};
