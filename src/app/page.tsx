import Image from "next/image";
import { styled } from '@pigment-css/react';

const Div = styled('div')`
  color: white;
  background: red;
  border: 5px solid teal;
`;

const Div2 = styled('div')`
  color: white;
  background: blue;
  border: 5px solid green;
`;

const Div3 = styled('div')`
  color: white;
  border: 5px solid white;
  background: green;
`;

const Div4 = styled('div')`
  color: white;
  background: brown;
  border: 5px solid pink;
`;

export default function Home() {
  return (
    <>
    <Div>
      <h1>Hello, World!</h1>
    </Div>
    <Div2>
      <h1>Hello, World!</h1>
    </Div2>
    <Div3>
      <h1>Hello, World!</h1>
    </Div3>
    <Div4>
      <h1>Hello, World!</h1>
    </Div4>
    </>
  );
}
