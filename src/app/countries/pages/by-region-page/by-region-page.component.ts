import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private cs: CountriesService) {}

  searchByRegion(term: string): void {
    this.cs.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      console.log(this.countries);
    });
  }
}
