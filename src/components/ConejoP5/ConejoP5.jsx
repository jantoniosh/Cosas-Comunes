import { ReactP5Wrapper } from "@p5-wrapper/react";

export const ConejoP5 = () => {
    const sketch = (p) => {
        let colores;
        let etapa, con;
        let delta;
        let color_n;
        let tm_frames;

        p.setup = function () {
            p.createCanvas(450, 450);
            etapa = 0;
            tm_frames = 240;

            colores = new Array(5);

            // Declaración de Tamaños de Valores de Colores
            color_n = new Array(5);

            for (let i = 0; i < 5; i++) {
                color_n[i] = new Array(3);
            }

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    color_n[i][j] = new Array(3);
                }
            }

            // Declarción letiable Delta
            delta = new Array(5);

            for (let i = 0; i < 5; i++) {
                delta[i] = new Array(3);
            }

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    delta[i][j] = new Array(3);
                }
            }

            // **** COLORES ****//
            // Valores de Color 1 - 1er Etapa
            color_n[0][0][0] = 255;
            color_n[0][0][1] = 255;
            color_n[0][0][2] = 204;
            // Valores de Color 1 - 2da Etapa
            color_n[0][1][0] = 204;
            color_n[0][1][1] = 255;
            color_n[0][1][2] = 255;
            // Valores de Color 1 - 3er Etapa
            color_n[0][2][0] = 255;
            color_n[0][2][1] = 204;
            color_n[0][2][2] = 255;

            // Valores de Color 2 - 1er Etapa
            color_n[1][0][0] = 255;
            color_n[1][0][1] = 204;
            color_n[1][0][2] = 204;
            // Valores de Color 2 - 2da Etapa
            color_n[1][1][0] = 204;
            color_n[1][1][1] = 255;
            color_n[1][1][2] = 204;
            // Valores de Color 2 - 3er Etapa
            color_n[1][2][0] = 204;
            color_n[1][2][1] = 204;
            color_n[1][2][2] = 255;

            // Valores de Color 3 - 1er Etapa
            color_n[2][0][0] = 255;
            color_n[2][0][1] = 105;
            color_n[2][0][2] = 97;
            // Valores de Color 3 - 2da Etapa
            color_n[2][1][0] = 97;
            color_n[2][1][1] = 255;
            color_n[2][1][2] = 105;
            // Valores de Color 3 - 3er Etapa
            color_n[2][2][0] = 105;
            color_n[2][2][1] = 97;
            color_n[2][2][2] = 255;

            // Valores de Color 4 - 1er Etapa
            color_n[3][0][0] = 255;
            color_n[3][0][1] = 200;
            color_n[3][0][2] = 102;
            // Valores de Color 4 - 2da Etapa
            color_n[3][1][0] = 102;
            color_n[3][1][1] = 255;
            color_n[3][1][2] = 200;
            // Valores de Color 4 - 3er Etapa
            color_n[3][2][0] = 200;
            color_n[3][2][1] = 102;
            color_n[3][2][2] = 255;

            // Valores de Color 5 - 1er Etapa
            color_n[4][0][0] = 188;
            color_n[4][0][1] = 255;
            color_n[4][0][2] = 107;
            // Valores de Color 3 - 2da Etapa
            color_n[4][1][0] = 107;
            color_n[4][1][1] = 188;
            color_n[4][1][2] = 255;
            // Valores de Color 3 - 3er Etapa
            color_n[4][2][0] = 255;
            color_n[4][2][1] = 107;
            color_n[4][2][2] = 188;

            // **** DELTA ****//
            // Valores de Delta - 1er Etapa
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    delta[i][0][j] = (color_n[i][1][j] - color_n[i][0][j]) / tm_frames;
                }
            }

            // Valores de Delta - 2da Etapa
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    delta[i][1][j] = (color_n[i][2][j] - color_n[i][1][j]) / tm_frames;
                }
            }

            // Valores de Delta - 3er Etapa
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    delta[i][2][j] = (color_n[i][0][j] - color_n[i][2][j]) / tm_frames;
                }
            }

            etapa = 0;
            con = 0;
        };

        p.draw = function () {
            p.scale(0.9, 0.9);
            if (con === tm_frames) {
                con = 0;
                if (etapa !== 5) {
                    etapa++;
                }
                else {
                    etapa = 0;
                }
            }

            if (etapa === 0) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][0][0], color_n[i][0][1], color_n[i][0][2]);
                }
            }

            if (etapa === 1) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][0][0] + (con * delta[i][0][0]), color_n[i][0][1] + (con * delta[i][0][1]), color_n[i][0][2] + (con * delta[i][0][2]));
                }
            }

            if (etapa === 2) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][1][0], color_n[i][1][1], color_n[i][1][2]);
                }
            }

            if (etapa === 3) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][1][0] + (con * delta[i][1][0]), color_n[i][1][1] + (con * delta[i][1][1]), color_n[i][1][2] + (con * delta[i][1][2]));
                }
            }

            if (etapa === 4) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][2][0], color_n[i][2][1], color_n[i][2][2]);
                }
            }

            if (etapa === 5) {
                for (let i = 0; i < 5; i++) {
                    colores[i] = p.color(color_n[i][2][0] + (con * delta[i][2][0]), color_n[i][2][1] + (con * delta[i][2][1]), color_n[i][2][2] + (con * delta[i][2][2]));
                }
            }

            p.background(colores[0]);
            p.noStroke();

            // Cara
            p.fill(colores[1]);
            p.ellipse(200, 150, 50, 300);
            p.ellipse(300, 150, 50, 300);
            p.fill('#FFFFFF');
            p.ellipse(200, 150, 35, 210);
            p.ellipse(300, 150, 35, 210);
            p.fill(colores[1]);
            p.ellipse(250, 250, 300, 300);

            // Ojos
            p.fill(0);
            p.ellipse(200, 200, 30, 30);
            p.ellipse(300, 200, 30, 30);

            // Chapitas
            p.fill(colores[2]);
            p.ellipse(180, 240, 20, 20);
            p.ellipse(320, 240, 20, 20);

            // Trompa
            p.fill(255);
            p.ellipse(235, 250, 50, 50);
            p.ellipse(265, 250, 50, 50);

            // Nariz
            p.fill(0);
            p.ellipse(250, 230, 25, 25);

            // Zanahoria Naranaja
            p.fill(colores[3]);
            p.ellipse(250, 400, 50, 175);

            // Zanahoria Verde
            p.fill(colores[4]);
            p.ellipse(240, 300, 15, 50);
            p.ellipse(250, 300, 15, 50);
            p.ellipse(260, 300, 15, 50);

            // Manitas
            p.fill(colores[1]);
            p.ellipse(225, 400, 60, 60);
            p.ellipse(275, 400, 60, 60);
            p.fill('#FFFFFF');
            p.ellipse(225, 400, 40, 40);
            p.ellipse(275, 400, 40, 40);
            con++;
        };

    }
    return (
        <>
            <ReactP5Wrapper sketch={sketch} />
        </>
    )
}
