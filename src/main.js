const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const outputDir = `${basePath}/output`;
const inputDir = `${basePath}/input`;
const { format, pixelFormat } = require(path.join(basePath, "/src/config.js"));
const console = require("console");
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");

const buildSetup = () => {
  if (fs.existsSync(outputDir)) {
    fs.rmdirSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir);
};

const getImages = (_dir) => {
  return fs
    .readdirSync(_dir)
    .filter((item) => {
      let extension = path.extname(`${_dir}${item}`);
      if (extension == ".png" || extension == ".jpg") {
        return item;
      }
    })
    .map((i) => {
      return {
        filename: i,
        path: `${_dir}/${i}`,
      };
    });
};

const loadImgData = async (_imgObject) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_imgObject.path}`);
    resolve({ imgObject: _imgObject, loadedImage: image });
  });
};

const draw = (_imgObject) => {
  let size = pixelFormat.ratio;
  let w = canvas.width * size;
  let h = canvas.height * size;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(_imgObject.loadedImage, 0, 0, w, h);
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
};

const saveImage = (_loadedImageObject) => {
  fs.writeFileSync(
    `${outputDir}/${_loadedImageObject.imgObject.filename}.png`,
    canvas.toBuffer("image/png")
  );
};

const startCreating = async () => {
  const images = getImages(inputDir);
  let loadedImageObjects = [];
  images.forEach((imgObject) => {
    loadedImageObjects.push(loadImgData(imgObject));
  });
  await Promise.all(loadedImageObjects).then((loadedImageObjectArray) => {
    loadedImageObjectArray.forEach((loadedImageObject) => {
      draw(loadedImageObject);
      saveImage(loadedImageObject);
      console.log(`Пикселизация изображения: ${loadedImageObject.imgObject.filename}`);
    });
  });
};

module.exports = { startCreating, buildSetup };
