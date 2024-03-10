import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RandomTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const generateTable = () => {
      const data = [];
      for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
          row.push(Math.floor(Math.random() * 100));
        }
        data.push(row);
      }
      setTableData(data);
    };

    generateTable();
  }, []);

  return (
    <table>
      <tbody>
        {tableData.map((row) => (
          <tr key={uuidv4()}>
            {row.map((cell) => (
              <td key={uuidv4()}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RandomTable;