(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-529d3970"],{"182a":function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("Layout",{attrs:{seccion:!0}},[a.cargaTerminada?s("div",{staticClass:"row votosPorCandidaturaMovil"},[s("div",{staticClass:"col-12 col-md-10 mx-auto"},[s("div",{staticClass:"grilla-selects"},[s("div",{staticClass:"secciones"},[s("select",{directives:[{name:"model",rawName:"v-model",value:a.seccion,expression:"seccion"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.seccion=t.target.multiple?s:s[0]},a.cambiarSeccion]}},a._l(a.listaSecciones,(function(t,i){return s("option",{key:i,domProps:{value:t.seccion_id}},[a._v(" Sección "+a._s(t.seccion_id)+" ")])})),0)]),s("div",{staticClass:"casillas"},[s("select",{directives:[{name:"model",rawName:"v-model",value:a.casilla,expression:"casilla"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.casilla=t.target.multiple?s:s[0]},a.irADetalleDeCasilla]}},a._l(a.listaCasillas.datos_casillas,(function(t,i){return s("option",{key:i,domProps:{value:t.tipo_casilla}},[a._v(a._s(t.tipo_casilla))])})),0)])]),s("h4",[a._v(" "+a._s(a.tituloEleccion)+" - "),s("b",{staticClass:"primario"},[a._v("Sección Casilla ")])]),s("p",[s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+a.eleccion+"/ENT/VPC"}},[a._v(" Baja California Sur ")]),a._v(" / "),s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+a.eleccion+"/DET/VPC/"+a.distrito}},["Ayuntamiento"!==a.tituloEleccion?s("span",[a._v(" Distrito "+a._s(a.distrito)+". "+a._s(a.distritoNombre)+" ")]):s("span",[a._v(" Municipio "+a._s(a.distrito)+". "+a._s(a.ayuntamiento.municipio_descripcion)+" ")])]),a._v(" / "),s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+a.eleccion+"/Secciones/"+a.distrito+"/"+a.seccion}},[a._v(" Sección "+a._s(a.seccion)+" ")]),a._v(" / "),s("b",[a._v(a._s(a.casilla))])],1),s("p",[a._v(" Cantidad de votos en cada una de las casillas de esta Sección, conforme a la información de las Actas de Escrutinio y Cómputo. ")]),s("div",{staticClass:"votosEnActasContabilizadas "},[s("p",{staticClass:"titulo"},[a._v(" Votos en Actas Contabilizadas ")]),s("p",{staticClass:"mb-2"},[a._v(" Ver Acta Digitalizada en: ")]),s("div",{staticClass:"ml-5 mt-4 boton d-flex mb-4"},[s("a",{attrs:{href:a.calcularUrlActaDigitalizada(a.votosXCasilla.datos_votos[1]),target:"_blank",rel:"noopener noreferrer"}},[0!==a.votosXCasilla.datos_votos[1].candidatura_logo?s("button",{staticClass:"recarga btn-ver"},[s("div",{staticClass:"texto"},[s("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","file"]}}),s("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:"print"}}),0!==a.votosXCasilla.datos_votos[1].candidatura_logo?s("span",[a._v(" Ver ")]):a._e()],1)]):s("button",{staticClass:"recarga2 "},[s("div",{staticClass:"texto"},[s("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","file"]}}),s("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:"print"}}),s("span",[a._v(" En proceso ")])],1)])])])]),s("div",{staticClass:"row"},a._l(a.votosXCasillaTarjetasM.datos_votos,(function(t,i){return s("div",{key:i,staticClass:"col-12 col-sm-6 mb-3"},["99"!=t.candidatura_id&&"999"!=t.candidatura_id&&"99999999"!=t.candidatura_id&&9999!=t.candidatura_id&&99999!=t.candidatura_id&&999999999!=t.candidatura_id?s("div",{staticClass:"resumen-voto-candidatura d-flex justify-content-between "},[s("div",{staticClass:"ml-3 "},[s("div",{staticClass:"foto mt-2"},["sin logo"!==t.candidatura_logo?s("img",{staticStyle:{"max-height":"40px"},attrs:{src:t.candidatura_logo,alt:t.candidatura_nombre}}):s("span",[a._v(" "+a._s(t.candidatura_nombre)+" ")])])]),s("div",{staticClass:"mr-4 mb-2"},[s("div",{staticClass:"total text-right mt-1"},[s("p",{staticClass:"mb-0 font-weight-bold"},[a._v(" Total de votos "),s("br"),s("span",[a._v(" "+a._s(t.candidatura_votos_cantidad)+" ")])])])])]):a._e()])})),0),s("div",[s("p",[a._v(" Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos.No obstantes, al considerar todos los decimales, suman 100%. ")])]),s("div",{staticClass:"resumenDeLaVotacion mb-4"},[s("p",{staticClass:"titulo"},[a._v(" Resumen de la votación ")]),s("ResumenVotacion",{attrs:{texto:"Votos Acumulados",numero:a.resumen.votos_acumulados_numero,porcentaje:a.resumen.votos_acumulados_porcentaje}}),s("ResumenVotacion",{attrs:{texto:"Candidaturas no registradas",numero:a.resumen.candidaturas_no_registradas_numero,porcentaje:a.resumen.candidaturas_no_registradas_porcentaje}}),s("ResumenVotacion",{attrs:{texto:"Nulos",numero:a.resumen.nulos_numero,porcentaje:a.resumen.nulos_porcentaje}})],1),s("div",{staticClass:"totalVotos mb-4"},[s("h5",{staticClass:"text-center"},[s("b",[a._v("Total de votos")])]),s("h1",{staticClass:"total mb-0"},[a._v(" "+a._s(a.resumen.total_votos_numero)+" ")]),s("p",{staticClass:"porcentaje mb-3"},[a._v(" "+a._s(a.resumen.total_votos_porcentaje)+"% ")])]),s("div",{staticClass:"col-12 mb-3 resumen-votacion"},[s("h5",{staticClass:"mb-2 pt-1"},[s("b",[a._v("Observaciones en Acta")])]),s("div",{staticClass:"mt-2"},[a._v(" "+a._s(a.resumen.observarciones_acta)+" ")])]),s("EstadisticaCasilla",{attrs:{seccion:a.seccion,casilla:a.casilla,estadisticas:a.estadisticas}}),s("ObservacionesActas")],1)]):a._e()])},e=[],o=(s("4de4"),s("5530")),n=s("a6f4"),c=s("5833"),r=s("0fd2"),l=s("e181"),d=s("5945"),u=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"votosEnActasContabilizadas"},[s("p",{staticClass:"titulo"},[a._v(" Estadística de la Casilla Sección "+a._s(a.seccion)+" "+a._s(a.casilla)+" ")]),s("h5",{staticClass:"font-weight-bold mb-3"},[a._v(" Participación ciudadana con base en la Lista Nominal de las Actas PREP Contabilizadas ")])]),s("div",{staticClass:"votosTotalesAvance mb-4"},[s("div",{staticClass:"grilla mb-2"},[s("div",{staticClass:"leyenda"},[s("p",{staticClass:"font-weight-bold mb-0"},[a._v(" "+a._s(a.seccion)+" Casilla "+a._s(a.casilla)+" ")])]),s("div",{staticClass:"total"},[s("h4",{staticClass:"mb-0"},[a._v(" "+a._s(a.estadisticas.participacion_ciudadana_porcentaje)+"% ")])])]),s("b-progress",{attrs:{max:"100",value:a.estadisticas.participacion_ciudadana_porcentaje}})],1),s("div",{staticClass:"listaNominal mb-5"},[s("h5",{staticClass:"font-weight-bold mb-3"},[a._v(" Lista Nominal ")]),s("h1",{staticClass:"text-center font-weight-bold mb-1"},[a._v(" "+a._s(a.estadisticas.total_lista_nominal_numero)+" ")]),s("p",{staticClass:"text-center small mb-4"},[a._v(" Lista Nominal de Actas Contabilizadas ")]),s("p",{staticClass:"text-center small"},[a._v(" El cálculo de Participación Ciudadana puede rebasar el 100% si votan todos los ciudadanos de la Lista Nominal de una casilla; así como los Representantes de Partido Político . ")])])])},v=[],_={name:"EstadisticaCasilla",props:{seccion:String,casilla:String,estadisticas:Object}},p=_,f=s("2877"),m=Object(f["a"])(p,u,v,!1,null,null,null),C=m.exports,b=Object(n["c"])({name:"VpcDetalleDelDistritoYSeccionMovil",components:{Layout:r["a"],ResumenVotacion:l["a"],ObservacionesActas:d["a"],EstadisticaCasilla:C},computed:{cargaTerminada:function(){return this.$store.state.cargaTerminada},resumen:function(){var a=this;return"G"===this.$route.params.eleccion?this.$store.state.gResumenNivelCasilla.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)&&t.casilla_tipo==a.casilla}))[0]:"D"===this.$route.params.eleccion?this.$store.state.dResumenNivelCasilla.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)&&t.casilla_tipo==a.casilla}))[0]:"A"===this.$route.params.eleccion?this.$store.state.aResumenNivelCasilla.datos_municipios[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0]:void 0},votosXCasillaTarjetasM:function(){var a=this;if("undefined"!==typeof this.$route.params){if("G"===this.$route.params.eleccion)return this.$store.state.gVotosXCasillaTarjeta.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0];if("D"===this.$route.params.eleccion)return this.$store.state.dVotosXCasillaTarjeta.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0];if("A"===this.$route.params.eleccion)return this.$store.state.aVotosXCasillaNivelDistrito.datos_municipios[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0]}return""}},setup:function(a,t){var s=t.root;return Object(o["a"])({},Object(c["a"])(s))}}),h=b,g=(s("aa55"),Object(f["a"])(h,i,e,!1,null,"6f70ee26",null));t["a"]=g.exports},"4cbc":function(a,t,s){},5833:function(a,t,s){"use strict";s("99af"),s("4de4"),s("7db0");var i=s("5530"),e=s("a6f4"),o=s("5c61"),n=s("bfcd");function c(a){var t=a.$route.params.eleccion,s=Object(e["a"])((function(){return a.$store.state})),c=Object(e["a"])((function(){return"G"===a.$route.params.eleccion?"Gubernatura":"D"===a.$route.params.eleccion?"Diputaciones":"A"===a.$route.params.eleccion?"Ayuntamientos":""})),r=Object(e["a"])((function(){return a.$route.params.distrito})),l=Object(e["a"])((function(){return s.value.elementosGenerales.datos_distritos.find((function(a){return parseInt(a.id,10)===parseInt(r.value,10)})).descripcion})),d=Object(e["e"])(a.$route.params.seccion),u=Object(e["e"])(a.$route.params.casilla||""),v=function(){u.value=a.$route.params.casilla||"",console.log("Valor actual de casilla:",u.value)};v(),a.$router.afterEach((function(){v()}));var _=Object(e["a"])((function(){return s.value.elementosGenerales.datos_municipios[r.value-1]})),p=Object(e["a"])((function(){var a={G:{tipo:"gVotosXCasilla",area:"datos_distritos"},A:{tipo:"aVotosXCasilla",area:"datos_municipios"},D:{tipo:"dVotosXCasilla",area:"datos_distritos"}},i=a[t],e=s.value[i.tipo];return Object(n["a"])(r.value,d.value,u.value).filtrarDatosCasilla(e,i.area)})),f=Object(e["a"])((function(){var a={G:{tipo:"gVotosXCasillaTarjeta",area:"datos_distritos"},A:{tipo:"aVotosXCasillaNivelDistrito",area:"datos_municipios"},D:{tipo:"dVotosXCasillaTarjeta",area:"datos_distritos"}},i=a[t],e=s.value[i.tipo];return Object(n["a"])(r.value,d.value,u.value).filtrarDatosCasilla(e,i.area)})),m=Object(e["a"])((function(){var a={G:{tipo:"gResumenNivelCasilla",area:"datos_distritos"},A:{tipo:"aResumenNivelCasilla",area:"datos_municipios"},D:{tipo:"dResumenNivelCasilla",area:"datos_distritos"}},i=s.value[a[t].tipo];return Object(n["a"])(r.value,d.value).filtrarDatosSeccion(i,a[t].area).datos_casillas.filter((function(a){return parseInt(a.seccion_id,10)===parseInt(d.value,10)&&a.casilla_tipo===u.value}))[0]})),C=Object(e["a"])((function(){var a={G:{tipo:"gEstadisticaNivelCasilla",area:"datos_distritos"},A:{tipo:"aEstadisticaNivelCasilla",area:"datos_municipios"},D:{tipo:"dEstadisticaNivelCasilla",area:"datos_distritos"}},i=s.value[a[t].tipo];return"Ayuntamientos"===c.value?Object(n["a"])(r.value,d.value).filtrarDatosSeccion(i,a[t].area).datos_casillas.filter((function(a){return a.casilla_tipo===u.value}))[0]:Object(n["a"])(r.value,d.value).filtrarDatosSeccion(i,a[t].area).datos_casillas.filter((function(a){return parseInt(a.seccion_id,10)===parseInt(d.value,10)&&a.casilla_tipo===u.value}))[0]})),b=Object(e["a"])((function(){return"A"!==t?s.value.elementosGenerales.datos_secciones.distritos[r.value-1].datos_secciones:s.value.elementosGenerales.datos_secciones_por_municipio[r.value-1].datos_secciones})),h=Object(e["a"])((function(){return s.value.elementosGenerales.datos_casillas.filter((function(a){return parseInt(a.seccion_id,10)===parseInt(d.value,10)}))[0]})),g=Object(e["a"])((function(){return parseInt(p.value.datos_votos[1].candidatura_logo,10)})),j=function(){a.$router.push("/".concat(t,"/Secciones/").concat(r.value,"/").concat(d.value))},x=function(){a.$router.push("/".concat(t,"/Secciones/").concat(r.value,"/").concat(d.value,"/").concat(u.value))};return Object(i["a"])(Object(i["a"])({},Object(o["a"])()),{},{votosXCasilla:p,distrito:r,seccion:d,tituloEleccion:c,ayuntamiento:_,casilla:u,resumen:m,votosXCasillaTarjetas:f,estadisticas:C,distritoNombre:l,cambiarSeccion:j,listaSecciones:b,irADetalleDeCasilla:x,listaCasillas:h,eleccion:t,nivelProcedenciaCasilla:g})}t["a"]=c},5899:function(a,t){a.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(a,t,s){var i=s("1d80"),e=s("5899"),o="["+e+"]",n=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),r=function(a){return function(t){var s=String(i(t));return 1&a&&(s=s.replace(n,"")),2&a&&(s=s.replace(c,"")),s}};a.exports={start:r(1),end:r(2),trim:r(3)}},"596a":function(a,t,s){"use strict";s("8f87")},"6a16":function(a,t,s){"use strict";s("e697")},"6f8a":function(a,t,s){"use strict";s("fe7f")},7156:function(a,t,s){var i=s("861d"),e=s("d2bb");a.exports=function(a,t,s){var o,n;return e&&"function"==typeof(o=t.constructor)&&o!==s&&i(n=o.prototype)&&n!==s.prototype&&e(a,n),a}},"75bc":function(a,t,s){},"7bb6":function(a,t,s){"use strict";s("a9e3");var i,e,o={name:"ParticipacionCiudadana",props:{numero:String,porcentaje:Number,leyenda:String,esCasilla:Boolean},render:function(){var a=arguments[0];return a("div",[a("h3",["Estadística de Casilla"]),a("p",{class:"font-weight-bold px-4 mt-4"},[a("u",["Participación ciudadana con base en la Lista Nominal de las Actas PREP Contabilizadas"])]),a("div",{class:"row mb-3 px-4"},[a("div",{class:"col-9"},[a("span",{class:"porcentaje-participacion-ciudadana"},[a("h4",[a("small",[this.leyenda," ",a("br")]),this.porcentaje,"%"])])]),a("div",{class:"col-3"},[a("p",{class:"font-weight-bold text-right mb-0"},["Total de la Lista Nominal"]),a("h2",{class:"font-weight-bold text-right"},[this.numero])]),a("div",{class:"col-12"},[a("b-progress",{attrs:{max:"100",value:this.porcentaje}})])]),this.esCasilla&&a("div",{class:"row px-4"},[a("div",{class:"col-12"},[a("p",{class:"small"},[a("small",[a("b",["El cálculo de Participación ciudadana puede rebasar el 100% si vota toda la ciudadanía de la Lista Nominal de una casilla; así como las Representaciones de Partidos Políticos."])])])])])])}},n=o,c=(s("f82c"),s("2877")),r=Object(c["a"])(n,i,e,!1,null,"6496bb6a",null);t["a"]=r.exports},"8f87":function(a,t,s){},a9e3:function(a,t,s){"use strict";var i=s("83ab"),e=s("da84"),o=s("94ca"),n=s("6eeb"),c=s("5135"),r=s("c6b6"),l=s("7156"),d=s("c04e"),u=s("d039"),v=s("7c73"),_=s("241c").f,p=s("06cf").f,f=s("9bf2").f,m=s("58a8").trim,C="Number",b=e[C],h=b.prototype,g=r(v(h))==C,j=function(a){var t,s,i,e,o,n,c,r,l=d(a,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:i=2,e=49;break;case 79:case 111:i=8,e=55;break;default:return+l}for(o=l.slice(2),n=o.length,c=0;c<n;c++)if(r=o.charCodeAt(c),r<48||r>e)return NaN;return parseInt(o,i)}return+l};if(o(C,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,I=function(a){var t=arguments.length<1?0:a,s=this;return s instanceof I&&(g?u((function(){h.valueOf.call(s)})):r(s)!=C)?l(new b(j(t)),s,I):j(t)},E=i?_(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;E.length>S;S++)c(b,x=E[S])&&!c(I,x)&&f(I,x,p(b,x));I.prototype=h,h.constructor=I,n(e,C,I)}},aa55:function(a,t,s){"use strict";s("4cbc")},bfcd:function(a,t,s){"use strict";s("4de4");function i(a,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=function(s,i){return s[i][a-1].datos_secciones.filter((function(a){var s=parseInt(a.seccion_id,10),i=parseInt(t,10);return s===i}))[0]},e=function(i,e){return console.log(i),console.log(e),console.log("Casilla: ",s),console.log("Text",i[e][a-1].datos_secciones.filter((function(a){var s=parseInt(a.seccion_id,10),i=parseInt(t,10);return s===i}))[0]),i[e][a-1].datos_secciones.filter((function(a){var s=parseInt(a.seccion_id,10),i=parseInt(t,10);return s===i}))[0].datos_casillas.filter((function(a){return a.casilla_tipo===s}))[0]};return{filtrarDatosSeccion:i,filtrarDatosCasilla:e}}t["a"]=i},e181:function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"grilla-resumen col-9"},[s("div",{staticClass:"votos  "},[s("p"),s("div",{attrs:{id:"encabezado"}},[a._v(" "+a._s(a.texto)+" ")]),a._v(" "),s("br"),s("div",{staticClass:"numero"},[a._v(" "+a._s(a.numero)+" ")]),s("p")]),s("div",{staticClass:"porcentaje "},[s("p",[a._v(" "+a._s(a.porcentaje)+"% ")])])])},e=[],o={name:"ResumenVotacion",props:{numero:String,porcentaje:String,texto:String}},n=o,c=(s("6a16"),s("2877")),r=Object(c["a"])(n,i,e,!1,null,"64ad87d1",null);t["a"]=r.exports},e697:function(a,t,s){},ecfb:function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[a.anchoPantalla>=992?s("SeccionCasillaEscritorio"):s("SeccionCasillaMovil")],1)},e=[],o=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"vista-escritorio"},[s("Cabecera"),s("Cuerpo",[s("div",{staticClass:"votos"},[s("div",{staticClass:"votos-cabecera"},[s("div",{staticClass:"titulos"},[s("h2",[a._v(" "+a._s(a.tituloEleccion)+" - "),s("span",[s("strong",[a._v("Sección - Casilla ")])])]),s("h4",[s("strong",[s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+this.$route.params.eleccion+"/ENT/VPC"}},[a._v(" Baja California Sur ")])],1),a._v(" / "),s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+this.$route.params.eleccion+"/DET/VPC/"+a.distrito}},["A"!==this.$route.params.eleccion?s("span",[a._v(" Distrito "+a._s(a.distrito)+". "+a._s(a.distritoNombre)+" ")]):s("span",[a._v(" Municipio "+a._s(this.distrito)+". "+a._s(a.ayuntamiento.municipio_descripcion)+" ")])]),a._v(" / "),s("router-link",{staticClass:"estado-volver",attrs:{to:"/"+this.$route.params.eleccion+"/Secciones/"+a.distrito+"/"+a.seccion}},[a._v(" Sección "+a._s(a.seccion)+" ")]),a._v(" / "+a._s(a.casilla)+" ")],1),s("p",[a._v(" El total de votos calculado y porcentaje que se muestran, se refieren a los votos asentados en las actas PREP hasta el momento. "),s("br")]),s("h3",[a._v("Información del Acta")]),s("div",{staticClass:"grilla-estado-acta mb-4"},[s("div",[s("p",{staticClass:"small font-weight-bold"},[a._v("Acta digitalizada:")]),s("a",{attrs:{href:a.calcularUrlActaDigitalizada(a.votosXCasilla.datos_votos[1]),target:"_blank",rel:"noopener noreferrer"}},[s("button",{staticClass:"recarga btn-ver"},[s("nivel-procedencia",{attrs:{procedencia:a.nivelProcedenciaCasilla}}),s("div",{staticClass:"texto"},[0!==a.votosXCasilla.datos_votos[1].candidatura_logo?s("span",[a._v(" Ver ")]):s("span",[a._v(" En proceso ")])])],1)])]),s("div",{staticClass:"procedencias-actas"},[s("p",{staticClass:"small font-weight-bold mb-4"},[a._v(" Imagen procedente de: ")]),s("div",{staticClass:"procedencias mb-3 "},[s("div",{staticClass:"terminado float-left mr-3 mb-3"},[s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:["far","file"]}}),s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:"print"}}),a._v(" Escáner ")],1),s("div",{staticClass:"terminado float-left mr-3 mb-3"},[s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:["far","file"]}}),s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:"mobile-alt"}}),a._v(" Móvil ")],1),s("div",{staticClass:"proceso float-left mr-3 mb-3"},[s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:["far","file"]}}),s("font-awesome-icon",{staticClass:"fa-2x mr-2",attrs:{icon:"hourglass"}}),a._v(" Acta en proceso ")],1)])])])])]),s("SliderV",{attrs:{votos:a.votosXCasillaTarjetas}}),s("div",{staticClass:"votos-cabecera"},[s("div",{staticClass:"titulos"},[s("div",{staticClass:"row px-3"},[s("div",{staticClass:"col-8 mb-3 resumen-votacion"},[s("h4",{staticClass:"mb-2"},[a._v("Resumen de la votación")]),s("div",{staticClass:"grilla-suma"},[s("div",{staticClass:"acumulados text-center"},[s("p",{staticClass:"font-weight-bold"},[a._v(" Votos acumulados "),s("span",{attrs:{id:"tooltip"}},[s("font-awesome-icon",{staticClass:"fa-sm fa-info",attrs:{icon:"info-circle"}}),s("span",{staticClass:"tooltiptext"},[a._v(" Es la sumatoria de los votos obtenidos "),s("br"),a._v(" por Partido Político, Candidatura Independiente y combinaciones de Coalición. ")])],1),s("br"),a._v(" "+a._s(a.resumen.votos_acumulados_numero)+" "),s("br"),s("span",{staticClass:"porcentaje"},[a._v(" "+a._s(a.resumen.votos_acumulados_porcentaje)+"% ")])])]),s("div",{staticClass:"icono-suma"},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"plus"}})],1),s("div",{staticClass:"no-registradas text-center"},[s("p",{staticClass:"font-weight-bold"},[a._v(" Candidaturas no registradas "),s("br"),a._v(" "+a._s(a.resumen.candidaturas_no_registradas_numero)+" "),s("br"),s("span",{staticClass:"porcentaje"},[a._v(" "+a._s(a.resumen.candidaturas_no_registradas_porcentaje)+"% ")])])]),s("div",{staticClass:"icono-suma"},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"plus"}})],1),s("div",{staticClass:"nulos text-center"},[s("p",{staticClass:"font-weight-bold"},[a._v(" Votos Nulos "),s("span",{attrs:{id:"tooltip"}},[s("font-awesome-icon",{staticClass:"fa-sm fa-info",attrs:{icon:"info-circle"}}),s("span",{staticClass:"tooltiptext"},[a._v(" El total y el porcentaje de votos para candidaturas no registradas y nulos, considera la votación en Casillas y Anticipados. ")])],1),s("br"),a._v(" "+a._s(a.resumen.nulos_numero)+" "),s("br"),s("span",{staticClass:"porcentaje"},[a._v(" "+a._s(a.resumen.nulos_porcentaje)+"% ")])])]),s("div",{staticClass:"icono-suma"},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"equals"}})],1),s("div",{staticClass:"total text-right"},[s("p",{staticClass:"font-weight-bold"},[a._v(" Total de votos "),s("span",{attrs:{id:"tooltip"}},[s("font-awesome-icon",{staticClass:"fa-sm fa-info",attrs:{icon:"info-circle"}}),s("span",{staticClass:"tooltiptext"},[a._v(" Se refiere a la suma total de votos que realiza el sistema informático con en los datos que muestran en cada Acta; podrás consultar la cifra del total de Votos mostrado en cada Acta en la base de datos del PREP (numeral 26, fr.XIV del Anexo 13 del Reglamento de Elecciones). ")])],1),s("br"),s("big",[a._v(a._s(a.resumen.total_votos_numero))]),a._v(" "),s("br"),s("span",{staticClass:"porcentaje"},[a._v(" "+a._s(a.resumen.total_votos_porcentaje)+"% ")])],1)])])]),s("div",{staticClass:"col-1"}),s("div",{staticClass:"col-3 mb-3 resumen-votacion"},[s("h4",{staticClass:"mb-2"},[a._v("Observaciones en Acta")]),s("div",[a._v(a._s(a.resumen.observarciones_acta))])])])])])],1),s("div",{staticClass:"votos"},[s("div",{staticClass:"votos-cabecera"},[s("div",{staticClass:"titulos"},[s("ParticipacionCiudadana",{attrs:{numero:a.estadisticas.total_lista_nominal_numero,porcentaje:parseFloat(a.estadisticas.participacion_ciudadana_porcentaje),leyenda:a.estadisticas.casilla_nombre,esCasilla:!0}})],1)])]),s("div",{staticClass:"votos"},[s("div",{staticClass:"votos-cabecera"},[s("div",{staticClass:"titulos"},[s("ObservacionesActas")],1)])]),s("div",{staticClass:"text-center"},[s("p",[a._v(" Los resultados presentados tienen un carácter informativo y no son definitivos, por tanto, no tienen efectos jurídicos. Federal. ")])])]),s("Compartir"),s("PieDePagina")],1)},n=[],c=(s("4de4"),s("b0c0"),s("a6f4")),r=s("5833"),l=s("952c"),d=s("4f57"),u=s("3fd6"),v=s("5945"),_=s("df1f"),p=s("7bb6"),f=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"contenedor-padre"},[s("button",{staticClass:"btn-fijo btn-izquierda",attrs:{disabled:0===a.horizontalScrollValue},on:{click:a.scrollIzquierda}},[s("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"chevron-left"}})],1),s("div",{staticClass:"rowFlex",attrs:{id:"row-flex"}},a._l(a.votos.datos_candidaturas||a.votos.datos_votos.slice(),(function(t,i){return s("div",{key:i,class:t.candidatura_id===a.votos.candidato_id_con_mayor_numero_votos||t.candidato_id===a.votos.candidato_id_con_mayor_numero_votos,staticStyle:{padding:"10px"}},["99"!=t.candidatura_id&&"999"!=t.candidatura_id&&"99999999"!=t.candidatura_id&&9999!=t.candidatura_id&&99999!=t.candidatura_id&&999999999!=t.candidatura_id?s("div",{staticClass:"resumen-voto-candidatura "},[s("div",{staticClass:"contorno"},[s("div",{staticClass:"grilla-datos "},[s("div",{staticClass:"grilla-datos-candidatura"},[s("div",{staticClass:"foto",staticStyle:{"text-align":"center"}},[s("img",{staticStyle:{"max-height":"40px"},attrs:{src:t.candidatura_logo,alt:t.candidatura_nombre}})]),s("div",{staticClass:"nombre text-center mb-4"})])]),s("div",{staticClass:"grilla-resumen"},[s("div",{staticClass:"total text-left"},[s("p",{staticClass:"mb-0 font-weight-bold"},[a._v(" Votos "),s("br"),t.candidatura_total_votos_numero?s("span",[a._v(" "+a._s(t.candidatura_total_votos_numero)+" ")]):s("span",[a._v(" "+a._s(t.candidatura_votos_cantidad)+" ")])])]),s("div",{staticClass:"porcentaje text-righd"},[s("p",{staticClass:"mb-0 font-weight-bold"},[t.candidatura_total_votos_porcentaje?s("span",[a._v(" "+a._s(t.candidatura_total_votos_porcentaje)+"% ")]):s("span",[a._v(" "+a._s(t.candidatura_votos_porcentaje)+"% ")])])])])])]):a._e()])})),0),s("button",{staticClass:"btn-fijo btn-derecha",attrs:{disabled:a.horizontalScrollValue>a.maximoLogitudScroll},on:{click:a.scrollDerecha}},[s("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"chevron-right"}})],1)])},m=[],C=Object(c["c"])({name:"SliderV",props:{votos:Object},setup:function(){var a=150,t=Object(c["e"])(0),s=Object(c["e"])(0),i=function(){var t=document.getElementById("row-flex");s.value<t.scrollWidth&&(s.value+=a),t.scrollTo(s.value,0)},e=function(){var t=document.getElementById("row-flex");s.value>0&&(s.value-=a),t.scrollTo(s.value,0)};return Object(c["d"])((function(){var a=document.getElementById("row-flex");t.value=a.scrollWidth-a.offsetWidth})),{scrollDerecha:i,scrollIzquierda:e,horizontalScrollValue:s,maximoLogitudScroll:t}}}),b=C,h=(s("6f8a"),s("2877")),g=Object(h["a"])(b,f,m,!1,null,"6789f9e4",null),j=g.exports,x=s("83d0"),I=s("5a37"),E=Object(c["c"])({name:"SeccionCasillaEscritorio",components:{Cabecera:l["a"],Cuerpo:d["a"],Compartir:u["a"],PieDePagina:_["a"],ObservacionesActas:v["a"],ParticipacionCiudadana:p["a"],ProcedenciaActa:x["a"],SliderV:j,NivelProcedencia:I["a"]},setup:function(a,t){var s=t.root;return"undefined"===typeof s?{}:Object(r["a"])(s)},watch:{$route:function(a,t){a.name===t.name&&(this.seccion=a.params.seccion)}},computed:{resumen:function(){var a=this;if("undefined"!==typeof this.$route.params){if("G"===this.$route.params.eleccion)return this.$store.state.gResumenNivelCasilla.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)&&t.casilla_tipo==a.casilla}))[0];if("D"===this.$route.params.eleccion)return this.$store.state.dResumenNivelCasilla.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)&&t.casilla_tipo==a.casilla}))[0];if("A"===this.$route.params.eleccion)return this.$store.state.aResumenNivelCasilla.datos_municipios[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0]}return""},votosXCasillaTarjetas:function(){var a=this;if("undefined"!==typeof this.$route.params){if("G"===this.$route.params.eleccion)return this.$store.state.gVotosXCasillaTarjeta.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0];if("D"===this.$route.params.eleccion)return this.$store.state.dVotosXCasillaTarjeta.datos_distritos[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0];if("A"===this.$route.params.eleccion)return this.$store.state.aVotosXCasillaNivelDistrito.datos_municipios[this.distrito-1].datos_secciones.filter((function(t){return parseInt(t.seccion_id)==parseInt(a.seccion)}))[0].datos_casillas.filter((function(t){return t.casilla_tipo==a.casilla}))[0]}return""}}}),S=E,w=(s("596a"),Object(h["a"])(S,o,n,!1,null,"502cdd06",null)),A=w.exports,N=s("182a"),$={name:"SeccionCasilla",components:{SeccionCasillaEscritorio:A,SeccionCasillaMovil:N["a"]},computed:{anchoPantalla:function(){return this.$store.state.anchoPantalla}},metaInfo:{title:"IEEBCS - PREP 2024 - Secciones"}},O=$,y=Object(h["a"])(O,i,e,!1,null,"01ddbb00",null);t["default"]=y.exports},f82c:function(a,t,s){"use strict";s("75bc")},fe7f:function(a,t,s){}}]);
//# sourceMappingURL=chunk-529d3970.54c25cbf.js.map