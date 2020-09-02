import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

const indexMarkdown = `
# Awesome Shopify [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> A curated list of awesome [Shopify](https://www.shopify.com/?ref=vitalogy) resources, libraries and open source projects.

 - Originally comes from this [repo](https://github.com/julionc/awesome-shopify).
`;

export default function Awesome() {
  return (
    <article>
      <ReactMarkdown source={indexMarkdown} renderers={{ code: CodeBlock }} />
    </article>
  );
}
