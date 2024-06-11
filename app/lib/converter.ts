import { createWorker } from 'tesseract.js';

const convertor = async (img?: string) => {
  const worker = await createWorker('eng');
  const {
    data: { text },
  } = await worker.recognize('./Card2.png');
  const cleanedText = text.replace(/[^\w\s]/gi, '');
  const itemsArr = cleanedText.split('\n').map((item) => item.trim());
  await worker.terminate();
  return itemsArr;
};

export default convertor;
