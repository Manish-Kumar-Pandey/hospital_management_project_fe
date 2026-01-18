import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.html',
  styleUrl: './create-medicine.css',
})
export class CreateMedicine {

  medicine: Medicine = new Medicine();

  constructor(private medicineService: MedicineService, private router: Router){}

  saveMedicine(){
    delete (this.medicine as any).id;
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      this.goToMedicineList();
    });
  }

  onSubmit(){
    this.saveMedicine();
  } 

  goToMedicineList(){
    this.router.navigate(['/medicine-list']);
  }

}
