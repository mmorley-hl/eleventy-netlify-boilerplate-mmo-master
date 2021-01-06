// import sass
import '../css/index.scss'

// import js Components
import './_locomotive-images'
import './_ps5test'

// eslint-disable-next-line no-console
console.log('Hello again')

Array.from(document.getElementsByTagName('p')).forEach((p, index) => {
  // eslint-disable-next-line no-console
  console.log(`p ${index}, startsWith('W')`, p, p.innerHTML.startsWith('W'));
})
