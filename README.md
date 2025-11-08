# 3D T-Shirt Customizer

**An immersive 3D product customization experience built with React Three Fiber**

![Demo GIF](https://tshirtcustomizer-ruddy.vercel.app/)

</div>

---

## Overview

A cutting-edge web application that revolutionizes product customization by bringing 3D interactions to the browser. Users can personalize a T-shirt in real-time with dynamic colors, custom decals, and interactive camera controls—all rendered smoothly using WebGL technology.

## ✨ Features

Real-time 3D Customization: Change the T-shirt color instantly and view the results in a dynamic 3D environment.

Dynamic Decals: Select and apply various logos/decals onto the T-shirt surface.

Smooth Animations: Utilizes Framer Motion for sleek 2D UI transitions and Maath/R3F for smooth camera and color changes in 3D.

Interactive Camera: The T-shirt subtly rotates based on mouse movement, creating an immersive feel.

Screenshot Functionality: Download a PNG image of your customized T-shirt with the click of a button.

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **3D Rendering** | React Three Fiber (R3F) | React renderer for Three.js, declarative 3D scenes |
| **3D Utilities** | Drei | Essential R3F helpers (`Environment`, `Decal`, `useGLTF`, etc.) |
| **State Management** | Valtio | Lightweight, proxy-based reactive state |
| **Animations** | Framer Motion | Smooth 2D UI transitions and orchestrations |
| **3D Math** | Maath | Advanced easing and damping utilities |
| **Build Tool** | Vite | Lightning-fast dev server and optimized builds |
| **Language** | JavaScript (ES6+) | Modern syntax with hooks and async/await |

## 📂 Project Structure

```
3d-tshirt-customizer/
├── src/
│   ├── components/
│   │   ├── Canvas.jsx       # 3D scene setup (R3F Canvas, lighting, camera)
│   │   ├── Shirt.jsx         # 3D T-shirt model with materials and decals
│   │   ├── CameraRig.jsx     # Interactive camera controller
│   │   ├── Overlay.jsx       # 2D UI layer (color picker, decal selector)
│   │   └── Backdrop.jsx      # Scene backdrop with shadows
│   ├── store/
│   │   └── Store.jsx         # Valtio state management
│   ├── config/
│   │   └── constants.js      # Configuration (colors, decals, etc.)
│   ├── App.jsx               # Root component
│   └── main.jsx              # Application entry point
├── public/
│   ├── models/
│   │   └── shirt_baked_collapsed.glb  # Optimized 3D T-shirt model
│   └── decals/               # Logo/decal image files
├── package.json
└── vite.config.js
```


## Acknowledgments

- [Three.js](https://threejs.org/) - The foundation of 3D web graphics
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - Making Three.js declarative
- [Drei](https://github.com/pmndrs/drei) - Essential R3F utilities
- [Valtio](https://github.com/pmndrs/valtio) - Simplifying state management
- [Framer Motion](https://www.framer.com/motion/) - Beautiful animations made easy

---

<div align="center">





</div>
