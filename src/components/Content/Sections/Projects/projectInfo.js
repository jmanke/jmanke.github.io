import mineLifeVRImg from "../../../../images/MineLife-VR.jpg";
import mineLifeHololensImg from "../../../../images/MineLife-Hololens.jpg";
import forestOpsImg from "../../../../images/Forest-Ops.png";

const projectInfo = [
  {
    key: 0,
    title: "MineLife VR",
    image: mineLifeVRImg,
    cardText: "3D visualization of proposed mining sites built for VR and PC.",
    overviewItems: [
      "Visualizes GIS data",
      "Designed and implemented VR/PC menu system and interaction",
      "Built a Google Earth style camera for PC mode",
      "Made with Unity and C#"
    ]
  },
  {
    key: 1,
    title: "MineLife Hololens",
    image: mineLifeHololensImg,
    cardText:
      "Augmented Reailty visualization of proposed mining sites built for the Microsoft Hololens.",
    overviewItems: [
      "Designed and built gesture interaction system",
      "Implemented hologram syncing (location and state) across multiple users",
      "Wrote extremely optimized code to maintain framerate",
      "Made with Unity and C#"
    ]
  },
  {
    key: 2,
    title: "TimberOps",
    image: forestOpsImg,
    cardText:
      "3D visualization of logging sites using GIS, LiDAR and ariel imagery built for VR and PC.",
    overviewItems: [
      "Lead developer and project owner",
      "Designed and implemented Google Maps style label system",
      "Built a GeoJSON to mesh converter for 3D visualization",
      "Developed a togographical, slope and contour shader.",
      "Made with Unity and C#"
    ]
  }
];

export default projectInfo;
