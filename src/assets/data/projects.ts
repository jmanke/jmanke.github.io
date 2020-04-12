import { Project } from 'src/app/models/Project';

export const projects = [
  new Project({
    title: 'TimberOps',
    img: 'assets/images/Forest-Ops.png',
    description: '3D visualization of logging sites using GIS data',
    achievements: [
      'Lead developer and project owner',
      // tslint:disable-next-line: max-line-length
      'Designed and implemented a Google Maps style label system that significantly increased framerate and legibility over the previous system',
      'Built a GeoJSON to mesh converter that reduced time spent on data integration by more than 50%',
      'Developed a togographical, slope and contour shader for visualizing terrain features'
    ],
    technologies: [
      'Unity',
      'C#',
      'ShaderLab',
      'HTC Vive',
      'Oculus Rift',
      'Windows Mixed Reality'
    ],
    faIcon: 'fas fa-external-link-alt fa-fw',
    href: 'https://www.llamazoo.com/timberops/'
  }),
  new Project({
    title: 'MineLife',
    img: 'assets/images/MineLife-VR.jpg',
    description: '3D visualization of proposed mining sites',
    achievements: [
      "Designed and implemented a VR/PC menu system and interaction using Unity's UI",
      'Built a Google Earth style camera for PC mode using a State Design Pattern',
      'Developed a dynamic scene loading system'
    ],
    technologies: ['Unity', 'C#', 'HTC Vive', 'Oculus Rift'],
    faIcon: 'fas fa-external-link-alt fa-fw',
    href: 'https://www.llamazoo.com/minelife/'
  }),
  new Project({
    title: 'MineLife Hololens',
    img: 'assets/images/MineLife-Hololens.jpg',
    description: 'Visualization of mining sites for the Microsoft Hololens',
    achievements: [
      'Designed and built gesture interaction system',
      'Implemented hologram syncing (location and state) across multiple users',
      'Wrote extremely optimized C# code to maintain framerate'
    ],
    technologies: ['Unity', 'C#', 'Microsoft Hololens'],
    faIcon: 'fas fa-external-link-alt fa-fw',
    href: 'https://www.llamazoo.com/minelife/'
  }),
  new Project({
    title: 'Voxel Engine',
    img: 'assets/images/voxel-engine.png',
    description: 'C++ plugin for Unity that produces voxel based terrain',
    achievements: [
      'Asynchronous mesh updates and loading',
      'Heavy use of multi-threading',
      'Supports texture blending between voxel types',
      'LOD support, implemented with an Octree'
    ],
    technologies: ['Unity', 'C++', 'C#'],
    faIcon: 'fab fa-github fa-fw',
    href: 'https://github.com/jmanke/VoxelEngine'
  }),
  new Project({
    title: 'Sudoku Solver',
    img: 'assets/images/sudoku.jpg',
    description: 'C++ implementation of a Sudoku solver',
    achievements: [
      'Reduces the problem to exact cover rather than using heuristics',
      'First C++ project',
      'Solves up to 25x25 boards'
    ],
    technologies: ['C++'],
    faIcon: 'fab fa-github fa-fw',
    href: 'https://github.com/jmanke/Sudoku'
  }),
  new Project({
    title: 'Galactic Map',
    img: 'assets/images/galaxy.jpg',
    description: 'Visualization of the nearest 100,000 stars for the HTC Vive',
    achievements: [
      'Dynamic generation of stars based on the HYG database',
      'Built a 3D interactive map to travel to different stars',
      'Supports voice commands with Microsoft Speech API',
      'First major Unity project'
    ],
    technologies: ['Unity', 'C#', 'HTC Vive']
  }),
];
