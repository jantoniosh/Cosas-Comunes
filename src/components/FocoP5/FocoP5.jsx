import { ReactP5Wrapper } from "@p5-wrapper/react";

export const FocoP5 = () => {
  const sketch = (p) => {
    let bulb;
    let cont, light;

    p.setup = () => {
      p.createCanvas(450, 450);
      p.background(255);
      bulb = new Lightbulb(150, 150);
      light = true;
      cont = 0;
    };

    p.draw = () => {
      p.strokeWeight(5);
      if (light) {
        cont++;
        if (cont === 240) {
          light = false;
        }
      } else {
        cont--;
        if (cont === 0) {
          light = true;
        }
      }
      p.push();
      p.scale(1.5);
      !light ? p.background(174, 216, 230) : p.background(87, 108, 115);
      !light ? p.fill(254, 106, 98) : p.fill(127, 53, 49);
      p.rect(-3, 233, 308, 308);
      bulb.render(!light);
      p.fill(0);
      p.ellipse(120, 128, 15, 15);
      p.ellipse(180, 128, 15, 15);
      p.noFill();
      p.strokeWeight(5);
      !light
        ? p.arc(150, 169, 30, 15, 0, p.PI)
        : p.arc(150, 176, 30, 15, p.PI, 2 * p.PI);
      p.pop();
    };

    class Lightbulb {
      constructor(newX, newY) {
        this.x = newX;
        this.y = newY;
      }

      render(luz) {
        if (luz) {
          p.fill(200);
        } else {
          p.fill(100);
        }
        p.ellipse(150, 278, 113, 45);
        p.ellipse(150, 255, 113, 45);
        p.ellipse(150, 233, 113, 45);
        if (luz) {
          p.fill(252, 252, 150);
        } else {
          p.fill(126, 126, 75);
        }
        p.ellipse(150, 143, 180, 180);
      }
    }
  };
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
};
