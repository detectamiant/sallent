var wms_layers = [];

var lyr_STOrtofotocolor2022_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2022]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2022_0, 0]);
var format_POSITIUSSALLENTpositius_sallent_1 = new ol.format.GeoJSON();
var features_POSITIUSSALLENTpositius_sallent_1 = format_POSITIUSSALLENTpositius_sallent_1.readFeatures(json_POSITIUSSALLENTpositius_sallent_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSITIUSSALLENTpositius_sallent_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSITIUSSALLENTpositius_sallent_1.addFeatures(features_POSITIUSSALLENTpositius_sallent_1);
var lyr_POSITIUSSALLENTpositius_sallent_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POSITIUSSALLENTpositius_sallent_1, 
                style: style_POSITIUSSALLENTpositius_sallent_1,
                popuplayertitle: "POSITIUS SALLENT — positius_sallent",
                interactive: true,
                title: '<img src="styles/legend/POSITIUSSALLENTpositius_sallent_1.png" /> POSITIUS SALLENT — positius_sallent'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2022_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2022_0.setVisible(true);lyr_POSITIUSSALLENTpositius_sallent_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_POSITIUSSALLENTpositius_sallent_1];
lyr_POSITIUSSALLENTpositius_sallent_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'àrea': 'àrea', });
lyr_POSITIUSSALLENTpositius_sallent_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'àrea': 'Range', });
lyr_POSITIUSSALLENTpositius_sallent_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'àrea': 'no label', });
lyr_POSITIUSSALLENTpositius_sallent_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});