// Demo4
import Header from '../../components/common/Header';
import Container from '../../components/common/Container';
import * as THREE from 'three';
import styles from './index.module.scss';
import { useEffect } from 'react';

import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls';

const Demo4 = () => {
  useEffect(() => {
    const view = document.getElementById('viewBox');
    /**
     * 创建场景对象Scene
     */
    const scene = new THREE.Scene();

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axesHelper1 = new THREE.AxesHelper(120);
    axesHelper1.position.set(-180, 0, 0);
    scene.add(axesHelper1);
    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axesHelper2 = new THREE.AxesHelper(120);
    axesHelper2.position.set(0, 0, 0);
    scene.add(axesHelper2);
    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axesHelper3 = new THREE.AxesHelper(120);
    axesHelper3.position.set(180, 0, 0);
    scene.add(axesHelper3);

    //类型数组创建顶点颜色color数据
    var colors = new Float32Array([
      1,
      0,
      0, //顶点1颜色
      0,
      1,
      0, //顶点2颜色
      0,
      0,
      1, //顶点3颜色

      1,
      1,
      0, //顶点4颜色
      0,
      1,
      1, //顶点5颜色
      1,
      0,
      1, //顶点6颜色
    ]);

    // 三角面
    var geometry1 = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    //类型数组创建顶点数据
    var vertices = new Float32Array([
      -180,
      0,
      0, //顶点1坐标
      -130,
      0,
      0, //顶点2坐标
      -180,
      100,
      0, //顶点3坐标
      -180,
      0,
      10, //顶点4坐标
      -180,
      0,
      100, //顶点5坐标
      -130,
      0,
      10, //顶点6坐标
    ]);
    // 创建属性缓冲区对象
    var attribue1 = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // 设置几何体attributes属性的位置属性
    geometry1.attributes.position = attribue1;

    geometry1.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

    // 三角面(网格)渲染模式
    var material1 = new THREE.MeshBasicMaterial({
      // color: 0x0000ff, //三角面颜色
      vertexColors: true, //以顶点颜色为准
      side: THREE.DoubleSide, //两面可见
    }); //材质对象
    var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    scene.add(mesh1);

    // 点模型
    var geometry2 = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    //类型数组创建顶点数据
    var vertices = new Float32Array([
      0,
      0,
      0, //顶点1坐标
      50,
      0,
      0, //顶点2坐标
      0,
      100,
      0, //顶点3坐标
      0,
      0,
      10, //顶点4坐标
      0,
      0,
      100, //顶点5坐标
      50,
      0,
      10, //顶点6坐标
    ]);
    // 创建属性缓冲区对象
    var attribue2 = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // 设置几何体attributes属性的位置属性
    geometry2.attributes.position = attribue2;

    // //类型数组创建顶点颜色color数据
    // var colors = new Float32Array([
    //   1,
    //   0,
    //   0, //顶点1颜色
    //   0,
    //   1,
    //   0, //顶点2颜色
    //   0,
    //   0,
    //   1, //顶点3颜色

    //   1,
    //   1,
    //   0, //顶点4颜色
    //   0,
    //   1,
    //   1, //顶点5颜色
    //   1,
    //   0,
    //   1, //顶点6颜色
    // ]);
    // 设置几何体attributes属性的颜色color属性
    geometry2.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

    // 点模型 渲染模式
    var material2 = new THREE.PointsMaterial({
      // color: 0xff0000, //颜色
      vertexColors: true, //以顶点颜色为准
      size: 10.0, //点对象像素尺寸
    }); //材质对象
    var points = new THREE.Points(geometry2, material2); //网格模型对象Mesh
    scene.add(points);

    // 线模型
    var geometry3 = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    //类型数组创建顶点数据
    var vertices = new Float32Array([
      180,
      0,
      0, //顶点1坐标
      230,
      0,
      0, //顶点2坐标
      180,
      100,
      0, //顶点3坐标
      180,
      0,
      10, //顶点4坐标
      180,
      0,
      100, //顶点5坐标
      230,
      0,
      10, //顶点6坐标
    ]);
    // 创建属性缓冲区对象
    var attribue3 = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // 设置几何体attributes属性的位置属性
    geometry3.attributes.position = attribue3;

    geometry3.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

    // 线渲染模式
    var material3 = new THREE.LineBasicMaterial({
      // color: 0x0000ff, //三角面颜色
      vertexColors: true, //以顶点颜色为准
    }); //材质对象
    var line = new THREE.Line(geometry3, material3); //网格模型对象Mesh
    scene.add(line);

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
      <Header />
      <Container></Container>
    </div>
  );
};

export default Demo4;
