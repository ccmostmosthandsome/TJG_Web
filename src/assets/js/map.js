// 
//  描述: Map地图js文件
//  作者: csg
//  日期: 2020-09/17
// 

import mapboxgl from 'mapbox-gl';

export const initMap={
    loadMap(){
    let mapDiv=document.getElementById('map');
    mapboxgl.accessToken = 'pk.eyJ1IjoieGFnZW90aW1lIiwiYSI6ImNrZW53cWNwdTAzZnQyc29pZmxiaG9ldDMifQ.wLTACennW-9IBHOdC8O5Gg';
    let map = new mapboxgl.Map({
    container: mapDiv, // container id 绑定的组件的id
    style: 'mapbox://styles/xageotime/ckff44eha0w9s19pik4arylnc', //地图样式，可以使用官网预定义的样式,也可以自定义
    center: [118.3,38.9], // 初始坐标系
    minZoom:8.5,
    maxZoom:12,    
    pitch: 30,  
    bearing: 0, 
    antialias: false //抗锯齿，通过false关闭提升性能
     });
    map.on('click',function(e){
      alert(e);
    })
  } 
}