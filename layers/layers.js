ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:21096").setExtent([441101.946912, 67849.610721, 442067.998428, 68302.674355]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Walkway_2 = new ol.format.GeoJSON();
var features_Walkway_2 = format_Walkway_2.readFeatures(json_Walkway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Walkway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_2.addFeatures(features_Walkway_2);
var lyr_Walkway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_2, 
                style: style_Walkway_2,
                interactive: true,
                title: '<img src="styles/legend/Walkway_2.png" /> Walkway'
            });
var format_Walkway_3 = new ol.format.GeoJSON();
var features_Walkway_3 = format_Walkway_3.readFeatures(json_Walkway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Walkway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_3.addFeatures(features_Walkway_3);
var lyr_Walkway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_3, 
                style: style_Walkway_3,
                interactive: true,
                title: '<img src="styles/legend/Walkway_3.png" /> Walkway'
            });
var format_Walkway_4 = new ol.format.GeoJSON();
var features_Walkway_4 = format_Walkway_4.readFeatures(json_Walkway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Walkway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkway_4.addFeatures(features_Walkway_4);
var lyr_Walkway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walkway_4, 
                style: style_Walkway_4,
                interactive: true,
                title: '<img src="styles/legend/Walkway_4.png" /> Walkway'
            });
var format_Volleybalcourt_5 = new ol.format.GeoJSON();
var features_Volleybalcourt_5 = format_Volleybalcourt_5.readFeatures(json_Volleybalcourt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Volleybalcourt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volleybalcourt_5.addFeatures(features_Volleybalcourt_5);
var lyr_Volleybalcourt_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volleybalcourt_5, 
                style: style_Volleybalcourt_5,
                interactive: true,
                title: '<img src="styles/legend/Volleybalcourt_5.png" /> Volleybal court'
            });
var format_Volleybalcourt_6 = new ol.format.GeoJSON();
var features_Volleybalcourt_6 = format_Volleybalcourt_6.readFeatures(json_Volleybalcourt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Volleybalcourt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volleybalcourt_6.addFeatures(features_Volleybalcourt_6);
var lyr_Volleybalcourt_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volleybalcourt_6, 
                style: style_Volleybalcourt_6,
                interactive: true,
                title: '<img src="styles/legend/Volleybalcourt_6.png" /> Volleybal court'
            });
var format_Volleybalcourt_7 = new ol.format.GeoJSON();
var features_Volleybalcourt_7 = format_Volleybalcourt_7.readFeatures(json_Volleybalcourt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Volleybalcourt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volleybalcourt_7.addFeatures(features_Volleybalcourt_7);
var lyr_Volleybalcourt_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volleybalcourt_7, 
                style: style_Volleybalcourt_7,
                interactive: true,
                title: '<img src="styles/legend/Volleybalcourt_7.png" /> Volleybal court'
            });
var format_UpperFootballpitch_8 = new ol.format.GeoJSON();
var features_UpperFootballpitch_8 = format_UpperFootballpitch_8.readFeatures(json_UpperFootballpitch_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_UpperFootballpitch_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperFootballpitch_8.addFeatures(features_UpperFootballpitch_8);
var lyr_UpperFootballpitch_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpperFootballpitch_8, 
                style: style_UpperFootballpitch_8,
                interactive: true,
                title: '<img src="styles/legend/UpperFootballpitch_8.png" /> Upper Football pitch'
            });
var format_UpperFootballpitch_9 = new ol.format.GeoJSON();
var features_UpperFootballpitch_9 = format_UpperFootballpitch_9.readFeatures(json_UpperFootballpitch_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_UpperFootballpitch_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperFootballpitch_9.addFeatures(features_UpperFootballpitch_9);
var lyr_UpperFootballpitch_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpperFootballpitch_9, 
                style: style_UpperFootballpitch_9,
                interactive: true,
                title: '<img src="styles/legend/UpperFootballpitch_9.png" /> Upper Football pitch'
            });
var format_UpperFootballpitch_10 = new ol.format.GeoJSON();
var features_UpperFootballpitch_10 = format_UpperFootballpitch_10.readFeatures(json_UpperFootballpitch_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_UpperFootballpitch_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperFootballpitch_10.addFeatures(features_UpperFootballpitch_10);
var lyr_UpperFootballpitch_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpperFootballpitch_10, 
                style: style_UpperFootballpitch_10,
                interactive: true,
                title: '<img src="styles/legend/UpperFootballpitch_10.png" /> Upper Football pitch'
            });
var format_Trees_11 = new ol.format.GeoJSON();
var features_Trees_11 = format_Trees_11.readFeatures(json_Trees_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Trees_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_11.addFeatures(features_Trees_11);
var lyr_Trees_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_11, 
                style: style_Trees_11,
                interactive: true,
                title: '<img src="styles/legend/Trees_11.png" /> Trees'
            });
var format_Trees_12 = new ol.format.GeoJSON();
var features_Trees_12 = format_Trees_12.readFeatures(json_Trees_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Trees_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_12.addFeatures(features_Trees_12);
var lyr_Trees_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_12, 
                style: style_Trees_12,
                interactive: true,
                title: '<img src="styles/legend/Trees_12.png" /> Trees'
            });
var format_Trees_13 = new ol.format.GeoJSON();
var features_Trees_13 = format_Trees_13.readFeatures(json_Trees_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Trees_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_13.addFeatures(features_Trees_13);
var lyr_Trees_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_13, 
                style: style_Trees_13,
                interactive: true,
                title: '<img src="styles/legend/Trees_13.png" /> Trees'
            });
var format_Toilet_14 = new ol.format.GeoJSON();
var features_Toilet_14 = format_Toilet_14.readFeatures(json_Toilet_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Toilet_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_14.addFeatures(features_Toilet_14);
var lyr_Toilet_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toilet_14, 
                style: style_Toilet_14,
                interactive: true,
                title: '<img src="styles/legend/Toilet_14.png" /> Toilet'
            });
var format_Toilet_15 = new ol.format.GeoJSON();
var features_Toilet_15 = format_Toilet_15.readFeatures(json_Toilet_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Toilet_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_15.addFeatures(features_Toilet_15);
var lyr_Toilet_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toilet_15, 
                style: style_Toilet_15,
                interactive: true,
                title: '<img src="styles/legend/Toilet_15.png" /> Toilet'
            });
var format_Toilet_16 = new ol.format.GeoJSON();
var features_Toilet_16 = format_Toilet_16.readFeatures(json_Toilet_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Toilet_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_16.addFeatures(features_Toilet_16);
var lyr_Toilet_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toilet_16, 
                style: style_Toilet_16,
                interactive: true,
                title: '<img src="styles/legend/Toilet_16.png" /> Toilet'
            });
var format_Tenniscourt_17 = new ol.format.GeoJSON();
var features_Tenniscourt_17 = format_Tenniscourt_17.readFeatures(json_Tenniscourt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tenniscourt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tenniscourt_17.addFeatures(features_Tenniscourt_17);
var lyr_Tenniscourt_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenniscourt_17, 
                style: style_Tenniscourt_17,
                interactive: true,
                title: '<img src="styles/legend/Tenniscourt_17.png" /> Tennis court'
            });
var format_Tenniscourt_18 = new ol.format.GeoJSON();
var features_Tenniscourt_18 = format_Tenniscourt_18.readFeatures(json_Tenniscourt_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tenniscourt_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tenniscourt_18.addFeatures(features_Tenniscourt_18);
var lyr_Tenniscourt_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenniscourt_18, 
                style: style_Tenniscourt_18,
                interactive: true,
                title: '<img src="styles/legend/Tenniscourt_18.png" /> Tennis court'
            });
var format_Tenniscourt_19 = new ol.format.GeoJSON();
var features_Tenniscourt_19 = format_Tenniscourt_19.readFeatures(json_Tenniscourt_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tenniscourt_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tenniscourt_19.addFeatures(features_Tenniscourt_19);
var lyr_Tenniscourt_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenniscourt_19, 
                style: style_Tenniscourt_19,
                interactive: true,
                title: '<img src="styles/legend/Tenniscourt_19.png" /> Tennis court'
            });
var format_Tank_20 = new ol.format.GeoJSON();
var features_Tank_20 = format_Tank_20.readFeatures(json_Tank_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tank_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tank_20.addFeatures(features_Tank_20);
var lyr_Tank_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tank_20, 
                style: style_Tank_20,
                interactive: true,
                title: '<img src="styles/legend/Tank_20.png" /> Tank'
            });
var format_Tank_21 = new ol.format.GeoJSON();
var features_Tank_21 = format_Tank_21.readFeatures(json_Tank_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tank_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tank_21.addFeatures(features_Tank_21);
var lyr_Tank_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tank_21, 
                style: style_Tank_21,
                interactive: true,
                title: '<img src="styles/legend/Tank_21.png" /> Tank'
            });
var format_Tank_22 = new ol.format.GeoJSON();
var features_Tank_22 = format_Tank_22.readFeatures(json_Tank_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Tank_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tank_22.addFeatures(features_Tank_22);
var lyr_Tank_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tank_22, 
                style: style_Tank_22,
                interactive: true,
                title: '<img src="styles/legend/Tank_22.png" /> Tank'
            });
var format_Swimmingpool_23 = new ol.format.GeoJSON();
var features_Swimmingpool_23 = format_Swimmingpool_23.readFeatures(json_Swimmingpool_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpool_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpool_23.addFeatures(features_Swimmingpool_23);
var lyr_Swimmingpool_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpool_23, 
                style: style_Swimmingpool_23,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpool_23.png" /> Swimming pool'
            });
var format_Swimmingpool_24 = new ol.format.GeoJSON();
var features_Swimmingpool_24 = format_Swimmingpool_24.readFeatures(json_Swimmingpool_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpool_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpool_24.addFeatures(features_Swimmingpool_24);
var lyr_Swimmingpool_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpool_24, 
                style: style_Swimmingpool_24,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpool_24.png" /> Swimming pool'
            });
var format_Swimmingpool_25 = new ol.format.GeoJSON();
var features_Swimmingpool_25 = format_Swimmingpool_25.readFeatures(json_Swimmingpool_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpool_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpool_25.addFeatures(features_Swimmingpool_25);
var lyr_Swimmingpool_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpool_25, 
                style: style_Swimmingpool_25,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpool_25.png" /> Swimming pool'
            });
var format_Swimmingpoolblock_26 = new ol.format.GeoJSON();
var features_Swimmingpoolblock_26 = format_Swimmingpoolblock_26.readFeatures(json_Swimmingpoolblock_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpoolblock_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpoolblock_26.addFeatures(features_Swimmingpoolblock_26);
var lyr_Swimmingpoolblock_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpoolblock_26, 
                style: style_Swimmingpoolblock_26,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpoolblock_26.png" /> Swimming pool block'
            });
var format_Swimmingpoolblock_27 = new ol.format.GeoJSON();
var features_Swimmingpoolblock_27 = format_Swimmingpoolblock_27.readFeatures(json_Swimmingpoolblock_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpoolblock_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpoolblock_27.addFeatures(features_Swimmingpoolblock_27);
var lyr_Swimmingpoolblock_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpoolblock_27, 
                style: style_Swimmingpoolblock_27,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpoolblock_27.png" /> Swimming pool block'
            });
var format_Swimmingpoolblock_28 = new ol.format.GeoJSON();
var features_Swimmingpoolblock_28 = format_Swimmingpoolblock_28.readFeatures(json_Swimmingpoolblock_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Swimmingpoolblock_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmingpoolblock_28.addFeatures(features_Swimmingpoolblock_28);
var lyr_Swimmingpoolblock_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swimmingpoolblock_28, 
                style: style_Swimmingpoolblock_28,
                interactive: true,
                title: '<img src="styles/legend/Swimmingpoolblock_28.png" /> Swimming pool block'
            });
var format_Sciencecomplex_29 = new ol.format.GeoJSON();
var features_Sciencecomplex_29 = format_Sciencecomplex_29.readFeatures(json_Sciencecomplex_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Sciencecomplex_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sciencecomplex_29.addFeatures(features_Sciencecomplex_29);
var lyr_Sciencecomplex_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sciencecomplex_29, 
                style: style_Sciencecomplex_29,
                interactive: true,
                title: '<img src="styles/legend/Sciencecomplex_29.png" /> Science complex'
            });
var format_Sciencecomplex_30 = new ol.format.GeoJSON();
var features_Sciencecomplex_30 = format_Sciencecomplex_30.readFeatures(json_Sciencecomplex_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Sciencecomplex_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sciencecomplex_30.addFeatures(features_Sciencecomplex_30);
var lyr_Sciencecomplex_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sciencecomplex_30, 
                style: style_Sciencecomplex_30,
                interactive: true,
                title: '<img src="styles/legend/Sciencecomplex_30.png" /> Science complex'
            });
var format_Sciencecomplex_31 = new ol.format.GeoJSON();
var features_Sciencecomplex_31 = format_Sciencecomplex_31.readFeatures(json_Sciencecomplex_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Sciencecomplex_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sciencecomplex_31.addFeatures(features_Sciencecomplex_31);
var lyr_Sciencecomplex_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sciencecomplex_31, 
                style: style_Sciencecomplex_31,
                interactive: true,
                title: '<img src="styles/legend/Sciencecomplex_31.png" /> Science complex'
            });
var format_Road_32 = new ol.format.GeoJSON();
var features_Road_32 = format_Road_32.readFeatures(json_Road_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Road_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_32.addFeatures(features_Road_32);
var lyr_Road_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_32, 
                style: style_Road_32,
                interactive: true,
                title: '<img src="styles/legend/Road_32.png" /> Road'
            });
var format_Road_33 = new ol.format.GeoJSON();
var features_Road_33 = format_Road_33.readFeatures(json_Road_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Road_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_33.addFeatures(features_Road_33);
var lyr_Road_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_33, 
                style: style_Road_33,
                interactive: true,
                title: '<img src="styles/legend/Road_33.png" /> Road'
            });
var format_Road_34 = new ol.format.GeoJSON();
var features_Road_34 = format_Road_34.readFeatures(json_Road_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Road_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_34.addFeatures(features_Road_34);
var lyr_Road_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_34, 
                style: style_Road_34,
                interactive: true,
                title: '<img src="styles/legend/Road_34.png" /> Road'
            });
var format_MainBlockAgriculturecomplex_35 = new ol.format.GeoJSON();
var features_MainBlockAgriculturecomplex_35 = format_MainBlockAgriculturecomplex_35.readFeatures(json_MainBlockAgriculturecomplex_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_MainBlockAgriculturecomplex_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainBlockAgriculturecomplex_35.addFeatures(features_MainBlockAgriculturecomplex_35);
var lyr_MainBlockAgriculturecomplex_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainBlockAgriculturecomplex_35, 
                style: style_MainBlockAgriculturecomplex_35,
                interactive: true,
                title: '<img src="styles/legend/MainBlockAgriculturecomplex_35.png" /> Main Block (Agriculture complex)'
            });
var format_MainBlockAgriculturecomplex_36 = new ol.format.GeoJSON();
var features_MainBlockAgriculturecomplex_36 = format_MainBlockAgriculturecomplex_36.readFeatures(json_MainBlockAgriculturecomplex_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_MainBlockAgriculturecomplex_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainBlockAgriculturecomplex_36.addFeatures(features_MainBlockAgriculturecomplex_36);
var lyr_MainBlockAgriculturecomplex_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainBlockAgriculturecomplex_36, 
                style: style_MainBlockAgriculturecomplex_36,
                interactive: true,
                title: '<img src="styles/legend/MainBlockAgriculturecomplex_36.png" /> Main Block (Agriculture complex)'
            });
var format_MainBlockAgriculturecomplex_37 = new ol.format.GeoJSON();
var features_MainBlockAgriculturecomplex_37 = format_MainBlockAgriculturecomplex_37.readFeatures(json_MainBlockAgriculturecomplex_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_MainBlockAgriculturecomplex_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainBlockAgriculturecomplex_37.addFeatures(features_MainBlockAgriculturecomplex_37);
var lyr_MainBlockAgriculturecomplex_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainBlockAgriculturecomplex_37, 
                style: style_MainBlockAgriculturecomplex_37,
                interactive: true,
                title: '<img src="styles/legend/MainBlockAgriculturecomplex_37.png" /> Main Block (Agriculture complex)'
            });
var format_Library_38 = new ol.format.GeoJSON();
var features_Library_38 = format_Library_38.readFeatures(json_Library_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Library_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Library_38.addFeatures(features_Library_38);
var lyr_Library_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Library_38, 
                style: style_Library_38,
                interactive: true,
                title: '<img src="styles/legend/Library_38.png" /> Library'
            });
var format_Library_39 = new ol.format.GeoJSON();
var features_Library_39 = format_Library_39.readFeatures(json_Library_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Library_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Library_39.addFeatures(features_Library_39);
var lyr_Library_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Library_39, 
                style: style_Library_39,
                interactive: true,
                title: '<img src="styles/legend/Library_39.png" /> Library'
            });
var format_Library_40 = new ol.format.GeoJSON();
var features_Library_40 = format_Library_40.readFeatures(json_Library_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Library_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Library_40.addFeatures(features_Library_40);
var lyr_Library_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Library_40, 
                style: style_Library_40,
                interactive: true,
                title: '<img src="styles/legend/Library_40.png" /> Library'
            });
var format_Laboratoryblock_41 = new ol.format.GeoJSON();
var features_Laboratoryblock_41 = format_Laboratoryblock_41.readFeatures(json_Laboratoryblock_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Laboratoryblock_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laboratoryblock_41.addFeatures(features_Laboratoryblock_41);
var lyr_Laboratoryblock_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Laboratoryblock_41, 
                style: style_Laboratoryblock_41,
                interactive: true,
                title: '<img src="styles/legend/Laboratoryblock_41.png" /> Laboratory block'
            });
var format_Laboratoryblock_42 = new ol.format.GeoJSON();
var features_Laboratoryblock_42 = format_Laboratoryblock_42.readFeatures(json_Laboratoryblock_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Laboratoryblock_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laboratoryblock_42.addFeatures(features_Laboratoryblock_42);
var lyr_Laboratoryblock_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Laboratoryblock_42, 
                style: style_Laboratoryblock_42,
                interactive: true,
                title: '<img src="styles/legend/Laboratoryblock_42.png" /> Laboratory block'
            });
var format_Laboratoryblock_43 = new ol.format.GeoJSON();
var features_Laboratoryblock_43 = format_Laboratoryblock_43.readFeatures(json_Laboratoryblock_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Laboratoryblock_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laboratoryblock_43.addFeatures(features_Laboratoryblock_43);
var lyr_Laboratoryblock_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Laboratoryblock_43, 
                style: style_Laboratoryblock_43,
                interactive: true,
                title: '<img src="styles/legend/Laboratoryblock_43.png" /> Laboratory block'
            });
var format_Footballplayground_44 = new ol.format.GeoJSON();
var features_Footballplayground_44 = format_Footballplayground_44.readFeatures(json_Footballplayground_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Footballplayground_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Footballplayground_44.addFeatures(features_Footballplayground_44);
var lyr_Footballplayground_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Footballplayground_44, 
                style: style_Footballplayground_44,
                interactive: true,
                title: '<img src="styles/legend/Footballplayground_44.png" /> Football playground'
            });
var format_Footballplayground_45 = new ol.format.GeoJSON();
var features_Footballplayground_45 = format_Footballplayground_45.readFeatures(json_Footballplayground_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Footballplayground_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Footballplayground_45.addFeatures(features_Footballplayground_45);
var lyr_Footballplayground_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Footballplayground_45, 
                style: style_Footballplayground_45,
                interactive: true,
                title: '<img src="styles/legend/Footballplayground_45.png" /> Football playground'
            });
var format_Footballplayground_46 = new ol.format.GeoJSON();
var features_Footballplayground_46 = format_Footballplayground_46.readFeatures(json_Footballplayground_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Footballplayground_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Footballplayground_46.addFeatures(features_Footballplayground_46);
var lyr_Footballplayground_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Footballplayground_46, 
                style: style_Footballplayground_46,
                interactive: true,
                title: '<img src="styles/legend/Footballplayground_46.png" /> Football playground'
            });
var format_Fence_47 = new ol.format.GeoJSON();
var features_Fence_47 = format_Fence_47.readFeatures(json_Fence_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Fence_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fence_47.addFeatures(features_Fence_47);
var lyr_Fence_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fence_47, 
                style: style_Fence_47,
                interactive: true,
                title: '<img src="styles/legend/Fence_47.png" /> Fence'
            });
var format_Fence_48 = new ol.format.GeoJSON();
var features_Fence_48 = format_Fence_48.readFeatures(json_Fence_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Fence_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fence_48.addFeatures(features_Fence_48);
var lyr_Fence_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fence_48, 
                style: style_Fence_48,
                interactive: true,
                title: '<img src="styles/legend/Fence_48.png" /> Fence'
            });
var format_Fence_49 = new ol.format.GeoJSON();
var features_Fence_49 = format_Fence_49.readFeatures(json_Fence_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Fence_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fence_49.addFeatures(features_Fence_49);
var lyr_Fence_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fence_49, 
                style: style_Fence_49,
                interactive: true,
                title: '<img src="styles/legend/Fence_49.png" /> Fence'
            });
var format_Dininghall_50 = new ol.format.GeoJSON();
var features_Dininghall_50 = format_Dininghall_50.readFeatures(json_Dininghall_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Dininghall_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dininghall_50.addFeatures(features_Dininghall_50);
var lyr_Dininghall_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dininghall_50, 
                style: style_Dininghall_50,
                interactive: true,
                title: '<img src="styles/legend/Dininghall_50.png" /> Dining hall'
            });
var format_Dininghall_51 = new ol.format.GeoJSON();
var features_Dininghall_51 = format_Dininghall_51.readFeatures(json_Dininghall_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Dininghall_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dininghall_51.addFeatures(features_Dininghall_51);
var lyr_Dininghall_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dininghall_51, 
                style: style_Dininghall_51,
                interactive: true,
                title: '<img src="styles/legend/Dininghall_51.png" /> Dining hall'
            });
var format_Dininghall_52 = new ol.format.GeoJSON();
var features_Dininghall_52 = format_Dininghall_52.readFeatures(json_Dininghall_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Dininghall_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dininghall_52.addFeatures(features_Dininghall_52);
var lyr_Dininghall_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dininghall_52, 
                style: style_Dininghall_52,
                interactive: true,
                title: '<img src="styles/legend/Dininghall_52.png" /> Dining hall'
            });
var format_Basketballcourt_53 = new ol.format.GeoJSON();
var features_Basketballcourt_53 = format_Basketballcourt_53.readFeatures(json_Basketballcourt_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Basketballcourt_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basketballcourt_53.addFeatures(features_Basketballcourt_53);
var lyr_Basketballcourt_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basketballcourt_53, 
                style: style_Basketballcourt_53,
                interactive: true,
                title: '<img src="styles/legend/Basketballcourt_53.png" /> Basketball court'
            });
var format_Basketballcourt_54 = new ol.format.GeoJSON();
var features_Basketballcourt_54 = format_Basketballcourt_54.readFeatures(json_Basketballcourt_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Basketballcourt_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basketballcourt_54.addFeatures(features_Basketballcourt_54);
var lyr_Basketballcourt_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basketballcourt_54, 
                style: style_Basketballcourt_54,
                interactive: true,
                title: '<img src="styles/legend/Basketballcourt_54.png" /> Basketball court'
            });
var format_Basketballcourt_55 = new ol.format.GeoJSON();
var features_Basketballcourt_55 = format_Basketballcourt_55.readFeatures(json_Basketballcourt_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Basketballcourt_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basketballcourt_55.addFeatures(features_Basketballcourt_55);
var lyr_Basketballcourt_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basketballcourt_55, 
                style: style_Basketballcourt_55,
                interactive: true,
                title: '<img src="styles/legend/Basketballcourt_55.png" /> Basketball court'
            });
var format_Askariblock_56 = new ol.format.GeoJSON();
var features_Askariblock_56 = format_Askariblock_56.readFeatures(json_Askariblock_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Askariblock_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Askariblock_56.addFeatures(features_Askariblock_56);
var lyr_Askariblock_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Askariblock_56, 
                style: style_Askariblock_56,
                interactive: true,
                title: '<img src="styles/legend/Askariblock_56.png" /> Askari block'
            });
var format_Askariblock_57 = new ol.format.GeoJSON();
var features_Askariblock_57 = format_Askariblock_57.readFeatures(json_Askariblock_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Askariblock_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Askariblock_57.addFeatures(features_Askariblock_57);
var lyr_Askariblock_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Askariblock_57, 
                style: style_Askariblock_57,
                interactive: true,
                title: '<img src="styles/legend/Askariblock_57.png" /> Askari block'
            });
var format_Askariblock_58 = new ol.format.GeoJSON();
var features_Askariblock_58 = format_Askariblock_58.readFeatures(json_Askariblock_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Askariblock_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Askariblock_58.addFeatures(features_Askariblock_58);
var lyr_Askariblock_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Askariblock_58, 
                style: style_Askariblock_58,
                interactive: true,
                title: '<img src="styles/legend/Askariblock_58.png" /> Askari block'
            });
var format_Administrativeblock_59 = new ol.format.GeoJSON();
var features_Administrativeblock_59 = format_Administrativeblock_59.readFeatures(json_Administrativeblock_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Administrativeblock_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrativeblock_59.addFeatures(features_Administrativeblock_59);
var lyr_Administrativeblock_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrativeblock_59, 
                style: style_Administrativeblock_59,
                interactive: true,
                title: '<img src="styles/legend/Administrativeblock_59.png" /> Administrative block'
            });
var format_Administrativeblock_60 = new ol.format.GeoJSON();
var features_Administrativeblock_60 = format_Administrativeblock_60.readFeatures(json_Administrativeblock_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Administrativeblock_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrativeblock_60.addFeatures(features_Administrativeblock_60);
var lyr_Administrativeblock_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrativeblock_60, 
                style: style_Administrativeblock_60,
                interactive: true,
                title: '<img src="styles/legend/Administrativeblock_60.png" /> Administrative block'
            });
var format_Administrativeblock_61 = new ol.format.GeoJSON();
var features_Administrativeblock_61 = format_Administrativeblock_61.readFeatures(json_Administrativeblock_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21096'});
var jsonSource_Administrativeblock_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrativeblock_61.addFeatures(features_Administrativeblock_61);
var lyr_Administrativeblock_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrativeblock_61, 
                style: style_Administrativeblock_61,
                interactive: true,
                title: '<img src="styles/legend/Administrativeblock_61.png" /> Administrative block'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Walkway_2.setVisible(true);lyr_Walkway_3.setVisible(true);lyr_Walkway_4.setVisible(true);lyr_Volleybalcourt_5.setVisible(true);lyr_Volleybalcourt_6.setVisible(true);lyr_Volleybalcourt_7.setVisible(true);lyr_UpperFootballpitch_8.setVisible(true);lyr_UpperFootballpitch_9.setVisible(true);lyr_UpperFootballpitch_10.setVisible(true);lyr_Trees_11.setVisible(true);lyr_Trees_12.setVisible(true);lyr_Trees_13.setVisible(true);lyr_Toilet_14.setVisible(true);lyr_Toilet_15.setVisible(true);lyr_Toilet_16.setVisible(true);lyr_Tenniscourt_17.setVisible(true);lyr_Tenniscourt_18.setVisible(true);lyr_Tenniscourt_19.setVisible(true);lyr_Tank_20.setVisible(true);lyr_Tank_21.setVisible(true);lyr_Tank_22.setVisible(true);lyr_Swimmingpool_23.setVisible(true);lyr_Swimmingpool_24.setVisible(true);lyr_Swimmingpool_25.setVisible(true);lyr_Swimmingpoolblock_26.setVisible(true);lyr_Swimmingpoolblock_27.setVisible(true);lyr_Swimmingpoolblock_28.setVisible(true);lyr_Sciencecomplex_29.setVisible(true);lyr_Sciencecomplex_30.setVisible(true);lyr_Sciencecomplex_31.setVisible(true);lyr_Road_32.setVisible(true);lyr_Road_33.setVisible(true);lyr_Road_34.setVisible(true);lyr_MainBlockAgriculturecomplex_35.setVisible(true);lyr_MainBlockAgriculturecomplex_36.setVisible(true);lyr_MainBlockAgriculturecomplex_37.setVisible(true);lyr_Library_38.setVisible(true);lyr_Library_39.setVisible(true);lyr_Library_40.setVisible(true);lyr_Laboratoryblock_41.setVisible(true);lyr_Laboratoryblock_42.setVisible(true);lyr_Laboratoryblock_43.setVisible(true);lyr_Footballplayground_44.setVisible(true);lyr_Footballplayground_45.setVisible(true);lyr_Footballplayground_46.setVisible(true);lyr_Fence_47.setVisible(true);lyr_Fence_48.setVisible(true);lyr_Fence_49.setVisible(true);lyr_Dininghall_50.setVisible(true);lyr_Dininghall_51.setVisible(true);lyr_Dininghall_52.setVisible(true);lyr_Basketballcourt_53.setVisible(true);lyr_Basketballcourt_54.setVisible(true);lyr_Basketballcourt_55.setVisible(true);lyr_Askariblock_56.setVisible(true);lyr_Askariblock_57.setVisible(true);lyr_Askariblock_58.setVisible(true);lyr_Administrativeblock_59.setVisible(true);lyr_Administrativeblock_60.setVisible(true);lyr_Administrativeblock_61.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Walkway_2,lyr_Walkway_3,lyr_Walkway_4,lyr_Volleybalcourt_5,lyr_Volleybalcourt_6,lyr_Volleybalcourt_7,lyr_UpperFootballpitch_8,lyr_UpperFootballpitch_9,lyr_UpperFootballpitch_10,lyr_Trees_11,lyr_Trees_12,lyr_Trees_13,lyr_Toilet_14,lyr_Toilet_15,lyr_Toilet_16,lyr_Tenniscourt_17,lyr_Tenniscourt_18,lyr_Tenniscourt_19,lyr_Tank_20,lyr_Tank_21,lyr_Tank_22,lyr_Swimmingpool_23,lyr_Swimmingpool_24,lyr_Swimmingpool_25,lyr_Swimmingpoolblock_26,lyr_Swimmingpoolblock_27,lyr_Swimmingpoolblock_28,lyr_Sciencecomplex_29,lyr_Sciencecomplex_30,lyr_Sciencecomplex_31,lyr_Road_32,lyr_Road_33,lyr_Road_34,lyr_MainBlockAgriculturecomplex_35,lyr_MainBlockAgriculturecomplex_36,lyr_MainBlockAgriculturecomplex_37,lyr_Library_38,lyr_Library_39,lyr_Library_40,lyr_Laboratoryblock_41,lyr_Laboratoryblock_42,lyr_Laboratoryblock_43,lyr_Footballplayground_44,lyr_Footballplayground_45,lyr_Footballplayground_46,lyr_Fence_47,lyr_Fence_48,lyr_Fence_49,lyr_Dininghall_50,lyr_Dininghall_51,lyr_Dininghall_52,lyr_Basketballcourt_53,lyr_Basketballcourt_54,lyr_Basketballcourt_55,lyr_Askariblock_56,lyr_Askariblock_57,lyr_Askariblock_58,lyr_Administrativeblock_59,lyr_Administrativeblock_60,lyr_Administrativeblock_61];
lyr_Walkway_2.set('fieldAliases', {'Id': 'Id', });
lyr_Walkway_3.set('fieldAliases', {'Id': 'Id', });
lyr_Walkway_4.set('fieldAliases', {'Id': 'Id', });
lyr_Volleybalcourt_5.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Volleybalcourt_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Volleybalcourt_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_UpperFootballpitch_8.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_UpperFootballpitch_9.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_UpperFootballpitch_10.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Trees_11.set('fieldAliases', {'Id': 'Id', });
lyr_Trees_12.set('fieldAliases', {'Id': 'Id', });
lyr_Trees_13.set('fieldAliases', {'Id': 'Id', });
lyr_Toilet_14.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Toilet_15.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Toilet_16.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Tenniscourt_17.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Tenniscourt_18.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Tenniscourt_19.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Tank_20.set('fieldAliases', {'Id': 'Id', });
lyr_Tank_21.set('fieldAliases', {'Id': 'Id', });
lyr_Tank_22.set('fieldAliases', {'Id': 'Id', });
lyr_Swimmingpool_23.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Swimmingpool_24.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Swimmingpool_25.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Swimmingpoolblock_26.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Swimmingpoolblock_27.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Swimmingpoolblock_28.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Sciencecomplex_29.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Sciencecomplex_30.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Sciencecomplex_31.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Road_32.set('fieldAliases', {'Id': 'Id', });
lyr_Road_33.set('fieldAliases', {'Id': 'Id', });
lyr_Road_34.set('fieldAliases', {'Id': 'Id', });
lyr_MainBlockAgriculturecomplex_35.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_MainBlockAgriculturecomplex_36.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_MainBlockAgriculturecomplex_37.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Library_38.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Library_39.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Library_40.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Laboratoryblock_41.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Laboratoryblock_42.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Laboratoryblock_43.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Footballplayground_44.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Footballplayground_45.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Footballplayground_46.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Fence_47.set('fieldAliases', {'Id': 'Id', });
lyr_Fence_48.set('fieldAliases', {'Id': 'Id', });
lyr_Fence_49.set('fieldAliases', {'Id': 'Id', });
lyr_Dininghall_50.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Dininghall_51.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Dininghall_52.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Basketballcourt_53.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Basketballcourt_54.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Basketballcourt_55.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Askariblock_56.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Askariblock_57.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Askariblock_58.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Administrativeblock_59.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Administrativeblock_60.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Administrativeblock_61.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Walkway_2.set('fieldImages', {'Id': '', });
lyr_Walkway_3.set('fieldImages', {'Id': '', });
lyr_Walkway_4.set('fieldImages', {'Id': '', });
lyr_Volleybalcourt_5.set('fieldImages', {'Id': '', 'Name': '', });
lyr_Volleybalcourt_6.set('fieldImages', {'Id': '', 'Name': '', });
lyr_Volleybalcourt_7.set('fieldImages', {'Id': '', 'Name': '', });
lyr_UpperFootballpitch_8.set('fieldImages', {'Id': '', 'name': '', });
lyr_UpperFootballpitch_9.set('fieldImages', {'Id': '', 'name': '', });
lyr_UpperFootballpitch_10.set('fieldImages', {'Id': '', 'name': '', });
lyr_Trees_11.set('fieldImages', {'Id': '', });
lyr_Trees_12.set('fieldImages', {'Id': '', });
lyr_Trees_13.set('fieldImages', {'Id': '', });
lyr_Toilet_14.set('fieldImages', {'Id': '', 'name': '', });
lyr_Toilet_15.set('fieldImages', {'Id': '', 'name': '', });
lyr_Toilet_16.set('fieldImages', {'Id': '', 'name': '', });
lyr_Tenniscourt_17.set('fieldImages', {'Id': '', 'name': '', });
lyr_Tenniscourt_18.set('fieldImages', {'Id': '', 'name': '', });
lyr_Tenniscourt_19.set('fieldImages', {'Id': '', 'name': '', });
lyr_Tank_20.set('fieldImages', {'Id': '', });
lyr_Tank_21.set('fieldImages', {'Id': '', });
lyr_Tank_22.set('fieldImages', {'Id': '', });
lyr_Swimmingpool_23.set('fieldImages', {'Id': '', 'name': '', });
lyr_Swimmingpool_24.set('fieldImages', {'Id': '', 'name': '', });
lyr_Swimmingpool_25.set('fieldImages', {'Id': '', 'name': '', });
lyr_Swimmingpoolblock_26.set('fieldImages', {'Id': '', 'name': '', });
lyr_Swimmingpoolblock_27.set('fieldImages', {'Id': '', 'name': '', });
lyr_Swimmingpoolblock_28.set('fieldImages', {'Id': '', 'name': '', });
lyr_Sciencecomplex_29.set('fieldImages', {'Id': '', 'name': '', });
lyr_Sciencecomplex_30.set('fieldImages', {'Id': '', 'name': '', });
lyr_Sciencecomplex_31.set('fieldImages', {'Id': '', 'name': '', });
lyr_Road_32.set('fieldImages', {'Id': '', });
lyr_Road_33.set('fieldImages', {'Id': '', });
lyr_Road_34.set('fieldImages', {'Id': '', });
lyr_MainBlockAgriculturecomplex_35.set('fieldImages', {'Id': '', 'name': '', });
lyr_MainBlockAgriculturecomplex_36.set('fieldImages', {'Id': '', 'name': '', });
lyr_MainBlockAgriculturecomplex_37.set('fieldImages', {'Id': '', 'name': '', });
lyr_Library_38.set('fieldImages', {'Id': '', 'name': '', });
lyr_Library_39.set('fieldImages', {'Id': '', 'name': '', });
lyr_Library_40.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Laboratoryblock_41.set('fieldImages', {'Id': '', 'name': '', });
lyr_Laboratoryblock_42.set('fieldImages', {'Id': '', 'name': '', });
lyr_Laboratoryblock_43.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Footballplayground_44.set('fieldImages', {'Id': '', 'name': '', });
lyr_Footballplayground_45.set('fieldImages', {'Id': '', 'name': '', });
lyr_Footballplayground_46.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Fence_47.set('fieldImages', {'Id': '', });
lyr_Fence_48.set('fieldImages', {'Id': '', });
lyr_Fence_49.set('fieldImages', {'Id': '', });
lyr_Dininghall_50.set('fieldImages', {'Id': '', 'name': '', });
lyr_Dininghall_51.set('fieldImages', {'Id': '', 'name': '', });
lyr_Dininghall_52.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Basketballcourt_53.set('fieldImages', {'Id': '', 'name': '', });
lyr_Basketballcourt_54.set('fieldImages', {'Id': '', 'name': '', });
lyr_Basketballcourt_55.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Askariblock_56.set('fieldImages', {'Id': '', 'name': '', });
lyr_Askariblock_57.set('fieldImages', {'Id': '', 'name': '', });
lyr_Askariblock_58.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Administrativeblock_59.set('fieldImages', {'Id': '', 'name': '', });
lyr_Administrativeblock_60.set('fieldImages', {'Id': '', 'name': '', });
lyr_Administrativeblock_61.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr_Walkway_2.set('fieldLabels', {'Id': 'inline label', });
lyr_Walkway_3.set('fieldLabels', {'Id': 'inline label', });
lyr_Walkway_4.set('fieldLabels', {'Id': 'inline label', });
lyr_Volleybalcourt_5.set('fieldLabels', {'Id': 'inline label', 'Name': 'inline label', });
lyr_Volleybalcourt_6.set('fieldLabels', {'Id': 'inline label', 'Name': 'inline label', });
lyr_Volleybalcourt_7.set('fieldLabels', {'Id': 'inline label', 'Name': 'inline label', });
lyr_UpperFootballpitch_8.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_UpperFootballpitch_9.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_UpperFootballpitch_10.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Trees_11.set('fieldLabels', {'Id': 'inline label', });
lyr_Trees_12.set('fieldLabels', {'Id': 'inline label', });
lyr_Trees_13.set('fieldLabels', {'Id': 'inline label', });
lyr_Toilet_14.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Toilet_15.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Toilet_16.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Tenniscourt_17.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Tenniscourt_18.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Tenniscourt_19.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Tank_20.set('fieldLabels', {'Id': 'inline label', });
lyr_Tank_21.set('fieldLabels', {'Id': 'inline label', });
lyr_Tank_22.set('fieldLabels', {'Id': 'inline label', });
lyr_Swimmingpool_23.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Swimmingpool_24.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Swimmingpool_25.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Swimmingpoolblock_26.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Swimmingpoolblock_27.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Swimmingpoolblock_28.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Sciencecomplex_29.set('fieldLabels', {'Id': 'no label', 'name': 'no label', });
lyr_Sciencecomplex_30.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Sciencecomplex_31.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Road_32.set('fieldLabels', {'Id': 'inline label', });
lyr_Road_33.set('fieldLabels', {'Id': 'inline label', });
lyr_Road_34.set('fieldLabels', {'Id': 'inline label', });
lyr_MainBlockAgriculturecomplex_35.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_MainBlockAgriculturecomplex_36.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_MainBlockAgriculturecomplex_37.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Library_38.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Library_39.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Library_40.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Laboratoryblock_41.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Laboratoryblock_42.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Laboratoryblock_43.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Footballplayground_44.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Footballplayground_45.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Footballplayground_46.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Fence_47.set('fieldLabels', {'Id': 'inline label', });
lyr_Fence_48.set('fieldLabels', {'Id': 'inline label', });
lyr_Fence_49.set('fieldLabels', {'Id': 'inline label', });
lyr_Dininghall_50.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Dininghall_51.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Dininghall_52.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Basketballcourt_53.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Basketballcourt_54.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Basketballcourt_55.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Askariblock_56.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Askariblock_57.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Askariblock_58.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Administrativeblock_59.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Administrativeblock_60.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Administrativeblock_61.set('fieldLabels', {'Id': 'inline label', 'name': 'inline label', });
lyr_Administrativeblock_61.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});