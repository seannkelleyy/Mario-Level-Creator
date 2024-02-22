import { Block } from "./Block";

type RowProps = {
  rowIndex: number;
};

export const Row = ({ rowIndex }: RowProps) => {
  return (
    <section id={rowIndex.toString()} className="row">
      {Array(16)
        .fill(0)
        .map((_, columnIndex) => (
          <Block key={columnIndex} />
        ))}
    </section>
  );
};
