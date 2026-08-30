const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../public/gallery_assets');
const outputPath = path.join(__dirname, '../src/data/gallery.js');

const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));

const collections = [
  { id: 'delhi', title: 'Delhi', desc: 'Architecture, chaos, and contrast.', type: 'magazine', files: [] },
  { id: 'nepal', title: 'Nepal', desc: 'The Himalayas and the altitude.', type: 'magazine', files: [] },
  { id: 'uttarakhand', title: 'Uttarakhand', desc: 'Northern wilderness.', type: 'magazine', files: [] },
  { id: 'events', title: 'Hackathons & Events', desc: 'Sleepless nights and code.', type: 'timeline', files: [] },
  { id: 'random', title: 'Camera Dump', desc: 'Unfiltered daily life.', type: 'polaroid', files: [] },
  { id: 'video', title: 'Raw Footage', desc: 'Motion captures.', type: 'magazine', files: [] }
];

files.forEach(file => {
  const isVideo = file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');

  if (isVideo) {
    collections.find(c => c.id === 'video').files.push(file);
  } else if (file.startsWith('tx-')) {
    collections.find(c => c.id === 'events').files.push(file);
  } else if (file.startsWith('IMG_20251031') || file.startsWith('IMG_202511')) {
    collections.find(c => c.id === 'nepal').files.push(file);
  } else if (file.startsWith('IMG_202606')) {
    collections.find(c => c.id === 'uttarakhand').files.push(file);
  } else if (file.startsWith('10000')) {
    collections.find(c => c.id === 'delhi').files.push(file);
  } else {
    collections.find(c => c.id === 'random').files.push(file);
  }
});

let outputContent = `// Auto-generated gallery collections data
export const galleryCollections = [
`;

collections.forEach(col => {
  if (col.files.length > 0) {
    outputContent += `  {
    id: '${col.id}',
    title: '${col.title}',
    description: '${col.desc}',
    layout: '${col.type}',
    photos: [
`;
    col.files.forEach(file => {
      const isVideo = file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');
      outputContent += `      { src: '/gallery_assets/${file}', type: '${isVideo ? 'video' : 'image'}' },\n`;
    });
    outputContent += `    ]
  },
`;
  }
});

outputContent += `];
`;

fs.writeFileSync(outputPath, outputContent);
console.log('Successfully generated src/data/gallery.js');
