import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  selectedCity: number | null = null;

  cities = [
    {
      name: 'Bogotá',
      deliveryTime: '24 horas',
      shippingCost: 'GRATIS',
      isFree: true,
      top: '42%',
      left: '48%',
      description: 'Entrega express en toda la ciudad'
    },
    {
      name: 'Medellín',
      deliveryTime: '48 horas',
      shippingCost: '$15.000',
      isFree: false,
      top: '35%',
      left: '42%',
      description: 'Cobertura en todo el Valle de Aburrá'
    },
    {
      name: 'Cali',
      deliveryTime: '48 horas',
      shippingCost: '$15.000',
      isFree: false,
      top: '52%',
      left: '40%',
      description: 'Envíos a toda la zona metropolitana'
    },
    {
      name: 'Barranquilla',
      deliveryTime: '48 horas',
      shippingCost: '$15.000',
      isFree: false,
      top: '18%',
      left: '43%',
      description: 'Cobertura en la costa Caribe'
    },
    {
      name: 'Cartagena',
      deliveryTime: '48 horas',
      shippingCost: '$15.000',
      isFree: false,
      top: '20%',
      left: '40%',
      description: 'Envíos a toda la ciudad amurallada'
    }
  ];

  selectCity(index: number) {
    this.selectedCity = this.selectedCity === index ? null : index;
  }
}