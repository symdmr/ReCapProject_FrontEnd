import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car:Car;
  brands:Brand[]=[];
  colors:Color[]=[];
  subTitle:string="";
  formLoaded:boolean=false;
  carUpdateForm : FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getBrands();
        this.getColors();
        this.getCarDetailsById(params["carId"]);
      }
    });
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.car = response.data;
      this.subTitle = "Car: " + this.car.carId;
      
      this.createCarUpdateForm();
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    });
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    });
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      // carId:[this.car.carId,Validators.required],
      colorId:[this.car.colorId,Validators.required],
      brandId:[this.car.brandId,Validators.required],
      modelYear:[this.car.modelYear,Validators.required],
      dailyPrice:[this.car.dailyPrice,Validators.required],
      description:[this.car.description]
    });
    this.formLoaded=true;
  }

  update(){
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({}, this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{
        
        this.toastrService.success(response.message, "Başarılı!")
      },responseError=>{
         if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası!")
          }
         }
      })
      
    }else{
      this.toastrService.error("form eksik", "dikkat")
    }
    
  }
}
