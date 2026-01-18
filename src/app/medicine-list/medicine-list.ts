import { ChangeDetectorRef, Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  templateUrl: './medicine-list.html',
  styleUrl: './medicine-list.css',
})
export class MedicineList {

  medicines: Medicine[] = [];
  
  constructor(private medicineService: MedicineService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines(){
    this.medicineService.getMedicineList().subscribe(data => {
      console.log('API data:', data);
      this.medicines = data;
      this.cdr.detectChanges();
      console.log('Medicines after set:', this.medicines);
    });
  }

}
