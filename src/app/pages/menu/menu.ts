import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  menuCategories = [
    {
      icon: '🍔',
      name: 'Hamburguesas',
      items: [
        {
          name: 'Clásica',
          description: 'Carne de res, lechuga, tomate, queso',
          price: '$8.000'
        },
        {
          name: 'BBQ Bacon',
          description: 'Carne, bacon, salsa BBQ, cebolla caramelizada',
          price: '$12.000'
        },
        {
          name: 'Vegetariana',
          description: 'Hamburguesa de lentejas, vegetales frescos',
          price: '$14.000'
        },
        {
          name: 'Doble Carne',
          description: 'Doble carne de res, queso cheddar, pepinillos',
          price: '$15.000'
        },
        {
          name: 'Picante',
          description: 'Carne, jalapeños, salsa chipotle, queso pepper jack',
          price: '$13.000'
        },
        {
          name: 'Hawaiana',
          description: 'Carne, piña, jamón, salsa teriyaki',
          price: '$14.500'
        }
      ]
    },
    {
      icon: '🍕',
      name: 'Pizzas',
      items: [
        {
          name: 'Margarita',
          description: 'Tomate, mozzarella, albahaca fresca',
          price: '$10.000'
        },
        {
          name: 'Pepperoni',
          description: 'Pepperoni, queso mozzarella, orégano',
          price: '$14.000'
        },
        {
          name: 'Cuatro Quesos',
          description: 'Mozzarella, parmesano, gorgonzola, provolone',
          price: '$16.000'
        },
        {
          name: 'Hawaiana',
          description: 'Jamón, piña, queso mozzarella',
          price: '$13.000'
        },
        {
          name: 'Suprema',
          description: 'Pepperoni, champiñones, pimiento, cebolla, aceitunas',
          price: '$17.000'
        },
        {
          name: 'Vegetariana',
          description: 'Tomate, champiñones, pimiento, cebolla, aceitunas',
          price: '$15.000'
        },
        {
          name: 'Carnes',
          description: 'Pepperoni, salchicha italiana, tocino, jamón',
          price: '$18.000'
        }
      ]
    },
    {
      icon: '🥗',
      name: 'Ensaladas',
      items: [
        {
          name: 'César',
          description: 'Lechuga romana, pollo, crutones, parmesano, aderezo césar',
          price: '$11.000'
        },
        {
          name: 'Griega',
          description: 'Tomate, pepino, cebolla, aceitunas, queso feta',
          price: '$10.000'
        },
        {
          name: 'Mixta',
          description: 'Lechugas variadas, tomate, zanahoria, maíz',
          price: '$9.000'
        },
        {
          name: 'Tropical',
          description: 'Espinaca, mango, fresas, nueces, vinagreta',
          price: '$12.000'
        }
      ]
    },
    {
      icon: '🍟',
      name: 'Acompañamientos',
      items: [
        {
          name: 'Papas Fritas',
          description: 'Papas crujientes con sal',
          price: '$5.000'
        },
        {
          name: 'Aros de Cebolla',
          description: 'Cebolla empanizada crujiente',
          price: '$6.000'
        },
        {
          name: 'Alitas BBQ',
          description: '6 alitas con salsa BBQ',
          price: '$14.000'
        },
        {
          name: 'Nachos',
          description: 'Tortillas con queso cheddar y jalapeños',
          price: '$8.000'
        }
      ]
    },
    {
      icon: '🍹',
      name: 'Bebidas',
      items: [
        {
          name: 'Limonada Natural',
          description: 'Limones frescos, agua, azúcar',
          price: '$7.000'
        },
        {
          name: 'Smoothie Tropical',
          description: 'Mango, piña, banana, yogurt',
          price: '$12.000'
        },
        {
          name: 'Café Especial',
          description: 'Espresso doble con leche de almendras',
          price: '$4.000'
        },
        {
          name: 'Jugo Natural',
          description: 'Naranja, fresa, mora o lulo',
          price: '$8.000'
        },
        {
          name: 'Malteada',
          description: 'Chocolate, vainilla o fresa',
          price: '$10.000'
        },
        {
          name: 'Té Helado',
          description: 'Té negro con limón y hierbabuena',
          price: '$6.000'
        }
      ]
    },
    {
      icon: '🍰',
      name: 'Postres',
      items: [
        {
          name: 'Cheesecake',
          description: 'Clásico de queso con frutos rojos',
          price: '$9.000'
        },
        {
          name: 'Brownie',
          description: 'Chocolate intenso con helado de vainilla',
          price: '$8.000'
        },
        {
          name: 'Tiramisú',
          description: 'Café, mascarpone, cacao',
          price: '$10.000'
        },
        {
          name: 'Helado',
          description: '3 bolas: chocolate, vainilla, fresa',
          price: '$7.000'
        }
      ]
    }
  ];
}