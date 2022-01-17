import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  Fines!: any[];
  TempList!: any[];

  constructor(private system: SystemService) { }

  ngOnInit(): void 
  {
    this.getAllFines();
  }

  getAllFines()
  {
    this.system.getAllFines().subscribe((fines: any) => {
      if(fines)
      {
        this.Fines = fines;

        this.Fines.forEach((fine) => {
          this.system.calculatefine(fine._id).subscribe((result: any) =>
          {
            console.log(result);
          });
        });
      }
    });

    this.system.getAllFines().subscribe((fines: any) => {
      if(fines)
      {
        this.Fines = fines;
        this.TempList = fines;
      }
    });
  }

  ChangedOption(value: string)
  {
    this.TempList = [];

    this.Fines.forEach(fine => {
      if(fine.status === value)
      {
        this.TempList.push(fine);
      }
    });

    console.log(this.TempList);

  }
}
