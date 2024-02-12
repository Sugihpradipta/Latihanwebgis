var wms_layers = [];

var lyr_PADANGBINDU_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "PADANG BINDU",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PADANGBINDU_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11552712.460025, -387031.655720, 11562162.584811, -380782.373960]
                            })
                        });
var format_BATAS_AKUISISI_1 = new ol.format.GeoJSON();
var features_BATAS_AKUISISI_1 = format_BATAS_AKUISISI_1.readFeatures(json_BATAS_AKUISISI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_AKUISISI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_AKUISISI_1.addFeatures(features_BATAS_AKUISISI_1);
var lyr_BATAS_AKUISISI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_AKUISISI_1, 
                style: style_BATAS_AKUISISI_1,
                interactive: true,
                title: '<img src="styles/legend/BATAS_AKUISISI_1.png" /> BATAS_AKUISISI'
            });

lyr_PADANGBINDU_0.setVisible(true);lyr_BATAS_AKUISISI_1.setVisible(true);
var layersList = [lyr_PADANGBINDU_0,lyr_BATAS_AKUISISI_1];
lyr_BATAS_AKUISISI_1.set('fieldAliases', {'NAMA': 'NAMA', 'NO PERSIL': 'NO PERSIL', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'NO SPPH': 'NO SPPH', 'AKTE NOTAR': 'AKTE NOTAR', 'NO SHM': 'NO SHM', 'KILOMETER': 'KILOMETER', 'NO PEMECAH': 'NO PEMECAH', 'KETERANGAN': 'KETERANGAN', 'LAHAN BEBA': 'LAHAN BEBA', 'JENIS LAHA': 'JENIS LAHA', 'TERAKUISIS': 'TERAKUISIS', 'KESELURUHA': 'KESELURUHA', 'SISA LAHAN': 'SISA LAHAN', });
lyr_BATAS_AKUISISI_1.set('fieldImages', {'NAMA': 'TextEdit', 'NO PERSIL': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'NO SPPH': 'TextEdit', 'AKTE NOTAR': 'TextEdit', 'NO SHM': 'Range', 'KILOMETER': 'TextEdit', 'NO PEMECAH': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LAHAN BEBA': 'TextEdit', 'JENIS LAHA': 'TextEdit', 'TERAKUISIS': 'TextEdit', 'KESELURUHA': 'TextEdit', 'SISA LAHAN': 'TextEdit', });
lyr_BATAS_AKUISISI_1.set('fieldLabels', {'NAMA': 'inline label - visible with data', 'NO PERSIL': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'NO SPPH': 'inline label - visible with data', 'AKTE NOTAR': 'inline label - visible with data', 'NO SHM': 'inline label - visible with data', 'KILOMETER': 'inline label - visible with data', 'NO PEMECAH': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'LAHAN BEBA': 'inline label - visible with data', 'JENIS LAHA': 'inline label - visible with data', 'TERAKUISIS': 'inline label - visible with data', 'KESELURUHA': 'inline label - visible with data', 'SISA LAHAN': 'inline label - visible with data', });
lyr_BATAS_AKUISISI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});