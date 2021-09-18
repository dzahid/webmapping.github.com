var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Comunas_0 = new ol.format.GeoJSON();
var features_Comunas_0 = format_Comunas_0.readFeatures(json_Comunas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Comunas_0.addFeatures(features_Comunas_0);var lyr_Comunas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunas_0, 
                style: style_Comunas_0,
    title: 'Comunas<br />\
    <img src="styles/legend/Comunas_0_0.png" /> Comuna I<br />\
    <img src="styles/legend/Comunas_0_1.png" /> Comuna II<br />\
    <img src="styles/legend/Comunas_0_2.png" /> Comuna III<br />\
    <img src="styles/legend/Comunas_0_3.png" /> Comuna IV<br />\
    <img src="styles/legend/Comunas_0_4.png" /> Comuna V<br />\
    <img src="styles/legend/Comunas_0_5.png" /> Comuna VI<br />\
    <img src="styles/legend/Comunas_0_6.png" /> Comuna VII<br />\
    <img src="styles/legend/Comunas_0_7.png" /> <br />'
        });

lyr_Comunas_0.setVisible(true);
var layersList = [baseLayer,lyr_Comunas_0];
lyr_Comunas_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Area': 'Area', 'Descripcio': 'Descripcio', 'Area_Ha': 'Area_Ha', 'Comuna': 'Comuna', 'ARE': 'ARE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Comunas_0.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'TextEdit', 'Area': 'WebView', 'Descripcio': 'TextEdit', 'Area_Ha': 'TextEdit', 'Comuna': 'WebView', 'ARE': 'WebView', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Comunas_0.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', 'Descripcio': 'no label', 'Area_Ha': 'no label', 'Comuna': 'no label', 'ARE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Comunas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});