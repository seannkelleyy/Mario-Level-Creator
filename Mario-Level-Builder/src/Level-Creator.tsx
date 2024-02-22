import { useState } from "react";
import { Row } from "./Row";

export const LevelCreator = () => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);

  return (
    <div className="level-loader">
      <section className="control">
        <h1>Mario Level Creator</h1>
        <p>
          How to use: To begin, set the value for your width. By default, all
          blocks are set to an air block. Simply click a block to change its
          type, keep clicking to cycle through all blocks
        </p>
        <label>Width in Blocks</label>
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
        />
      </section>
      <div className="level">
        {Array(rows)
          .fill(0)
          .map((_, rowIndex) => (
            <Row rowIndex={rowIndex} columns={columns} />
          ))}
      </div>
    </div>
  );
};
