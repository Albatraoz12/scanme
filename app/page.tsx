import Form from './components/Form';
// react-webcam and tesseract.js npm that is going to use

export default function Home() {
  return (
    <main className='bg-slate-800 h-[100vh] text-white'>
      <h1 className='text-center py-10 text-4xl'>Scan Me! 📸</h1>
      <Form />
    </main>
  );
}
