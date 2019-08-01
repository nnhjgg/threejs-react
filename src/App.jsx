import './App.css';
import React from 'react';
import * as THREE from 'three';


function init() {
  // renderer
  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('map-container'),
  });
  renderer.setClearColor(0x000000); // black

  // scene
  var scene = new THREE.Scene();

  // camera
  // var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
  // camera.position.set(0, 0, 5);
  // scene.add(camera);

  var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
  camera.position.set(0, 0, 5);
  scene.add(camera);

  // a cube in the scene
  // var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
  //   new THREE.MeshBasicMaterial({
  //     color: 0xff0000,
  //   }));

  var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    }));
  scene.add(cube);

  // render
  renderer.render(scene, camera);
}

function App() {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div id="app-container">
      <canvas id="map-container" />
    </div>
  );
}

export default App;
