var size = 0;
var placement = 'point';
function categories_POLARUANGRDTR_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Badan Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Peruntukan Industri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,0,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,100,100,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala WP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,130,130,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala SWP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,165,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perkantoran':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,155,155,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertahanan dan Keamanan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Sangat Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,190,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,25,125,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,50,155,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perlindungan Setempat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,215,215,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rimba Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(55,85,10,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,105,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,135,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,165,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalur Hijau':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,245,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman RT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,225,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pemakaman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(90,255,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(80,195,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_POLARUANGRDTR_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("KODSZNTEXT") !== null) {
        labelText = String(feature.get("KODSZNTEXT"));
    }
    
var style = categories_POLARUANGRDTR_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
