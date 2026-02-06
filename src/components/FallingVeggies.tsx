import { useEffect } from "react";

// Import images (change paths if needed)
import tomato from "@/assets/falling/tomato.png";
import lemon from "@/assets/falling/lemon.png";
import apple from "@/assets/falling/apple.png";
import avocado from "@/assets/falling/avocado.png";
import bananas from "@/assets/falling/bananas.png";
import bellPepper from "@/assets/falling/bell-pepper.png";
import broccoli from "@/assets/falling/broccoli.png";
import cabbage from "@/assets/falling/cabbage.png";
import carrot from "@/assets/falling/carrot.png";
import cherries from "@/assets/falling/cherries.png";
import chineseCabbage from "@/assets/falling/chinese-cabbage.png";
import eggplant from "@/assets/falling/eggplant.png";
import onion from "@/assets/falling/onion.png";
import potato from "@/assets/falling/potato.png";
import pumpkin from "@/assets/falling/pumpkin.png";
import radish from "@/assets/falling/radish.png";
import strawberry from "@/assets/falling/strawberry.png";
const images = [carrot, tomato, avocado, bananas, bellPepper, broccoli, cabbage, cherries, chineseCabbage, eggplant, onion, potato, pumpkin, radish, strawberry];

const FallingVeggies = () => {
  useEffect(() => {
    const container = document.getElementById("falling-veggies");

    if (!container) return;

    const createItem = () => {
      const item = document.createElement("img");

      const randomImg =
        images[Math.floor(Math.random() * images.length)];

      item.src = randomImg;

      item.className = "falling-item";

      item.style.left = Math.random() * 100 + "vw";
      item.style.animationDuration = 4 + Math.random() * 4 + "s";
      item.style.opacity = (0.5 + Math.random() * 0.5).toString();
      item.style.width = 30 + Math.random() * 30 + "px";

      container.appendChild(item);

      setTimeout(() => {
        item.remove();
      }, 9000);
    };

    const interval = setInterval(createItem, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="falling-veggies"
      className="fixed inset-0 pointer-events-none overflow-hidden z-40"
    />
  );
};

export default FallingVeggies;
