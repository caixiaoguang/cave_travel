$(function () {
    var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
        maxZoom: 18,
        minZoom: 5
    });
    var normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
        maxZoom: 18,
        minZoom: 5
    });
    /**
     * 天地图内容
     */
    var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
        normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
            maxZoom: 18,
            minZoom: 5
        }),
        imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        }),
        imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        });

    var normal = L.layerGroup([normalm, normala]),
        image = L.layerGroup([imgm, imga]);
    /**
     * 谷歌
     */
    var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
        satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        });
    /**
     * 高德地图
     */
    var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5
    });
    var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);



    var baseLayers = {
        // "智图地图": normalm1,
        // "智图多彩": normalm2,
        "智图午夜蓝": normalm3,
        // "智图灰色": normalm4,
        // "智图暖色": normalm5,
        // "智图冷色": normalm6,
        "天地图": normal,
        "天地图影像": image,
        // "谷歌地图": normalMap,
        // "谷歌影像": satelliteMap,
        "高德地图": Gaode,
        "高德影像": Gaodimage,

    }

    var map = L.map("map", {
        center: [26.6029559085, 105.6751861572],
        zoom: 8,
        layers: [normal],
        zoomControl: false
    });

    L.control.layers(baseLayers, null).addTo(map);
    L.control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小'
    }).addTo(map);

    var table = layui.table;


    function onEachFeature(feature, layer) {
        layer.bindPopup('<table class="layui-table" lay-size="sm"><colgroup><col><col><col></colgroup><thead><tr><th>属性</th><th>值</th></tr> </thead<tbody><tr><td>经纬度</td><td>' + feature.geometry.coordinates + '</td></tr><tr><td>name</td><td></td></tr><tr><td>width</td><td></td></tr><tr><td>height</td><td></td></tr><tr><td>描述</td><td></td></tr></tbody></table>');
    }


    function drawPoint(geojson) {
        L.geoJSON(geojson, {

            onEachFeature: onEachFeature,

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: "#ff7800",
                    color: "#555",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);
    }

    var cavePoint = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.74041748046875,
                        27.15936422843682
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        107.1551513671875,
                        27.09336363811584
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.87774658203125,
                        26.983276203452657
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.44653320312499,
                        26.92206991673282
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.3311767578125,
                        26.725986812271756
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.42730712890625,
                        26.477948705162902
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        105.3369140625,
                        26.83387451505858
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        105.44677734375,
                        26.35742006833118
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        105.62255859375,
                        25.898761936567023
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        105.633544921875,
                        27.46928747369202
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.2103271484375,
                        25.953105584547533
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.89147949218749,
                        25.626668871238568
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        105.83129882812499,
                        24.946219074360084
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        107.7154541015625,
                        26.504988828743404
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        104.5513916015625,
                        26.711266913515747
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        104.7052001953125,
                        25.54244147012483
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.69647216796874,
                        25.175116531621764
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        103.60107421874999,
                        27.49852672279832
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        102.7001953125,
                        26.02717014049738
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        103.447265625,
                        23.986252599841798
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        103.42529296875,
                        25.64152637306577
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        104.96337890625,
                        23.58412603264412
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        100.1953125,
                        25.62171595984575
                    ]
                }
            }
        ]
    }

    drawPoint(cavePoint);


    //地图打印插件
    var printer = L.easyPrint({
        // tileLayer: normal,
        sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
        filename: 'myMap',
        exportOnly: true,
        hidden:true,
        hideControlContainer: true
    }).addTo(map);

    function manualPrint() {
        printer.printMap('CurrentSize', 'myMap')
    }


    $('#export-map').on('click', manualPrint)

})






