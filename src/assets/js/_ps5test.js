import p5 from 'p5'
const p5test = document.querySelector('.p5test')

if (p5test) {
	let sketch = (elem) => {
		let x = 0
		let y = 0

		elem.setup = () => {
			// elem.createCanvas(700, 410)
			let renderer = elem.createCanvas(1400, 820)
			renderer.parent(p5test)
		}

		elem.draw = () => {
			elem.background(220)
			for (let i = 0; i < 1400; i += 10) {
				elem.noFill()
				elem.stroke('green')
				elem.strokeWeight(1)
				elem.ellipse(350, 250, i + 2, i)

				elem.noFill()
				elem.stroke('lightblue')
				elem.strokeWeight(2)
				elem.rect(x, 0, -1600 - i, 1400 - i)

				elem.noFill()
				elem.stroke('blue')
				elem.strokeWeight(1)

				elem.ellipse(1600, y - elem.height, -1600 - i, 1400 - i)
			}
			if (x > elem.width + 1600) {
				x = 0
			} else {
				x = x + 13
			}

			if (y > elem.height + 820) {
				y = 0
			} else {
				y = x + 3
			}

		}
	}

	let myp5 = new p5(sketch)
}