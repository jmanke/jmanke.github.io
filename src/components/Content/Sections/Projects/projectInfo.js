import mineLifeVRImg from "../../../../images/MineLife-VR.jpg";
import mineLifeHololensImg from "../../../../images/MineLife-Hololens.jpg";
import forestOpsImg from "../../../../images/Forest-Ops.png";
import voxelImg from "../../../../images/voxel-engine.png";
import sudokuImg from "../../../../images/sudoku.jpg";
import galaxyImg from "../../../../images/galaxy.jpg";

const projectInfo = [
  {
    key: 0,
    title: "TimberOps",
    image: forestOpsImg,
    cardText:
      "3D visualization of logging sites using GIS data.",
    achievements: [
      "Lead developer and project owner",
      "Designed and implemented a Google Maps style label system that significantly increased framerate and legibility over the previous system",
      "Built a GeoJSON to mesh converter that reduced time spent on data integration by more than 50%",
      "Developed a togographical, slope and contour shader for visualizing terrain features",
    ],
    technologies: [
      "Unity",
      "C#",
      "ShaderLab",
      "HTC Vive",
      "Oculus Rift",
      "Windows Mixed Reality"
    ], 
    projectLink: {
      faIcon: "fas fa-link fa-fw",
      href: "https://www.llamazoo.com/timberops/"
    }
  },
  {
    key: 1,
    title: "MineLife",
    image: mineLifeVRImg,
    cardText: "3D visualization of proposed mining sites.",
    achievements: [
      "Designed and implemented a VR/PC menu system and interaction using Unity's UI",
      "Built a Google Earth style camera for PC mode using a State Design Pattern",
      "Developed a dynamic scene loading system"
    ],
    technologies: [
      "Unity",
      "C#",
      "HTC Vive",
      "Oculus Rift"
    ],
    projectLink: {
      faIcon: "fas fa-link fa-fw",
      href: "https://www.llamazoo.com/minelife/"
    }
  },
  {
    key: 2,
    title: "MineLife Hololens",
    image: mineLifeHololensImg,
    cardText:
      "Visualization of mining sites for AR.",
    achievements: [
      "Designed and built gesture interaction system",
      "Implemented hologram syncing (location and state) across multiple users",
      "Wrote extremely optimized C# code to maintain framerate",
    ],
    technologies: [
      "Unity",
      "C#",
      "Microsoft Hololens",
    ],
    projectLink: {
      faIcon: "fas fa-link fa-fw",
      href: "https://www.llamazoo.com/minelife/"
    }
  },
  {
    key: 3,
    title: "Voxel Engine",
    image: voxelImg,
    cardText:
      "C++ plugin for Unity that produces voxel terrain.",
    achievements: [
      "Asynchronous mesh updates and loading",
      "Heavy use of multi-threading",
      "Supports texture blending between voxel types",
      "LOD support, implemented with an Octree"
    ],
    technologies: [
      "Unity",
      "C++",
      "C#",
    ],
    projectLink: {
      faIcon: "fab fa-github fa-fw",
      href: "https://github.com/jmanke/VoxelEngine"
    }
  },
  {
    key: 4,
    title: "Sudoku Solver",
    image: sudokuImg,
    cardText:
      "C++ implementation of a Sudoku solver.",
    achievements: [
      "Reduces the problem to exact cover rather than using heuristics",
      "First C++ project",
      "Solves up to 25x25 boards",
    ],
    technologies: [
      "C++",
    ],
    projectLink: {
      faIcon: "fab fa-github fa-fw",
      href: "https://github.com/jmanke/Sudoku"
    }
  },
  {
    key: 5,
    title: "Galactic Map",
    image: galaxyImg,
    cardText:
      "Visualization of the nearest 100,000 stars in VR.",
    achievements: [
      "Dynamic generation of stars based on the HYG database",
      "Built a 3D interactive map to travel to different stars",
      "Supports voice commands with Microsoft Speech API",
      "First major Unity project"
    ],
    technologies: [
      "Unity",
      "C#",
      "HTC Vive"
    ]
  }
];

export default projectInfo;
