import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from '../card/card';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  
  gadgets: any[] = [];
  constructor(private apiservice: ApiService,private cdr : ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getproducts().subscribe((data : any) => {
      this.gadgets = data;
      this.cdr.detectChanges();
    });
  }
}
