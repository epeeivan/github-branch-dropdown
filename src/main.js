
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'


const app = createApp(App);
app.use(FlagIcon);
app.mount("#app");

const ctx = document.getElementById('today');
const ctx1 = document.getElementById('week');
const ctx2 = document.getElementById('december');
const ctx3 = document.getElementById('2022');
const data = {
    today: {
        labels: [10, 13, 15, 19, 20, 22],
        datasets: [{
            label: 'dayly',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#00C1C4',
            tension: 0.1,
        }]
    },
    week: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            label: 'weekly',
            data: [222, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#00C1C4',
            tension: 0.1
        }]
    },
    december: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            label: 'december',
            data: [222, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#00C1C4',
            tension: 0.1
        }]
    },
    2022: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            label: '2022',
            data: [6549, 5896, 5496, 8954, 2356, 7845, 4568, 6512, 4579, 9542, 6548, 7895],
            fill: false,
            borderColor: '#00C1C4',
            tension: 0.1
        }]
    },
};
let options = {
    borderWidth: 1,
}

new Chart(ctx, { type: 'line', data: data.today, options });

new Chart(ctx1, { type: 'line', data: data.week, options });

new Chart(ctx2, { type: 'line', data: data.december, options });
new Chart(ctx3, { type: 'line', data: data["2022"], options });
