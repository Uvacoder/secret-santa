import { useEffect } from 'react';
import { Main } from './Main';

const emoji = [
  'π',
  'ππ»',
  'ππΌ',
  'ππ½',
  'ππΎ',
  'ππΏ',
  'π€Ά',
  'π€Άπ»',
  'π€ΆπΌ',
  'π€Άπ½',
  'π€ΆπΎ',
  'π€ΆπΏ',
];
const santa = emoji[Math.floor(Math.random() * emoji.length)];

function App() {
  useEffect(() => {
    document.title = `Secret Santa ${santa}`;
  }, []);

  return (
    <>
      <header>
        <h1>
          Secret Santa{' '}
          <span role="presentation" aria-hidden="true">
            {santa}
          </span>
        </h1>
        <p>
          By{' '}
          <a href="https://brianm.me" rel="noopener noreferrer">
            Brian Mitchell
          </a>
          . View the source on{' '}
          <a
            href="https://github.com/BrianMitchL/secret-santa"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </header>
      <Main />
    </>
  );
}

export default App;
