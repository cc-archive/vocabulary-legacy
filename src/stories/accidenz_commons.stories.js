export default { title: 'Accidenz Commons' }
import "./helper"
import { tablecomponents } from "./helper";
export const demo = () => `
  <style>
  .accidenz-commons {
    font-family: 'Accidenz Commons';
  }
  </style>
  <p class="accidenz-commons">
    The quick brown fox jumps over the lazy dog.
  </p>

`

export const uppercaseLetters = () => {
    return `${tablecomponents}`
}

export const lowercaseLetters = () => {
    return `
        <style>
            .size{text-transform:lowercase}
        </style>
        ${tablecomponents}
    `
}

export const Numbers = () => {
    return `
        <table class="table">
          <tr>
            <th class="size">0</th>
            <th class="size">1</th>
            <th class="size">2</th>
            <th class="size">3</th>
            <th class="size">4</th>
          </tr>
          <tr>
            <th class="size">5</th>
            <th class="size">6</th>
            <th class="size">7</th>
            <th class="size">8</th>
            <th class="size">9</th>
          </tr>
        </table>

       
    `
}
