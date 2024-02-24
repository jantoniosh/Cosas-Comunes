import { ReactP5Wrapper } from "@p5-wrapper/react";

export const NopalP5 = () => {
  const sketch = (p) => {
    let cont, asc, factor_1, factor_2;

    p.setup = () => {
      p.createCanvas(450, 450);
      cont = 0;
      asc = true;
    };

    p.draw = () => {
      // Lógica contador
      if (asc) {
        cont++;
        if (cont >= 300) {
          asc = false;
        }
      } else {
        cont--;
        if (cont <= 0) {
          asc = true;
        }
      }

      factor_1 = p.map(cont, 0, 300, 0.4, 1);
      factor_2 = p.map(cont, 0, 300, 1, 0.4);
      p.push();
      p.scale(1.5);
      p.background(174 * factor_2, 216 * factor_2, 230 * factor_2);
      p.stroke(255 * factor_2, 105 * factor_2, 97 * factor_2);
      p.fill(255 * factor_2, 105 * factor_2, 97 * factor_2);
      p.rect(-3, 240, 310, 75);
      p.scale(0.7, 0.7);
      p.strokeWeight(2);

      p.cactus();
      // Spines
      p.push();
      p.translate(187, 215);
      p.rotate(-0.1);
      p.spine();
      p.rotate(0.5);
      p.spine();
      p.rotate(0.4);
      p.spine();
      p.rotate(0.5);
      p.spine();
      p.rotate(-2);
      p.spine();
      p.rotate(-0.7);
      p.spine();
      p.pop();
      // Tunas
      p.tuna();
      p.rotate(p.HALF_PI - 0.5);
      p.translate(37, -278);
      p.tuna();
      p.rotate(p.HALF_PI + 1.05);
      p.translate(-221, -232);
      p.tuna();
      p.pop();
    };

    p.cactus = () => {
      p.translate(30, 40);
      p.stroke("#000000");
      p.fill(119 * factor_1, 221 * factor_1, 119 * factor_1); //Verde

      // Inicio Nopales //
      p.push();
      p.translate(25, 255);
      p.rotate(-p.PI / 3);
      p.ellipse(285, 50, 60, 45);
      p.pop();

      p.push();
      p.translate(230, -110);
      p.rotate(p.PI / 3.2);
      p.ellipse(150, 130, 78, 60);
      p.pop();

      p.push();
      p.translate(-10, 200);
      p.rotate(-p.PI / 5);
      p.ellipse(285, 110, 45, 35);
      p.pop();
      p.push();
      p.translate(125, -110);
      p.rotate(p.PI / 5);
      p.ellipse(240, 140, 73, 80);
      p.pop();

      p.push();
      p.translate(210, -50);
      p.rotate(p.PI / 3.2);
      p.ellipse(100, 180, 120, 75);
      p.pop();

      // Principal (Cabeza)
      p.ellipse(187, 215, 121, 123);

      // Fin Nopales //

      // Maceta
      p.push();
      p.fill(196 * factor_1, 154 * factor_1, 108 * factor_1);
      p.quad(150, 285, 225, 285, 215, 340, 160, 340);
      p.fill(169 * factor_1, 124 * factor_1, 80 * factor_1);
      p.rect(137, 270, 100, 20, 7);
      p.pop();

      // Rostro //
      p.push();
      // Eyes
      p.noFill();
      p.arc(168, 203, 10, 10, p.PI + 0.5, p.PI + 2.8);
      p.arc(208, 203, 10, 10, p.PI + 0.5, p.PI + 2.8);

      // Boca
      p.arc(189, 218, 15, 10, 0.4, p.PI - 0.4);

      // Chapitas
      p.fill(238, 42, 123);
      p.noStroke();
      p.ellipse(165, 210, 5, 5);
      p.ellipse(212, 210, 5, 5);
      p.pop();
    };

    p.tuna = () => {
      p.stroke(236, 0, 140);
      p.fill(238, 42, 123);
      p.ellipse(82, 80, 15, 15);
      p.ellipse(72, 88, 15, 15);
      p.ellipse(70, 75, 15, 15);
    };

    p.spine = () => {
      p.stroke(0, 104, 56);
      p.line(0, -62, 10, -72);
      p.line(0, -62, -10, -72);
    };
  };
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
};
