import { ReactP5Wrapper } from "@p5-wrapper/react";

export const AbejaP5 = () => {
  const sketch = (p) => {
    let r_ojos, r_alas, c1;

    p.setup = () => {
      p.createCanvas(450, 450);
      c1 = p.color("#FF6961");
    };

    p.draw = () => {
      p.background(c1);
      p.push();
      p.scale(0.75);
      p.translate(0, 40);
      // Aguijón
      p.fill(0);
      p.triangle(350, 450, 250, 450, 300, 530);

      // alas
      r_alas = p.random(120, 150);
      p.fill(253, 253, 150, 100);
      p.noStroke();
      p.ellipse(150, 260, r_alas, r_alas);
      p.fill(253, 253, 150, 100);
      p.noStroke();
      p.ellipse(150, 380, r_alas, r_alas);

      p.fill(253, 253, 150, 100);
      p.noStroke();
      p.ellipse(450, 260, r_alas, r_alas);
      p.fill(253, 253, 150, 100);
      p.noStroke();
      p.ellipse(450, 380, r_alas, r_alas);

      // Cuerpo
      p.noStroke();
      p.fill(253, 253, 150);
      p.ellipse(300, 330, 250, 300);
      // Rayas Negras
      p.fill(0);
      p.arc(300, 330, 250, 300, 1.1 * p.PI, 1.9 * p.PI, p.CHORD);
      p.arc(300, 330, 250, 300, 2.1 * p.PI, 2.9 * p.PI, p.CHORD);
      // Completar Cuerpo
      p.fill(253, 253, 150);
      p.arc(300, 330, 250, 300, 1.2 * p.PI, 1.8 * p.PI, p.CHORD);
      p.arc(300, 330, 250, 300, 2.2 * p.PI, 2.8 * p.PI, p.CHORD);

      p.noFill();
      p.stroke(0);
      p.strokeWeight(6);
      p.ellipse(300, 330, 250, 300);

      // Antenas
      p.noFill();
      p.arc(250, 50, 40, 80, p.PI, 2.5 * p.PI);
      p.arc(350, 50, 40, 80, 0.5 * p.PI, 2 * p.PI);
      p.fill(0);
      p.ellipse(230, 50, 10, 10);
      p.ellipse(370, 50, 10, 10);

      // Rostro
      p.fill(253, 253, 150);
      p.ellipse(300, 130, 150, 150);
      r_ojos = p.random(10, 20);
      p.fill(0);
      p.ellipse(275, 100, r_ojos, r_ojos);
      p.ellipse(325, 100, r_ojos, r_ojos);

      p.noFill();
      p.arc(290, 150, 20, 20, 2 * p.PI, 3 * p.PI);
      p.arc(310, 150, 20, 20, 2 * p.PI, 3 * p.PI);
      p.pop();
    };
  };
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
};
