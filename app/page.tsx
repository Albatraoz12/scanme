import Image from 'next/image';
import Form from './components/Form';

export default function Home() {
  return (
    <main className='bg-slate-800 h-[100vh] text-white'>
      <h1>Hello world</h1>
      <Form />
    </main>
  );
}
