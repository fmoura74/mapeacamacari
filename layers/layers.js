var wms_layers = [];

var lyr_RMS_1998ConderBa_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1998/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RMS_1998 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RMS_1998ConderBa_0, 1]);
var lyr_SalvadorCamaari_1992ConderBa_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1992/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Salvador/Camaçari_1992 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SalvadorCamaari_1992ConderBa_1, 1]);
var lyr_Ortofoto2017PMC_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2017 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2017PMC_2, 1]);
var lyr_Ortofoto2022PMC_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2022 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2022PMC_3, 1]);

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITOPO_5 = new ol.layer.Tile({
            'title': 'ESRI TOPO',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WazeWorld_6 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_7 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BDGExSEIBa25k_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bdgex.eb.mil.br/mapcache",
    attributions: ' ',
                              params: {
                                "LAYERS": "ctm25",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "BDGEx / SEI-Ba 25k",
                            opacity: 0.700000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.5600893230452393,

                          });
              wms_layers.push([lyr_BDGExSEIBa25k_8, 1]);
var lyr_MalhadeLotesGeomais_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "lote_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Malha de Lotes (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_MalhadeLotesGeomais_9, 1]);
var lyr_UnidadesImobiliriasGeomais_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "unidade_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Unidades Imobiliárias (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_UnidadesImobiliriasGeomais_10, 1]);
var lyr_Curvas_de_nivel_intermediariaGeomais_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_intermediaria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_intermediaria (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_intermediariaGeomais_11, 1]);
var lyr_Curvas_de_nivel_mestraGeomais_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_mestra",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_mestra (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_mestraGeomais_12, 1]);

        var lyr_GoogleTraffic_13 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_14 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_15 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_reasdeQuilombolasInemaINCRA_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/Vetor_Recursos_Ambientais/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "quilomb_incra_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Áreas de Quilombolas (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reasdeQuilombolasInemaINCRA_16, 1]);
var lyr_ImvelRuralLimitesInemaINCRA_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_imovel_rural_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Imóvel Rural - Limites (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ImvelRuralLimitesInemaINCRA_17, 1]);
var lyr_LimitesdeAssentamentosInemaINCRA_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_assentamento_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Limites de Assentamentos (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LimitesdeAssentamentosInemaINCRA_18, 1]);
var lyr_ProcessosminerriosativosANM_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Processos minerários ativos (ANM)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProcessosminerriosativosANM_19, 1]);
var format_reasmidasVeredasPMSBCamaari_20 = new ol.format.GeoJSON();
var features_reasmidasVeredasPMSBCamaari_20 = format_reasmidasVeredasPMSBCamaari_20.readFeatures(json_reasmidasVeredasPMSBCamaari_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasVeredasPMSBCamaari_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasVeredasPMSBCamaari_20.addFeatures(features_reasmidasVeredasPMSBCamaari_20);
var lyr_reasmidasVeredasPMSBCamaari_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasmidasVeredasPMSBCamaari_20,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_reasmidasVeredasPMSBCamaari_20,
                popuplayertitle: "Áreas Úmidas/Veredas (PMSB - Camaçari)",
                interactive: true,
                title: '<img src="styles/legend/reasmidasVeredasPMSBCamaari_20.png" /> Áreas Úmidas/Veredas (PMSB - Camaçari)'
            });
var format_Trecho_Massa_DaguaConder2010_21 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_21 = format_Trecho_Massa_DaguaConder2010_21.readFeatures(json_Trecho_Massa_DaguaConder2010_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_21.addFeatures(features_Trecho_Massa_DaguaConder2010_21);
var lyr_Trecho_Massa_DaguaConder2010_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_21,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Trecho_Massa_DaguaConder2010_21,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_21.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_22 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_22 = format_Massa_DaguaConder2010_22.readFeatures(json_Massa_DaguaConder2010_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_22.addFeatures(features_Massa_DaguaConder2010_22);
var lyr_Massa_DaguaConder2010_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_22,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Massa_DaguaConder2010_22,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_22.png" /> Massa_Dagua (Conder 2010)'
            });
var format_LogradourosOficializadoseouCepeados_23 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_23 = format_LogradourosOficializadoseouCepeados_23.readFeatures(json_LogradourosOficializadoseouCepeados_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_23.addFeatures(features_LogradourosOficializadoseouCepeados_23);
var lyr_LogradourosOficializadoseouCepeados_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_23,
maxResolution:56.00893230452392,
 minResolution:0.42006699228392946,

                style: style_LogradourosOficializadoseouCepeados_23,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_23.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_24 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_24 = format_LinhaFrreaFCA_24.readFeatures(json_LinhaFrreaFCA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_24.addFeatures(features_LinhaFrreaFCA_24);
var lyr_LinhaFrreaFCA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_24, 
                style: style_LinhaFrreaFCA_24,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_24.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_25 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_25 = format_EixosRodEstSEINFRABa2021_25.readFeatures(json_EixosRodEstSEINFRABa2021_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_25.addFeatures(features_EixosRodEstSEINFRABa2021_25);
var lyr_EixosRodEstSEINFRABa2021_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_25, 
                style: style_EixosRodEstSEINFRABa2021_25,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_25.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PontosdeRefernciadiversos2023_26 = new ol.format.GeoJSON();
var features_PontosdeRefernciadiversos2023_26 = format_PontosdeRefernciadiversos2023_26.readFeatures(json_PontosdeRefernciadiversos2023_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeRefernciadiversos2023_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeRefernciadiversos2023_26.addFeatures(features_PontosdeRefernciadiversos2023_26);cluster_PontosdeRefernciadiversos2023_26 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PontosdeRefernciadiversos2023_26
});
var lyr_PontosdeRefernciadiversos2023_26 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PontosdeRefernciadiversos2023_26,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_PontosdeRefernciadiversos2023_26,
                popuplayertitle: "Pontos de Referência diversos (2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeRefernciadiversos2023_26.png" /> Pontos de Referência diversos (2023)'
            });
var format_Localidadesdiversas2023_27 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_27 = format_Localidadesdiversas2023_27.readFeatures(json_Localidadesdiversas2023_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_27.addFeatures(features_Localidadesdiversas2023_27);
var lyr_Localidadesdiversas2023_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdiversas2023_27,
maxResolution:28.00446615226196,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_27,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_27.png" /> Localidades diversas (2023)'
            });
var format_DistritosMunicipais2020_28 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_28 = format_DistritosMunicipais2020_28.readFeatures(json_DistritosMunicipais2020_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_28.addFeatures(features_DistritosMunicipais2020_28);
var lyr_DistritosMunicipais2020_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_28,
maxResolution:84.0133984567859,
 minResolution:14.00223307613098,

                style: style_DistritosMunicipais2020_28,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_28.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicipais2020_29 = new ol.format.GeoJSON();
var features_LimitesMunicipais2020_29 = format_LimitesMunicipais2020_29.readFeatures(json_LimitesMunicipais2020_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais2020_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais2020_29.addFeatures(features_LimitesMunicipais2020_29);
var lyr_LimitesMunicipais2020_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais2020_29, 
                style: style_LimitesMunicipais2020_29,
                popuplayertitle: "Limites Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais2020_29.png" /> Limites Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_30 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_30 = format_LimitesMunicpiosRMS2020_30.readFeatures(json_LimitesMunicpiosRMS2020_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_30.addFeatures(features_LimitesMunicpiosRMS2020_30);
var lyr_LimitesMunicpiosRMS2020_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_30, 
                style: style_LimitesMunicpiosRMS2020_30,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_30.png" /> Limites Municípios/RMS (2020)'
            });

lyr_RMS_1998ConderBa_0.setVisible(false);lyr_SalvadorCamaari_1992ConderBa_1.setVisible(false);lyr_Ortofoto2017PMC_2.setVisible(false);lyr_Ortofoto2022PMC_3.setVisible(false);lyr_GoogleSatellite_4.setVisible(true);lyr_ESRITOPO_5.setVisible(false);lyr_WazeWorld_6.setVisible(false);lyr_OSMStandard_7.setVisible(false);lyr_BDGExSEIBa25k_8.setVisible(false);lyr_MalhadeLotesGeomais_9.setVisible(false);lyr_UnidadesImobiliriasGeomais_10.setVisible(false);lyr_Curvas_de_nivel_intermediariaGeomais_11.setVisible(false);lyr_Curvas_de_nivel_mestraGeomais_12.setVisible(false);lyr_GoogleTraffic_13.setVisible(false);lyr_GoogleLabels_14.setVisible(false);lyr_EsriBoundariesandPlaces_15.setVisible(false);lyr_reasdeQuilombolasInemaINCRA_16.setVisible(false);lyr_ImvelRuralLimitesInemaINCRA_17.setVisible(false);lyr_LimitesdeAssentamentosInemaINCRA_18.setVisible(false);lyr_ProcessosminerriosativosANM_19.setVisible(false);lyr_reasmidasVeredasPMSBCamaari_20.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_21.setVisible(true);lyr_Massa_DaguaConder2010_22.setVisible(true);lyr_LogradourosOficializadoseouCepeados_23.setVisible(false);lyr_LinhaFrreaFCA_24.setVisible(true);lyr_EixosRodEstSEINFRABa2021_25.setVisible(true);lyr_PontosdeRefernciadiversos2023_26.setVisible(false);lyr_Localidadesdiversas2023_27.setVisible(true);lyr_DistritosMunicipais2020_28.setVisible(false);lyr_LimitesMunicipais2020_29.setVisible(false);lyr_LimitesMunicpiosRMS2020_30.setVisible(true);
var layersList = [lyr_RMS_1998ConderBa_0,lyr_SalvadorCamaari_1992ConderBa_1,lyr_Ortofoto2017PMC_2,lyr_Ortofoto2022PMC_3,lyr_GoogleSatellite_4,lyr_ESRITOPO_5,lyr_WazeWorld_6,lyr_OSMStandard_7,lyr_BDGExSEIBa25k_8,lyr_MalhadeLotesGeomais_9,lyr_UnidadesImobiliriasGeomais_10,lyr_Curvas_de_nivel_intermediariaGeomais_11,lyr_Curvas_de_nivel_mestraGeomais_12,lyr_GoogleTraffic_13,lyr_GoogleLabels_14,lyr_EsriBoundariesandPlaces_15,lyr_reasdeQuilombolasInemaINCRA_16,lyr_ImvelRuralLimitesInemaINCRA_17,lyr_LimitesdeAssentamentosInemaINCRA_18,lyr_ProcessosminerriosativosANM_19,lyr_reasmidasVeredasPMSBCamaari_20,lyr_Trecho_Massa_DaguaConder2010_21,lyr_Massa_DaguaConder2010_22,lyr_LogradourosOficializadoseouCepeados_23,lyr_LinhaFrreaFCA_24,lyr_EixosRodEstSEINFRABa2021_25,lyr_PontosdeRefernciadiversos2023_26,lyr_Localidadesdiversas2023_27,lyr_DistritosMunicipais2020_28,lyr_LimitesMunicipais2020_29,lyr_LimitesMunicpiosRMS2020_30];
lyr_reasmidasVeredasPMSBCamaari_20.set('fieldAliases', {'Id': 'Id', 'Descricao': 'Descricao', 'Coef__Defl': 'Coef__Defl', 'Categorias': 'Categorias', 'AREA': 'AREA', });
lyr_Trecho_Massa_DaguaConder2010_21.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_22.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'compriment': 'compriment', });
lyr_LinhaFrreaFCA_24.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PontosdeRefernciadiversos2023_26.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Localidadesdiversas2023_27.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_DistritosMunicipais2020_28.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicipais2020_29.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Est_P_2021': 'Est_P_2021', 'Dens_2021': 'Dens_2021', 'Pop_2010': 'Pop_2010', 'Dom_2010': 'Dom_2010', 'Dens_2010': 'Dens_2010', 'IDH-m_2010': 'IDH-m_2010', 'cg_majorit': 'cg_majorit', 'cg_major_1': 'cg_major_1', 'cg_major_2': 'cg_major_2', 'cg_major_3': 'cg_major_3', 'cb_heigh': 'cb_heigh', 'cg_major_4': 'cg_major_4', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_reasmidasVeredasPMSBCamaari_20.set('fieldImages', {'Id': 'Range', 'Descricao': 'TextEdit', 'Coef__Defl': 'TextEdit', 'Categorias': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_21.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_22.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', });
lyr_LinhaFrreaFCA_24.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PontosdeRefernciadiversos2023_26.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Localidadesdiversas2023_27.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_DistritosMunicipais2020_28.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicipais2020_29.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', 'Est_P_2021': '', 'Dens_2021': '', 'Pop_2010': '', 'Dom_2010': '', 'Dens_2010': '', 'IDH-m_2010': '', 'cg_majorit': '', 'cg_major_1': '', 'cg_major_2': '', 'cg_major_3': '', 'cb_heigh': '', 'cg_major_4': '', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_reasmidasVeredasPMSBCamaari_20.set('fieldLabels', {'Id': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Coef__Defl': 'inline label - visible with data', 'Categorias': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_Trecho_Massa_DaguaConder2010_21.set('fieldLabels', {'FID_HID_Tr': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'ID_Trecho_': 'inline label - visible with data', 'tipoTrecho': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'SHAPE_Le_2': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Massa_DaguaConder2010_22.set('fieldLabels', {'FID_HID_Ma': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'tipoMassaD': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'Shape_Le_2': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_LogradourosOficializadoseouCepeados_23.set('fieldLabels', {'id': 'inline label - visible with data', 'codlog_': 'inline label - visible with data', 'logradour_': 'inline label - visible with data', 'parcelame_': 'inline label - visible with data', 'bairro_': 'inline label - visible with data', 'distrito_': 'inline label - visible with data', 'cep_': 'inline label - visible with data', 'obs_1': 'inline label - visible with data', 'obs_2': 'inline label - visible with data', 'webmap': 'inline label - visible with data', 'compriment': 'inline label - visible with data', });
lyr_LinhaFrreaFCA_24.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'nomeabrev': 'inline label - visible with data', 'geometriaa': 'inline label - visible with data', 'codtrechof': 'inline label - visible with data', 'posicaorel': 'inline label - visible with data', 'tipotrecho': 'inline label - visible with data', 'bitola': 'inline label - visible with data', 'eletrifica': 'inline label - visible with data', 'nrlinhas': 'inline label - visible with data', 'emarruamen': 'inline label - visible with data', 'jurisdicao': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'concession': 'inline label - visible with data', 'operaciona': 'inline label - visible with data', 'situacaofi': 'inline label - visible with data', 'cargasupor': 'inline label - visible with data', });
lyr_EixosRodEstSEINFRABa2021_25.set('fieldLabels', {'Name': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'Codigo SRE': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Local Iní': 'inline label - visible with data', 'Km Inicial': 'inline label - visible with data', 'Km Final': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'Situação': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'Tipo de Re': 'inline label - visible with data', 'Descriç_1': 'inline label - visible with data', 'Coincide_3': 'inline label - visible with data', 'Identifica': 'inline label - visible with data', 'Extensã_1': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_PontosdeRefernciadiversos2023_26.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_Localidadesdiversas2023_27.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_DistritosMunicipais2020_28.set('fieldLabels', {'id': 'inline label - visible with data', 'cd_mun': 'inline label - visible with data', 'cd_dist': 'inline label - visible with data', 'nm_dist': 'inline label - visible with data', 'Perímetro': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'percentual': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', });
lyr_LimitesMunicipais2020_29.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'Est_P_2021': 'inline label - visible with data', 'Dens_2021': 'inline label - visible with data', 'Pop_2010': 'inline label - visible with data', 'Dom_2010': 'inline label - visible with data', 'Dens_2010': 'inline label - visible with data', 'IDH-m_2010': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cg_major_1': 'inline label - visible with data', 'cg_major_2': 'inline label - visible with data', 'cg_major_3': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', 'cg_major_4': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});