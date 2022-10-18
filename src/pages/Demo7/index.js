// Demo7
import { useLocation } from 'react-router';
import Header from '../../components/common/Header';
import Container from '../../components/common/Container';
import * as THREE from 'three';
import styles from './index.module.scss';
import { useEffect } from 'react';

import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls';
import getQueryString from '../../utils/Common/getQueryString';

const Demo7 = () => {
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
    var geometry1 = new THREE.SphereGeometry(50, 15, 15); //创建一个球体几何对象
    // 几何体沿着x轴平移-150
    geometry1.translate(-150, 0, 0);
    // 创建一个点材质对象
    var material1 = new THREE.PointsMaterial({
      color: 0x0000ff, //颜色
      size: 3, //点渲染尺寸
    });
    //点模型对象  参数：几何体  点材质
    var point = new THREE.Points(geometry1, material1);
    scene.add(point); //网格模型添加到场景中

    var geometry2 = new THREE.SphereGeometry(50, 15, 15); //球体
    // 直线基础材质对象
    var material2 = new THREE.LineBasicMaterial({
      color: 0x0000ff,
    });
    var line = new THREE.Line(geometry2, material2); //线模型对象
    scene.add(line); //点模型添加到场景中s

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

    // 几何体沿着x轴平移150
    // geometry3.translate(250, 0, 0);
    // 虚线材质对象：产生虚线效果
    var material3 = new THREE.LineDashedMaterial({
      color: 0x0000ff,
      dashSize: 10, //显示线段的大小。默认为3。
      gapSize: 5, //间隙的大小。默认为1
    });
    var DashLine = new THREE.Line(geometry3, material3); //线模型对象
    //  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
    DashLine.computeLineDistances();
    scene.add(DashLine); //点模型添加到场景中

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

export default Demo7;
