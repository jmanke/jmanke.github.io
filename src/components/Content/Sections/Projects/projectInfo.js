import mineLifeVRImg from "../../../../images/MineLife-VR.jpg";
import mineLifeHololensImg from "../../../../images/MineLife-Hololens.jpg";
import forestOpsImg from "../../../../images/Forest-Ops.png";
import voxelImg from "../../../../images/voxel-engine.png";
import sudokuImg from "../../../../images/sudoku.jpg";
import galaxyImg from "../../../../images/galaxy.jpg";

const projectInfo = [
  {
    key: 0,
    title: "MineLife",
    image: mineLifeVRImg,
    cardText: "3D visualization of proposed mining sites built for VR and PC.",
    achievements: [
      "Designed and implemented VR/PC menu system and interaction",
      "Built a Google Earth style camera for PC mode",
    ],
    technologies: [
      "Unity",
      "C#",
      "HTC Vive",
      "Oculus Rift"
    ]
  },
  {
    key: 1,
    title: "MineLife Hololens",
    image: mineLifeHololensImg,
    cardText:
      "AR visualization of proposed mining sites built for the Microsoft Hololens.",
    achievements: [
      "Designed and built gesture interaction system",
      "Implemented hologram syncing (location and state) across multiple users",
      "Wrote extremely optimized C# code to maintain framerate",
    ],
    technologies: [
      "Unity",
      "C#",
      "Hololens",
    ]
  },
  {
    key: 2,
    title: "TimberOps",
    image: forestOpsImg,
    cardText:
      "3D visualization of logging sites using GIS, LiDAR and ariel imagery for VR and PC.",
    achievements: [
      "Lead developer and project owner",
      "Designed and implemented a Google Maps style label system that significantly increased framerate and legibility over the previous system",
      "Built a GeoJSON to mesh converter that reduced time spent on data integration by more than 50%",
      "Developed a togographical, slope and contour shader for visualizing terrain features",
    ],
    technologies: [
      "Unity",
      "C#",
      "GeoJSON.NET",
      "ShaderLab"
    ]
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
    ]
  },
  {
    key: 4,
    title: "Sudoku Solver",
    image: sudokuImg,
    cardText:
      "C++ implementation of a Sudoku solver that reduces Sudoku to the exact cover problem.",
    achievements: [
      "Reduces the problem to exact cover rather than using heuristics",
      "First C++ project",
      "Solves up to 25x25 boards",
    ],
    technologies: [
      "C++",
    ]
  },
  {
    key: 5,
    title: "Galactic Map",
    image: galaxyImg,
    cardText:
      "Visualition of the nearest 100,000 stars in VR.",
    achievements: [
      "Dynamic generation of stars based on the HYG database",
      "Built a 3D interactive map to travel to different stars",
      "Supports voice commands with Microsoft Speech API",
      "First major Unity project"
    ],
    technologies: [
      "Unity",
      "C#",
    ]
  }
];

export default projectInfo;
