import "destyle.css";
import * as THREE from "three";

const canvasEl = document.getElementById("app");

if (!canvasEl) {
  throw new Error("Canvas element does not found.");
}

// const canvasWidth = document.documentElement.clientWidth;
const canvasWidth = window.innerWidth;
// const canvasHeight = document.documentElement.clientWidth; // window.innerHeight;
const canvasHeight = window.innerHeight;

const canvasAspectRatio = canvasWidth / canvasHeight;

const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvasWidth, canvasHeight);

const fov = 60;
const camera = new THREE.PerspectiveCamera(fov, canvasAspectRatio, 0.1, 1000);

const scene = new THREE.Scene();

const tick = () => {
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

const main = () => {
  window.addEventListener("load", () => {
    tick();
  });
};

main();
