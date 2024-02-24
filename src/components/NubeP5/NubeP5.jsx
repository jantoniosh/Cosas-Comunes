import { ReactP5Wrapper } from "@p5-wrapper/react";

export const NubeP5 = () => {
  const sketch = (p) => {
    let inten, inten_tot, sup;

    p.setup = () => {
      p.createCanvas(450, 450);
      p.ellipseMode(p.CORNER);
      inten = 0;
      sup = true;
    };

    p.draw = () => {
      inten_tot = 0.00167 * inten;
      p.push();
      p.scale(1.5);
      p.background(171 * inten_tot, 238 * inten_tot, 255 * inten_tot);
      p.noStroke();
      p.fill("#FFFFFF");
      p.ellipse(80, 66, 101, 101);
      p.ellipse(41, 113, 65, 65);
      p.ellipse(149, 80, 65, 65);
      p.ellipse(171, 101, 87, 87);
      p.ellipse(80, 139, 75, 75);
      p.ellipse(125, 123, 92, 92);
      p.fill("#000000");
      p.ellipse(105, 120, 15, 15);
      p.ellipse(158, 120, 15, 15);
      p.stroke(0);
      p.noFill();
      p.strokeWeight(5);
      p.arc(128, 158, 23, 23, 0, p.PI);
      p.pop();
      if (sup) {
        inten++;
        if (inten === 600) {
          sup = false;
        }
      } else {
        inten--;
        if (inten === 0) {
          sup = true;
        }
      }
    };
  };
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
};
