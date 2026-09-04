const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../public/gallery_assets');
const outputPath = path.join(__dirname, '../src/data/gallery.js');

const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));

const collections = [
  {
    id: 'mangalore',
    title: 'Nitte, Mangalore & Manipal',
    desc: 'Campus corridors at NMAMIT, coastal breeze, Malpe shores, and brotherhood.',
    type: 'magazine',
    files: []
  },
  {
    id: 'delhi',
    title: 'Delhi',
    desc: 'Monuments, Mughal red sandstone, Signature Bridge, and urban capital sprawl.',
    type: 'magazine',
    files: []
  },
  {
    id: 'uttarakhand',
    title: 'Uttarakhand',
    desc: 'Devprayag river confluence, Himalayan ridges, and alpine meadows of Chopta.',
    type: 'magazine',
    files: []
  },
  {
    id: 'events',
    title: 'Events & Fun',
    desc: 'Hackathons, tech fests, workshops, and high-octane student life.',
    type: 'timeline',
    files: []
  },
  {
    id: 'random',
    title: 'Camera Dump',
    desc: 'Candid daily life, roadside cafes, midnight runs, and raw snapshots.',
    type: 'polaroid',
    files: []
  },
  {
    id: 'video',
    title: 'Raw Footage',
    desc: 'Motion captures and live recordings.',
    type: 'magazine',
    files: []
  }
];

files.forEach(file => {
  const lower = file.toLowerCase();
  
  // Skip unsupported formats like HEIC/HEIF, system files, or exact duplicate copies
  if (
    lower.endsWith('.heic') ||
    lower.endsWith('.heif') ||
    lower.startsWith('.') ||
    lower.includes(' copy.')
  ) {
    return;
  }

  const isVideo = lower.endsWith('.mp4') || lower.endsWith('.mov');
  const isImage = lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');

  if (!isVideo && !isImage) {
    return;
  }

  if (isVideo) {
    collections.find(c => c.id === 'video').files.push(file);
  } else if (file.startsWith('10000')) {
    // Photos from NMAMIT Nitte, Mangalore & Manipal
    collections.find(c => c.id === 'mangalore').files.push(file);
  } else if (/^IMG_2026(0524|0604|0606|0613|0620)/.test(file)) {
    // Delhi exploration (India Gate, Red Fort, Signature Bridge, etc.)
    collections.find(c => c.id === 'delhi').files.push(file);
  } else if (/^IMG_202606(26|27|28)/.test(file)) {
    // Uttarakhand expedition (Devprayag, Chopta, Tungnath, Bugyal meadows)
    collections.find(c => c.id === 'uttarakhand').files.push(file);
  } else if (
    file.startsWith('tx-') ||
    file.startsWith('IMG_20251031') ||
    file.startsWith('IMG_202511') ||
    file.startsWith('1764066942211') ||
    file.startsWith('1777230006622') ||
    file.startsWith('1777644239349') ||
    file.startsWith('1777858503082') ||
    file.startsWith('proton-26')
  ) {
    // Hackathons, certificates, tech fests, workshops, and college events
    collections.find(c => c.id === 'events').files.push(file);
  } else {
    // Casual candids, food, daily life snapshots
    collections.find(c => c.id === 'random').files.push(file);
  }
});

let outputContent = `// Auto-generated gallery collections data
export const galleryCollections = [
`;

collections.forEach(col => {
  if (col.files.length > 0) {
    col.files.sort((a, b) => a.localeCompare(b));
    outputContent += `  {
    id: '${col.id}',
    title: '${col.title}',
    description: '${col.desc}',
    layout: '${col.type}',
    photos: [
`;
    col.files.forEach(file => {
      const isVideo = file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');
      const encodedFile = encodeURIComponent(file).replace(/%2F/g, '/');
      outputContent += `      { src: '/gallery_assets/${encodedFile}', type: '${isVideo ? 'video' : 'image'}' },\n`;
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
