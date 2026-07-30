interface Color {
  id: number;
  name: string;
  color: string;
  image: string;
}

interface Props {
  colors: Color[];
  selected: Color;
  onSelect: (color: Color) => void;
}

export default function ColorPicker({
  colors,
  selected,
  onSelect,
}: Props) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Color</h3>

      <div className="flex gap-4">
        {colors.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            style={{
              backgroundColor: item.color,
            }}
            className={`h-10 w-10 rounded-full border-4 transition ${
              selected.id === item.id
                ? "border-orange-400"
                : "border-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}