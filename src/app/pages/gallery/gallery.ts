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
  isModalOpen = false;
  selectedImage = 0;

  images = [
    {
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      title: 'María González',
      rating: 5,
      product: 'Laptop Gaming Pro',
      description: '¡Excelente producto! La laptop llegó en perfectas condiciones y funciona increíble. El servicio al cliente fue excepcional.'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      title: 'Carlos Pérez',
      rating: 5,
      product: 'Auriculares Bluetooth',
      description: 'La calidad del sonido es espectacular. Totalmente recomendado, superó mis expectativas. Entrega rápida.'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'Ana Martínez',
      rating: 5,
      product: 'Smartwatch Fitness',
      description: 'Me encanta mi nuevo smartwatch. El seguimiento de actividad es preciso y la batería dura muchísimo.'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      title: 'Diego Ramírez',
      rating: 5,
      product: 'Teclado Mecánico RGB',
      description: 'Excelente relación calidad-precio. El teclado es sólido y las luces RGB son hermosas. Muy satisfecho.'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      title: 'Laura Sánchez',
      rating: 5,
      product: 'Tablet Pro 12"',
      description: 'Perfecta para trabajar y estudiar. La pantalla es nítida y el rendimiento excelente. La recomiendo 100%.'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      title: 'Roberto Torres',
      rating: 5,
      product: 'Mouse Gamer Pro',
      description: 'El mejor mouse que he tenido. Súper preciso y cómodo. Mi rendimiento en juegos mejoró notablemente.'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/25.jpg',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      title: 'Sofía Morales',
      rating: 5,
      product: 'Cámara Web 4K',
      description: 'Calidad de imagen increíble para mis reuniones. Fácil de instalar y usar. ¡Me encantó!'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/79.jpg',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      title: 'Juan López',
      rating: 5,
      product: 'Monitor Curvo 27"',
      description: 'Experiencia visual impresionante. Los colores son vivos y la curvatura es perfecta. Vale cada peso.'
    }
  ];

  openModal(index: number) {
    this.selectedImage = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}