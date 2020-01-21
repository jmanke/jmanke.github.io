import mineLifeVRImg from "../../../../images/MineLife-VR.jpg";
import mineLifeHololens from "../../../../images/MineLife-Hololens.jpg";

const projectInfo = [
  {
    key: 0,
    title: "MineLife VR",
    image: mineLifeVRImg,
    cardText:
      "3D Visualization of proposed mining sites built for Virtual Reality and PC.",
    overviewItems: [
      "Made with Unity and C#",
      "Visualizes GIS data",
      "Designed and implemented VR/PC menu system and interaction",
      "Built a Google Earth style camera for PC mode",
    ]
  },
  {
    key: 1,
    title: "MineLife Hololens",
    image: mineLifeHololens,
    cardText:
      "Augmented Reailty visualization of proposed mining sites built for the Microsoft Hololens.",
    overviewItems: [
      "Made with Unity and C#",
      "Designed and built gesture interaction system",
      "Implemented hologram syncing (location and state) across multiple users",
      "Wrote extremely optimized code to maintain framerate"
    ]
  },
];

export default projectInfo;
