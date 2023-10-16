import { Component, OnInit, inject } from '@angular/core';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
})
export class SearchPatientComponent implements OnInit {
  lr = inject(LoginRegisterService);

  id: number | string | null = null;
  searchoption : number | null = null;


  searchedPatient: any = [];
  details: any = [];
  isLoading = true;
  ngOnInit(): void {
    this.lr.get_patient_details().subscribe((res) => {
      this.details = res;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  searchPatient() {
    if(this.searchoption==1)
    {
      this.searchedPatient = this.details.filter((val: any) => {
        return this.id == val.id;
      });
    }
    if(this.searchoption==2)
    {
      if(this.id!= "")
      {
        this.searchedPatient = this.details.filter((val:any)=>{
          return val.fname.includes(this.id);
        })
      }
      else
      {
        this.searchedPatient =[];
      }
    }
  }
}
