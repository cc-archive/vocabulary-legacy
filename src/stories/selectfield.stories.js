export default { title: 'SelectField' }

export const Normal = () => `
<div class="select">
  <select>
    <option disabled>Select</option>
    <option>Option A</option>
    <option>Option B</option>
  </select>
</div>`

export const Disabled = () => `
<div class="select">
  <select disabled>
    <option disabled>Select</option>
    <option>Option A</option>
    <option>Option B</option>
  </select>
</div>`
