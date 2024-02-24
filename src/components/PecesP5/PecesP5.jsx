import { ReactP5Wrapper } from "@p5-wrapper/react";

export const PecesP5 = () => {
    const sketch = (p) => {
        let contador;
        let c1, c2;
        let p_col;

        p.setup = () => {
            p.createCanvas(450, 450);
            contador = new Array(3);
            p_col = new Array(3);

            contador[0] = 345;
            contador[1] = -200;
            contador[2] = -100;
            c1 = p.color("#6EB5FF");
            c2 = p.color("#AFF8D8");
            p_col[0] = p.color("#FFABAB");
            p_col[1] = p.color("#D8FFD6");
            p_col[2] = p.color("#FF9CEE");
        }

        p.draw = () => {
            p.push();
            p.scale(1.5);
            for (let i = 0; i <= 300; i++) {
                let col_val = p.map(i, 0, 300, 0, 1);
                p.stroke(p.lerpColor(c1, c2, col_val));
                p.line(i, 0, i, 300);
            }

            for (let i = 0; i < 3; i++) {
                p.pez(contador[i], 75 * (1 + i), p_col[i]);
                contador[i] = contador[i] - 15;
                if (contador[i] < -250) {
                    contador[i] = 345;
                }
            }
            p.pop();
        }

        p.pez = (x, y, c) => {
            p.push();
            p.translate(x, y);
            p.noStroke();
            p.fill(c);
            p.ellipse(0, 0, 90, 45);
            p.arc(37.5, 0, 75, 75, 2 * p.PI - p.QUARTER_PI, 2 * p.PI + p.QUARTER_PI, p.PIE);
            p.fill(0);
            p.ellipse(-30, 0, 7.5, 7.5);
            p.pop();
        }
    }
    return (
        <>
            <ReactP5Wrapper sketch={sketch} />
        </>
    )
}
