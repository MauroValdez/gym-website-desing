import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  await imagemin(["./source/img/*.{jpg,png}"], {
    destination: "./source/img/webp",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.5, 0.7],
      }),
      imageminWebp({ quality: 50 }),
    ],
  });

  console.log("Images optimized");
})();