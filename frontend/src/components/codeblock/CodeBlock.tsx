import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

const CodeBlock: React.FC = () => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const testString = `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`;

  const cleanData = (unformattedData: string) => {
    const stringifiedData = unformattedData.split('\n');

    const allCodes: string[] = [];

    stringifiedData.forEach((line) => {
      const filteredNumbers = line.match(/\d/g);
      if (filteredNumbers) {
        const firstCharacter = filteredNumbers[0];
        const lastCharacter = filteredNumbers[filteredNumbers.length - 1];

        allCodes.push(firstCharacter + lastCharacter);
      }
    });

    return allCodes;
  };

  const data = cleanData(testString);

  return (
    <div>
      <pre>
        <code className="javascript">{`const testString = \`${testString}\`;

const cleanData = (unformattedData) => {
  const stringifiedData = unformattedData.split('\\n');

  const allCodes = [];

  stringifiedData.forEach(line => {
    const filteredNumbers = line.match(/\\d/g);
    const firstCharacter = filteredNumbers[0];
    const lastCharacter = filteredNumbers[filteredNumbers.length - 1];

    allCodes.push(firstCharacter + lastCharacter);
  });
  
  return allCodes;
}

const data = cleanData(testString);

if (data.length) {
  const initialValue = 0;
  const totalSum = data.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10),
    initialValue,
  );

  console.log('totalSum', totalSum);
}`}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
