import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products = [
    {
      emoji: '📱',
      name: 'Smartphone Pro',
      description: 'Última generación con cámara 4K',
      price: '$1.000.000'
    },
    {
      emoji: '💻',
      name: 'Laptop Ultra',
      description: 'Potencia y portabilidad',
      price: '$1.900.000'
    },
    {
      emoji: '🎧',
      name: 'Audífonos Premium',
      description: 'Cancelación de ruido activa',
      price: '$300.000'
    },
    {
      emoji: '⌚',
      name: 'Smartwatch Elite',
      description: 'Monitoreo de salud 24/7',
      price: '$350.000'
    },
    {
      emoji: '📷',
      name: 'Cámara Digital',
      description: 'Captura momentos perfectos',
      price: '$700.000'
    },
    {
      emoji: '🎮',
      name: 'Consola Gaming',
      description: 'Experiencia inmersiva',
      price: '$250.000'
    },
    {
      emoji: '📱',
      name: 'Tablet Pro 12"',
      description: 'Pantalla retina y stylus incluido',
      price: '$850.000'
    },
    {
      emoji: '⌨️',
      name: 'Teclado Mecánico RGB',
      description: 'Switches premium para gamers',
      price: '$180.000'
    },
    {
      emoji: '🖱️',
      name: 'Mouse Gamer Pro',
      description: 'Sensor óptico de alta precisión',
      price: '$120.000'
    },
    {
      emoji: '🖥️',
      name: 'Monitor Curvo 27"',
      description: '144Hz, respuesta 1ms',
      price: '$950.000'
    },
    {
      emoji: '🖨️',
      name: 'Impresora Multifuncional',
      description: 'Imprime, escanea y copia',
      price: '$450.000'
    },
    {
      emoji: '📡',
      name: 'Router WiFi 6',
      description: 'Cobertura amplia, ultra rápido',
      price: '$280.000'
    },
    {
      emoji: '💾',
      name: 'Disco Duro 2TB',
      description: 'Almacenamiento externo USB 3.0',
      price: '$200.000'
    },
    {
      emoji: '🔌',
      name: 'Cargador Inalámbrico',
      description: 'Carga rápida 15W',
      price: '$80.000'
    },
    {
      emoji: '🎤',
      name: 'Micrófono USB',
      description: 'Calidad studio para streaming',
      price: '$320.000'
    },
    {
      emoji: '📹',
      name: 'Webcam 4K',
      description: 'Autofocus y corrección de luz',
      price: '$380.000'
    },
    {
      emoji: '🔊',
      name: 'Parlante Bluetooth',
      description: 'Sonido 360° resistente al agua',
      price: '$150.000'
    },
    {
      emoji: '🎯',
      name: 'Control PS5',
      description: 'DualSense con vibración háptica',
      price: '$280.000'
    }
  ];
}