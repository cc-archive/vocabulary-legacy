export const alphabetTable = (classes = []) => `<table class="character-table ${classes.join(' ')}">
  <tr>
    ${['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map((char) => `<td>${char}</td>`).join('')}
  </tr>
  <tr>
    ${['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'].map((char) => `<td>${char}</td>`).join('')}
  </tr>
  <tr>
    ${['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((char) => `<td>${char}</td>`).join('')}
  </tr>
</table>`

export const numberTable = () => `<table class="character-table">
  <tr>
    ${[0, 1, 2, 3, 4].map((num) => `<td>${num}</td>`).join('')}
  </tr>
  <tr>
    ${[5, 6, 7, 8, 9].map((num) => `<td>${num}</td>`).join('')}
  </tr>
</table>`

export const sampleTexts = [
  'The quick brown fox jumps over the lazy dog.',
  'Playing jazz vibe chords quickly excites my wife.',
  'Crazy Fredrick bought many very exquisite opal jewels.',
  'We promptly judged antique ivory buckles for the next prize.',
  'Sixty zippers were quickly picked from the woven jute bag.'
]
