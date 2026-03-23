import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements AfterViewInit {

  @ViewChild('chartCanvas') chartRef!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      this.createChart();
    }, 100); 
  }

  createChart() {
    if (!this.chartRef) return;

    const ctx = this.chartRef.nativeElement.getContext('2d');

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
            labels: { color: '#f2f2f2' }
          }
        },
        scales: {
          x: {
            ticks: { color: '#f2f2f2' },
            grid: { color: 'rgba(255,255,255,0.1)' }
          },
          y: {
            ticks: { color: '#f2f2f2' },
            grid: { color: 'rgba(255,255,255,0.1)' }
          }
        }
      }
    });
  }

  // =========================
  // FORM SUBMIT LOGIC
  // =========================
  submitForm(event: Event) {
    event.preventDefault(); // prevents page reload

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    console.log('Form submitted:', { name, email, phone });

    form.reset();

    alert('Thanks! We will get back to you soon.');
  }

} 

