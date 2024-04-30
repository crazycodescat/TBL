// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = arr1.reduce((prevValue, curValue) => {
//   return (prevValue += curValue);
// }, 0);

// console.log(sum);
import sharp from "sharp";

// const image = "../images/41mECVhzp7L.jpg";

async function createAndSaveImage() {
  try {
    await sharp("../images/71rcSoY3apL._SL1500_.jpg")
      .resize(300, 300, {})
      .webp()
      .toFile("output_image_01.webp", (err, data) => {
        console.log("image Successfully created");
      });
  } catch (error) {
    console.log(error);
  }
}

// Call the async function to create and save the image
await createAndSaveImage();