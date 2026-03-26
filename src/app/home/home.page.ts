import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';

import { addIcons } from 'ionicons';
import {
  homeOutline,
  folderOutline,
  checkboxOutline,
  calendarOutline,
  documentOutline,
  barChartOutline,
  settingsOutline,
  logOutOutline,
  searchOutline,
  notificationsOutline,
  menuOutline
} from 'ionicons/icons';

addIcons({
  homeOutline,
  folderOutline,
  checkboxOutline,
  calendarOutline,
  documentOutline,
  barChartOutline,
  settingsOutline,
  logOutOutline,
  searchOutline,
  notificationsOutline,
  menuOutline
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements AfterViewInit {

  @ViewChild('chartCanvas') chartRef!: ElementRef;

  // ✅ Mobile menu toggle state
  public isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 200);
  }

  createChart(): void {
    if (!this.chartRef) return;

    const canvas = this.chartRef.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Growth',
            data: [12, 19, 14, 22, 18, 25],
            backgroundColor: 'rgba(0,255,200,0.6)',
            borderRadius: 10
          },
          {
            label: 'Performance',
            data: [8, 15, 10, 18, 16, 20],
            backgroundColor: 'rgba(255,120,120,0.6)',
            borderRadius: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5' }
          }
        },
        scales: {
          x: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.1)' } },
          y: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.1)' } }
        }
      }
    });
  }

  // =========================
  // FORM SUBMIT
  // =========================
  submitForm(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    console.log('Form submitted:', { name, email, phone });
    form.reset();
    alert('Thanks! We will get back to you soon.');
  }
}

