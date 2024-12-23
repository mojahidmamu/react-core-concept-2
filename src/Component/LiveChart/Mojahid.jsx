import { LineChart as LMark, Line} from "recharts";
const Mojahid = () => {
  const studentMark = [
    { "id": 1, "name": "Alice", "mathMarks": 85, "bengaliMarks": 78, "englishMarks": 82 },
    { "id": 2, "name": "Bob", "mathMarks": 78, "bengaliMarks": 72, "englishMarks": 75 },
    { "id": 3, "name": "Charlie", "mathMarks": 92, "bengaliMarks": 88, "englishMarks": 90 },
    { "id": 4, "name": "David", "mathMarks": 74, "bengaliMarks": 70, "englishMarks": 73 },
    { "id": 5, "name": "Eva", "mathMarks": 88, "bengaliMarks": 82, "englishMarks": 85 },
    { "id": 6, "name": "Frank", "mathMarks": 81, "bengaliMarks": 79, "englishMarks": 80 },
    { "id": 7, "name": "Grace", "mathMarks": 95, "bengaliMarks": 91, "englishMarks": 94 },
    { "id": 8, "name": "Hannah", "mathMarks": 69, "bengaliMarks": 65, "englishMarks": 68 },
    { "id": 9, "name": "Isaac", "mathMarks": 76, "bengaliMarks": 74, "englishMarks": 77 },
    { "id": 10, "name": "Jack", "mathMarks": 90, "bengaliMarks": 86, "englishMarks": 88 }
  ]
  
  return (
    <div>
      <h2>Mojahid</h2>
      <LMark width={400} height={400} data={studentMark}></LMark>
      <Line dataKey={'mathMarks'} stroke="red"></Line>
      <Line dataKey={'englishMarks'} stroke="green"></Line>

    </div>
  );
};

export default Mojahid;