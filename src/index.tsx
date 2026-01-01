import { useState } from 'react';

const tools = [
  { id: 'move', icon: '↔️', name: 'Move' },
  { id: 'select', icon: '⬜', name: 'Select' },
  { id: 'brush', icon: '🖌️', name: 'Brush' },
  { id: 'eraser', icon: '🧹', name: 'Eraser' },
  { id: 'fill', icon: '🪣', name: 'Fill' },
  { id: 'text', icon: '📝', name: 'Text' },
  { id: 'shape', icon: '⭕', name: 'Shape' },
  { id: 'gradient', icon: '🌈', name: 'Gradient' },
];

const Pixelmator: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('brush');
  const [color, setColor] = useState('#3B82F6');
  const [brushSize, setBrushSize] = useState(10);

  return (
    <div className="h-full flex flex-col bg-gray-800">
      {/* Menu Bar */}
      <div className="h-8 bg-gray-700 flex items-center px-4 gap-4 text-sm text-gray-300">
        <span>File</span>
        <span>Edit</span>
        <span>Image</span>
        <span>Layer</span>
        <span>Filter</span>
        <span>View</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Tools */}
        <div className="w-14 bg-gray-700 py-2 flex flex-col items-center gap-1">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`w-10 h-10 rounded flex items-center justify-center text-lg ${
                selectedTool === tool.id ? 'bg-blue-600' : 'hover:bg-gray-600'
              }`}
              title={tool.name}
            >
              {tool.icon}
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-900 flex items-center justify-center overflow-auto">
          <div 
            className="bg-white shadow-2xl"
            style={{ width: 800, height: 600 }}
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <div>Canvas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspector */}
        <div className="w-64 bg-gray-700 p-4">
          <div className="mb-6">
            <div className="text-sm text-gray-400 mb-2">COLOR</div>
            <div className="flex gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-12 rounded cursor-pointer"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full bg-gray-600 px-2 py-1 rounded text-sm text-white"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm text-gray-400 mb-2">BRUSH SIZE</div>
            <input
              type="range"
              min="1"
              max="100"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-sm text-center text-white">{brushSize}px</div>
          </div>

          <div className="mb-6">
            <div className="text-sm text-gray-400 mb-2">LAYERS</div>
            <div className="bg-gray-600 rounded p-2 space-y-1">
              <div className="flex items-center gap-2 px-2 py-1 bg-blue-600 rounded">
                <span>👁️</span>
                <span className="text-sm">Layer 1</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-500 rounded">
                <span>👁️</span>
                <span className="text-sm">Background</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pixelmator;
