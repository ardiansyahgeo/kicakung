var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZonaNilaiTanah_2 = new ol.format.GeoJSON();
var features_ZonaNilaiTanah_2 = format_ZonaNilaiTanah_2.readFeatures(json_ZonaNilaiTanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaNilaiTanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaNilaiTanah_2.addFeatures(features_ZonaNilaiTanah_2);
var lyr_ZonaNilaiTanah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaNilaiTanah_2, 
                style: style_ZonaNilaiTanah_2,
                interactive: true,
    title: 'Zona Nilai Tanah<br />\
    <img src="styles/legend/ZonaNilaiTanah_2_0.png" /> <2,5 juta/m2<br />\
    <img src="styles/legend/ZonaNilaiTanah_2_1.png" /> 2,5 - 5 juta/m2<br />\
    <img src="styles/legend/ZonaNilaiTanah_2_2.png" /> 5 - 10 juta/m2<br />\
    <img src="styles/legend/ZonaNilaiTanah_2_3.png" /> 10 - 20 juta/m2<br />\
    <img src="styles/legend/ZonaNilaiTanah_2_4.png" /> 20 - 30 juta/m2<br />'
        });
var format_Hotel_3 = new ol.format.GeoJSON();
var features_Hotel_3 = format_Hotel_3.readFeatures(json_Hotel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_3.addFeatures(features_Hotel_3);
var lyr_Hotel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hotel_3, 
                style: style_Hotel_3,
                interactive: true,
                title: '<img src="styles/legend/Hotel_3.png" /> Hotel'
            });
var format_WaktuTempuhMenujuKawasan_4 = new ol.format.GeoJSON();
var features_WaktuTempuhMenujuKawasan_4 = format_WaktuTempuhMenujuKawasan_4.readFeatures(json_WaktuTempuhMenujuKawasan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaktuTempuhMenujuKawasan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaktuTempuhMenujuKawasan_4.addFeatures(features_WaktuTempuhMenujuKawasan_4);
var lyr_WaktuTempuhMenujuKawasan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaktuTempuhMenujuKawasan_4, 
                style: style_WaktuTempuhMenujuKawasan_4,
                interactive: true,
    title: 'Waktu Tempuh Menuju Kawasan<br />\
    <img src="styles/legend/WaktuTempuhMenujuKawasan_4_0.png" /> 0 - 30 menit<br />\
    <img src="styles/legend/WaktuTempuhMenujuKawasan_4_1.png" /> 30 - 60 menit<br />\
    <img src="styles/legend/WaktuTempuhMenujuKawasan_4_2.png" />  60 - 120 menit<br />\
    <img src="styles/legend/WaktuTempuhMenujuKawasan_4_3.png" /> 120 - 180 menit<br />'
        });
var format_POLARUANGRDTR_5 = new ol.format.GeoJSON();
var features_POLARUANGRDTR_5 = format_POLARUANGRDTR_5.readFeatures(json_POLARUANGRDTR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRDTR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRDTR_5.addFeatures(features_POLARUANGRDTR_5);
var lyr_POLARUANGRDTR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANGRDTR_5, 
                style: style_POLARUANGRDTR_5,
                interactive: true,
    title: 'POLA RUANG RDTR<br />\
    <img src="styles/legend/POLARUANGRDTR_5_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRDTR_5_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_2.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/POLARUANGRDTR_5_3.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR_5_4.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/POLARUANGRDTR_5_5.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/POLARUANGRDTR_5_6.png" /> Perkantoran<br />\
    <img src="styles/legend/POLARUANGRDTR_5_7.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_8.png" /> Perumahan Kepadatan Sangat Tinggi<br />\
    <img src="styles/legend/POLARUANGRDTR_5_9.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR_5_10.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_11.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_12.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/POLARUANGRDTR_5_13.png" /> Rimba Kota<br />\
    <img src="styles/legend/POLARUANGRDTR_5_14.png" /> Taman Kota<br />\
    <img src="styles/legend/POLARUANGRDTR_5_15.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_16.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR_5_17.png" /> Jalur Hijau<br />\
    <img src="styles/legend/POLARUANGRDTR_5_18.png" /> Taman RT<br />\
    <img src="styles/legend/POLARUANGRDTR_5_19.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANGRDTR_5_20.png" /> Taman RW<br />'
        });
var format_PenutupLahan_6 = new ol.format.GeoJSON();
var features_PenutupLahan_6 = format_PenutupLahan_6.readFeatures(json_PenutupLahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenutupLahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenutupLahan_6.addFeatures(features_PenutupLahan_6);
var lyr_PenutupLahan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenutupLahan_6, 
                style: style_PenutupLahan_6,
                interactive: true,
    title: 'Penutup Lahan<br />\
    <img src="styles/legend/PenutupLahan_6_0.png" /> Area Perkerasan<br />\
    <img src="styles/legend/PenutupLahan_6_1.png" /> Badan Air<br />\
    <img src="styles/legend/PenutupLahan_6_2.png" /> Badan Jalan<br />\
    <img src="styles/legend/PenutupLahan_6_3.png" /> Jalur Hijau<br />\
    <img src="styles/legend/PenutupLahan_6_4.png" /> Terminal Kontainer<br />'
        });
var format_Bangunan_7 = new ol.format.GeoJSON();
var features_Bangunan_7 = format_Bangunan_7.readFeatures(json_Bangunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_7.addFeatures(features_Bangunan_7);
var lyr_Bangunan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_7, 
                style: style_Bangunan_7,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_7.png" /> Bangunan'
            });
var format_KawasanIndustriCakung_8 = new ol.format.GeoJSON();
var features_KawasanIndustriCakung_8 = format_KawasanIndustriCakung_8.readFeatures(json_KawasanIndustriCakung_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanIndustriCakung_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanIndustriCakung_8.addFeatures(features_KawasanIndustriCakung_8);
var lyr_KawasanIndustriCakung_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanIndustriCakung_8, 
                style: style_KawasanIndustriCakung_8,
                interactive: true,
                title: '<img src="styles/legend/KawasanIndustriCakung_8.png" /> Kawasan Industri Cakung'
            });
var format_kontur_9 = new ol.format.GeoJSON();
var features_kontur_9 = format_kontur_9.readFeatures(json_kontur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kontur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kontur_9.addFeatures(features_kontur_9);
var lyr_kontur_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kontur_9,
maxResolution:0.7001116538065492,
 
                style: style_kontur_9,
                interactive: true,
                title: '<img src="styles/legend/kontur_9.png" /> kontur'
            });
var format_jaringan_drainase_RDTR_10 = new ol.format.GeoJSON();
var features_jaringan_drainase_RDTR_10 = format_jaringan_drainase_RDTR_10.readFeatures(json_jaringan_drainase_RDTR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringan_drainase_RDTR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringan_drainase_RDTR_10.addFeatures(features_jaringan_drainase_RDTR_10);
var lyr_jaringan_drainase_RDTR_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jaringan_drainase_RDTR_10, 
                style: style_jaringan_drainase_RDTR_10,
                interactive: true,
    title: 'jaringan_drainase_RDTR<br />\
    <img src="styles/legend/jaringan_drainase_RDTR_10_0.png" /> Jaringan Drainase Lokal<br />\
    <img src="styles/legend/jaringan_drainase_RDTR_10_1.png" /> Jaringan Drainase Primer<br />\
    <img src="styles/legend/jaringan_drainase_RDTR_10_2.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/jaringan_drainase_RDTR_10_3.png" /> Jaringan Drainase Tersier<br />'
        });
var format_drainase_RDTR_11 = new ol.format.GeoJSON();
var features_drainase_RDTR_11 = format_drainase_RDTR_11.readFeatures(json_drainase_RDTR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainase_RDTR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainase_RDTR_11.addFeatures(features_drainase_RDTR_11);
var lyr_drainase_RDTR_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drainase_RDTR_11, 
                style: style_drainase_RDTR_11,
                interactive: true,
    title: 'drainase_RDTR<br />\
    <img src="styles/legend/drainase_RDTR_11_0.png" /> Bangunan Tampungan (Polder)<br />'
        });
var format_JaringanJalan_12 = new ol.format.GeoJSON();
var features_JaringanJalan_12 = format_JaringanJalan_12.readFeatures(json_JaringanJalan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_12.addFeatures(features_JaringanJalan_12);
var lyr_JaringanJalan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_12, 
                style: style_JaringanJalan_12,
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_12_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JaringanJalan_12_1.png" /> Jalan Arteri Sekunder<br />\
    <img src="styles/legend/JaringanJalan_12_2.png" /> Jalan Khusus<br />\
    <img src="styles/legend/JaringanJalan_12_3.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JaringanJalan_12_4.png" /> Jalan Lingkungan Sekunder<br />\
    <img src="styles/legend/JaringanJalan_12_5.png" /> Jalan Lokal Sekunder<br />\
    <img src="styles/legend/JaringanJalan_12_6.png" /> Jalan Tol<br />\
    <img src="styles/legend/JaringanJalan_12_7.png" /> Jalur LRT<br />'
        });
var lyr_wilayah_ketinggian_RGB_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "wilayah_ketinggian_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/wilayah_ketinggian_RGB_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11902481.853505, -686068.601993, 11904883.002800, -684206.526760]
                            })
                        });
var format_RencanaJaringanJalan_14 = new ol.format.GeoJSON();
var features_RencanaJaringanJalan_14 = format_RencanaJaringanJalan_14.readFeatures(json_RencanaJaringanJalan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RencanaJaringanJalan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencanaJaringanJalan_14.addFeatures(features_RencanaJaringanJalan_14);
var lyr_RencanaJaringanJalan_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RencanaJaringanJalan_14, 
                style: style_RencanaJaringanJalan_14,
                interactive: true,
                title: '<img src="styles/legend/RencanaJaringanJalan_14.png" /> Rencana Jaringan Jalan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ZonaNilaiTanah_2.setVisible(false);lyr_Hotel_3.setVisible(false);lyr_WaktuTempuhMenujuKawasan_4.setVisible(false);lyr_POLARUANGRDTR_5.setVisible(false);lyr_PenutupLahan_6.setVisible(false);lyr_Bangunan_7.setVisible(true);lyr_KawasanIndustriCakung_8.setVisible(true);lyr_kontur_9.setVisible(true);lyr_jaringan_drainase_RDTR_10.setVisible(false);lyr_drainase_RDTR_11.setVisible(false);lyr_JaringanJalan_12.setVisible(false);lyr_wilayah_ketinggian_RGB_13.setVisible(false);lyr_RencanaJaringanJalan_14.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_ZonaNilaiTanah_2,lyr_Hotel_3,lyr_WaktuTempuhMenujuKawasan_4,lyr_POLARUANGRDTR_5,lyr_PenutupLahan_6,lyr_Bangunan_7,lyr_KawasanIndustriCakung_8,lyr_kontur_9,lyr_jaringan_drainase_RDTR_10,lyr_drainase_RDTR_11,lyr_JaringanJalan_12,lyr_wilayah_ketinggian_RGB_13,lyr_RencanaJaringanJalan_14];
lyr_ZonaNilaiTanah_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOZONE': 'NOZONE', 'RPBULAT': 'RPBULAT', 'WILAYAH': 'WILAYAH', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'MEAN': 'MEAN', });
lyr_Hotel_3.set('fieldAliases', {'Name': 'Name', });
lyr_WaktuTempuhMenujuKawasan_4.set('fieldAliases', {'FacilityID': 'FacilityID', 'Name': 'Name', });
lyr_POLARUANGRDTR_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'KKOP_1': 'KKOP_1', 'LP2B_2': 'LP2B_2', 'KRB_03': 'KRB_03', 'TOD_04': 'TOD_04', 'TEB_05': 'TEB_05', 'PUSLIT': 'PUSLIT', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'TPZ_00': 'TPZ_00', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'KODUNK': 'KODUNK', 'KDB': 'KDB', 'KLB': 'KLB', 'KTB': 'KTB', 'KDH': 'KDH', 'KODSZNTEXT': 'KODSZNTEXT', 'BST': 'BST', 'IZN': 'IZN', 'TBS': 'TBS', 'TBT': 'TBT', 'KODZON_1': 'KODZON_1', 'NAMZON_1': 'NAMZON_1', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'TBT_1': 'TBT_1', 'IZN_1': 'IZN_1', 'BST_1': 'BST_1', });
lyr_PenutupLahan_6.set('fieldAliases', {'NAME': 'NAME', 'tessellate': 'tessellate', 'keterangan': 'keterangan', 'z': 'z', });
lyr_Bangunan_7.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'tingg_m': 'tingg_m', 'jml_lantai': 'jml_lantai', });
lyr_KawasanIndustriCakung_8.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', });
lyr_kontur_9.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_jaringan_drainase_RDTR_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'Shape__Len': 'Shape__Len', });
lyr_drainase_RDTR_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', });
lyr_JaringanJalan_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'KET': 'KET', 'Shape__Len': 'Shape__Len', });
lyr_RencanaJaringanJalan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'KET': 'KET', 'Shape__Len': 'Shape__Len', });
lyr_ZonaNilaiTanah_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOZONE': 'TextEdit', 'RPBULAT': 'TextEdit', 'WILAYAH': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'MEAN': 'TextEdit', });
lyr_Hotel_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_WaktuTempuhMenujuKawasan_4.set('fieldImages', {'FacilityID': 'TextEdit', 'Name': 'TextEdit', });
lyr_POLARUANGRDTR_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'TextEdit', 'LP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'TOD_04': 'TextEdit', 'TEB_05': 'TextEdit', 'PUSLIT': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'KODUNK': 'TextEdit', 'KDB': 'TextEdit', 'KLB': 'TextEdit', 'KTB': 'TextEdit', 'KDH': 'TextEdit', 'KODSZNTEXT': 'TextEdit', 'BST': 'TextEdit', 'IZN': 'TextEdit', 'TBS': 'TextEdit', 'TBT': 'TextEdit', 'KODZON_1': 'TextEdit', 'NAMZON_1': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'TBT_1': 'TextEdit', 'IZN_1': 'TextEdit', 'BST_1': 'TextEdit', });
lyr_PenutupLahan_6.set('fieldImages', {'NAME': 'TextEdit', 'tessellate': 'TextEdit', 'keterangan': 'TextEdit', 'z': 'TextEdit', });
lyr_Bangunan_7.set('fieldImages', {'Id': 'TextEdit', 'Keterangan': 'TextEdit', 'tingg_m': 'TextEdit', 'jml_lantai': 'TextEdit', });
lyr_KawasanIndustriCakung_8.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'tessellate': 'Range', });
lyr_kontur_9.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_jaringan_drainase_RDTR_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_drainase_RDTR_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanJalan_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'KET': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_RencanaJaringanJalan_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'KET': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ZonaNilaiTanah_2.set('fieldLabels', {'OBJECTID': 'inline label', 'NOZONE': 'inline label', 'RPBULAT': 'inline label', 'WILAYAH': 'inline label', 'Shape__Are': 'inline label', 'Shape__Len': 'inline label', 'MEAN': 'inline label', });
lyr_Hotel_3.set('fieldLabels', {'Name': 'inline label', });
lyr_WaktuTempuhMenujuKawasan_4.set('fieldLabels', {'FacilityID': 'inline label', 'Name': 'inline label', });
lyr_POLARUANGRDTR_5.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'KODUNK': 'inline label', 'KDB': 'inline label', 'KLB': 'inline label', 'KTB': 'inline label', 'KDH': 'inline label', 'KODSZNTEXT': 'inline label', 'BST': 'inline label', 'IZN': 'inline label', 'TBS': 'inline label', 'TBT': 'inline label', 'KODZON_1': 'inline label', 'NAMZON_1': 'inline label', 'Shape__Are': 'inline label', 'Shape__Len': 'inline label', 'TBT_1': 'inline label', 'IZN_1': 'inline label', 'BST_1': 'inline label', });
lyr_PenutupLahan_6.set('fieldLabels', {'NAME': 'inline label', 'tessellate': 'inline label', 'keterangan': 'inline label', 'z': 'inline label', });
lyr_Bangunan_7.set('fieldLabels', {'Id': 'inline label', 'Keterangan': 'inline label', 'tingg_m': 'inline label', 'jml_lantai': 'inline label', });
lyr_KawasanIndustriCakung_8.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'KML_STYLE': 'inline label', 'tessellate': 'inline label', });
lyr_kontur_9.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'ELEVATION': 'inline label', 'CLOSED_CON': 'inline label', });
lyr_jaringan_drainase_RDTR_10.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape__Len': 'inline label', });
lyr_drainase_RDTR_11.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'no label', });
lyr_JaringanJalan_12.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'KET': 'inline label', 'Shape__Len': 'inline label', });
lyr_RencanaJaringanJalan_14.set('fieldLabels', {'OBJECTID': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'KET': 'inline label', 'Shape__Len': 'inline label', });
lyr_RencanaJaringanJalan_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var layersList = [
new ol.layer.Group({
            title: 'Basemap',
            layers: [
lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,
]}),
 
new ol.layer.Group({
            title: 'KAWASAN INDUSTRI CAKUNG',
            fold: 'close',
            layers: [
lyr_wilayah_ketinggian_RGB_13,lyr_PenutupLahan_6,lyr_Bangunan_7,lyr_KawasanIndustriCakung_8,lyr_kontur_9,
]}),

new ol.layer.Group({
            title: 'DATA RDTR',
            fold: 'close',
            layers: [
lyr_POLARUANGRDTR_5,lyr_jaringan_drainase_RDTR_10,lyr_drainase_RDTR_11,lyr_JaringanJalan_12,lyr_RencanaJaringanJalan_14,
]}),
];
