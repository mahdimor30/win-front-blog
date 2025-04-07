export function getRandomTailwindColor() {
    const colors = [
      "bg-red-300",
      "bg-yellow-300",
      "bg-green-300",
      "bg-blue-300",
      "bg-indigo-300",
      "bg-purple-300",
      "bg-pink-300",
      // You can add more colors from Tailwind's palette as needed
    ];
  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  