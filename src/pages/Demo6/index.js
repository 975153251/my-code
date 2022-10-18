// Demo6
import { useLocation } from 'react-router';
import Header from '../../components/common/Header';
import Container from '../../components/common/Container';
import * as THREE from 'three';
import styles from './index.module.scss';
import { useEffect } from 'react';

import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls';
import getQueryString from '../../utils/Common/getQueryString';

const Demo6 = () => {
  const param = useLocation();
  const pageName = getQueryString(param.search, 'title') || '';

  useEffect(() => {
    const view = document.getElementById('viewBox');
    /**
     * 创建场景对象Scene
     */
    const scene = new THREE.Scene();

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axesHelper1 = new THREE.AxesHelper(120);
    axesHelper1.position.set(0, 0, 0);
    scene.add(axesHelper1);

    /**
     * 创建网格模型
     */
    var geometry1 = new THREE.BoxGeometry(50, 50, 50); //创建一个立方体几何对象Geometry

    // 几何体xyz三个方向都放大2倍
    geometry1.scale(0.5, 1.5, 2);
    // 几何体沿着x轴平移50
    geometry1.translate(50, 0, 0);
    // 几何体绕着x轴旋转45度
    geometry1.rotateX(Math.PI / 4);
    // 居中：偏移的几何体居中
    // geometry1.center();

    var material1 = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
      // vertexColors: THREE.FaceColors,
      // wireframe:true,//线框模式渲染
    }); //材质对象Material

    var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    // 网格模型xyz方向分别缩放0.5,1.5,2倍
    mesh1.scale.set(0.5, 1.5, 2);

    scene.add(mesh1);

    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    var width = view.clientWidth; //窗口宽度
    var height = view.clientHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    view.appendChild(renderer.domElement); //body元素中插入canvas对象
    // //执行渲染操作   指定场景、相机作为参数
    // renderer.render(scene, camera);

    // 创建轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.target.set(120,0,0);

    function render() {
      //执行渲染操作   指定场景、相机作为参数
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    render();

    // return () => {
    //     view.removeChild(renderer.domElement)
    // }
  }, []);

  return (
    <div className={styles.demoContainer}>
      <Header title={pageName} />
      <Container></Container>
    </div>
  );
};

export default Demo6;
