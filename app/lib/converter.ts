import { createWorker } from 'tesseract.js';

const convertor = async (img?: string) => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('./Card2.png');
  console.log(ret);
  console.log(ret.data.text);
  const text = ret.data.text;
  let regex = /[^\w\s]/gi;
  let cleanedText = text.replace(regex, '');
  console.log(cleanedText);
  await worker.terminate();
  return text;
};

export default convertor;
