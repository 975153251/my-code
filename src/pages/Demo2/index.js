// Demo2
import { useEffect } from 'react';
import * as THREE from 'three';

import Header from '../../components/common/Header';
import Container from '../../components/common/Container';

import styles from './index.module.scss';

const Demo2 = () => {

  useEffect(() => {
    // Our Javascript will go here.
    // 创建场景
    const box = document.getElementById("viewBox")
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        75,
        box.clientWidth / box.clientHeight,
        0.1,
        1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(box.clientWidth, box.clientHeight);
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

    // console.log(document.getElementById("viewBox"));
    document.getElementById("viewBox").appendChild(renderer.domElement);

    //添加物体
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // 渲染场景
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
},[])
  return (
    <div className={styles.demoContainer}>
      <Header />
      <Container />
    </div>
  );
};

export default Demo2;
