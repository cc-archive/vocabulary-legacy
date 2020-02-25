export default { title: 'Tables' }

const columnCell = '' +
'<table class="table is-bordered has-color-dark-slate-gray">' +
'<thead class="text-big has-background-grey-light">' +
  '<th>Column name</th>' +
'</thead>' +
'</table>'

export const ColumnCell = () => columnCell

const textCell = '' +
'<table class="table is-bordered has-color-dark-slate-gray">' +
'<tr class="text-normal">' +
  '<td>Text Cell</td>' +
'</tr>' +
'</table>'

export const TextCell = () => textCell

const numberCell = '' +
'<table class="table is-bordered has-color-dark-slate-gray">' +
'<tr class="text-normal has-text-right">' +
  '<td>000</td>' +
'</tr>' +
'</table>'

export const NumberCell = () => numberCell

const basicContent = '' +
'<table class="table is-bordered is-striped has-color-dark-slate-gray">' +
'<thead class="text-big">' +
'<tr>' +
  '<th>State names</th>' +
  '<th>Capital of the state</th>' +
  '<th>Population</th>' +
  '<th>Total seats</th>' +
'</tr>' +
'</thead>' +
'<tr class="text-normal">' +
  '<td>Alabama</td>' +
  '<td>Montgomery</td>' +
  '<td class="has-text-right">4,903,185</td>' +
  '<td class="has-text-right">7</td>' +
'</tr>' +
'<tr class="text-normal">' +
  '<td>Arizona</td>' +
  '<td>Phoenix</td>' +
  '<td class="has-text-right">7,278,717</td>' +
  '<td class="has-text-right">9</td>' +
'</tr>' +
'<tr class="text-normal">' +
  '<td>Arizona</td>' +
  '<td>Phoenix</td>' +
  '<td class="has-text-right">7,278,717</td>' +
  '<td class="has-text-right">9</td>' +
'</tr>' +
'<tr class="text-normal">' +
  '<td>Arkansas</td>' +
  '<td>Little Rock</td>' +
  '<td class="has-text-right">3,017,825</td>' +
  '<td class="has-text-right">4</td>' +
'</tr>' +
'</table>'

export const BasicContentExample = () => basicContent

const richContent = '' +
'<table class="table is-bordered  is-striped has-color-dark-slate-gray">' +
'<thead class="text-big">' +
'<tr>' +
  '<th>Project Name</th>' +
  '<th>Resources</th>' +
  '<th>Commits</th>' +
  '<th>Last release</th>' +
'</tr>' +
'</thead>' +
'<tr class="text-normal">' +
  '<td><div class="text-bigger has-text-weight-bold padding-bottom-smaller">CC Search</div><div class="text-normal">7 contributors</div></td>' +
  '<td><div class="has-color-orange padding-bottom-smaller">Mockups</div><div class="has-color-orange padding-bottom-smaller">Project\'s Brief</div><div class="has-color-orange padding-bottom-smaller">Drive Folder</div></td>' +
  '<td class="has-text-right"><h2>452</h2></td>' +
  '<td>13/01/2020</td>' +
'</tr>' +
'<tr class="text-normal">' +
  '<td><div class="text-bigger has-text-weight-bold padding-bottom-smaller">CC License Chooser</div><div class="text-normal">7 contributors</div></td>' +
  '<td><div class="has-color-orange padding-bottom-smaller">Mockups</div></td>' +
  '<td class="has-text-right"><h2>32</h2></td>' +
  '<td>26/01/2020</td>' +
'</tr>' +
'<tr class="text-normal">' +
  '<td><div class="text-bigger has-text-weight-bold padding-bottom-smaller">Open Source Redesign</div><div class="text-normal">7 contributors</div></td>' +
  '<td><div class="has-color-orange padding-bottom-smaller">Test sessions</div><div class="has-color-orange padding-bottom-smaller">Content</div></td>' +
  '<td class="has-text-right"><h2>1,043</h2></td>' +
  '<td>06/01/2020</td>' +
'</tr>' +
'</table>'

export const RichContentExample = () => richContent
