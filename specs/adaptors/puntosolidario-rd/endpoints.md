# Punto Solidario v2 (puntosolidario-rd) vv2

<!-- derived from openapi.json by `pnpm specs index puntosolidario-rd` — do not edit by hand -->

base: not declared | auth: not declared | 935 operations in 104 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## ActividadRc
- GET /api/ActividadRc
- POST /api/ActividadRc — Creates a record.
- GET /api/ActividadRc/odata — Get all by query options.
- GET /api/ActividadRc/{id} — Get a specific record by id.
- PUT /api/ActividadRc/{id} — Updates a record.
- DELETE /api/ActividadRc/{id} — Deletes a specific record by id.
- GET /api/ActividadRc/ExportCsv

## AppNotification
- GET /api/AppNotification
- POST /api/AppNotification — Creates a record.
- GET /api/AppNotification/odata — Get all by query options.
- GET /api/AppNotification/{id} — Get a specific record by id.
- PUT /api/AppNotification/{id} — Updates a record.
- DELETE /api/AppNotification/{id} — Deletes a specific record by id.
- GET /api/AppNotification/ExportCsv

## AppNotificationReceiver
- GET /api/AppNotificationReceiver/{userId}/pendientes
- PUT /api/AppNotificationReceiver/MarkAsRead/{id}
- GET /api/AppNotificationReceiver
- POST /api/AppNotificationReceiver — Creates a record.
- GET /api/AppNotificationReceiver/odata — Get all by query options.
- GET /api/AppNotificationReceiver/{id} — Get a specific record by id.
- PUT /api/AppNotificationReceiver/{id} — Updates a record.
- DELETE /api/AppNotificationReceiver/{id} — Deletes a specific record by id.
- GET /api/AppNotificationReceiver/ExportCsv

## Auditoria
- GET /api/Auditoria
- POST /api/Auditoria — Creates a record.
- GET /api/Auditoria/odata — Get all by query options.
- GET /api/Auditoria/{id} — Get a specific record by id.
- PUT /api/Auditoria/{id} — Updates a record.
- DELETE /api/Auditoria/{id} — Deletes a specific record by id.
- GET /api/Auditoria/ExportCsv

## Authentication
- POST /api/Authentication/requestBeneficiario
- POST /api/Authentication/request
- POST /api/Authentication/requestTokenAPIAsync
- POST /api/Authentication/report-token
- POST /api/Authentication/ForgotPassword
- POST /api/Authentication/ResetPassword

## AvisoUsuario
- GET /api/AvisoUsuario
- POST /api/AvisoUsuario — Creates a record.
- GET /api/AvisoUsuario/{id} — Get a specific record by id.
- PUT /api/AvisoUsuario/{id} — Updates a record.
- DELETE /api/AvisoUsuario/{id} — Deletes a specific record by id.
- GET /api/AvisoUsuario/odata — Get all by query options.
- GET /api/AvisoUsuario/ExportCsv

## AvisoUsuarioAsociado
- GET /api/AvisoUsuarioAsociado/GetAllUsuarios
- GET /api/AvisoUsuarioAsociado
- POST /api/AvisoUsuarioAsociado — Creates a record.
- GET /api/AvisoUsuarioAsociado/odata — Get all by query options.
- GET /api/AvisoUsuarioAsociado/{id} — Get a specific record by id.
- PUT /api/AvisoUsuarioAsociado/{id} — Updates a record.
- DELETE /api/AvisoUsuarioAsociado/{id} — Deletes a specific record by id.
- GET /api/AvisoUsuarioAsociado/ExportCsv

## AvisoUsuarioAsociadoVista
- PUT /api/AvisoUsuarioAsociadoVista/MarkAsSeen/{id}
- GET /api/AvisoUsuarioAsociadoVista
- POST /api/AvisoUsuarioAsociadoVista — Creates a record.
- GET /api/AvisoUsuarioAsociadoVista/odata — Get all by query options.
- GET /api/AvisoUsuarioAsociadoVista/{id} — Get a specific record by id.
- PUT /api/AvisoUsuarioAsociadoVista/{id} — Updates a record.
- DELETE /api/AvisoUsuarioAsociadoVista/{id} — Deletes a specific record by id.
- GET /api/AvisoUsuarioAsociadoVista/ExportCsv

## BandejaEntradaActividad
- PUT /api/BandejaEntradaActividad/Disable/{id}
- PUT /api/BandejaEntradaActividad/Enable/{id}
- PUT /api/BandejaEntradaActividad/Leido/{id}
- PUT /api/BandejaEntradaActividad/NoLeido/{id}
- GET /api/BandejaEntradaActividad/ExportCsv
- GET /api/BandejaEntradaActividad/GenerarBandejaEntradaActividadPdf/{id}
- POST /api/BandejaEntradaActividad/registrar
- GET /api/BandejaEntradaActividad/pendientes/{count}
- GET /api/BandejaEntradaActividad/TodayActivities
- POST /api/BandejaEntradaActividad/PruebaPersona
- GET /api/BandejaEntradaActividad
- POST /api/BandejaEntradaActividad — Creates a record.
- GET /api/BandejaEntradaActividad/odata — Get all by query options.
- GET /api/BandejaEntradaActividad/{id} — Get a specific record by id.
- PUT /api/BandejaEntradaActividad/{id} — Updates a record.
- DELETE /api/BandejaEntradaActividad/{id} — Deletes a specific record by id.

## BandejaEntradaActividadDocumento
- GET /api/BandejaEntradaActividadDocumento
- POST /api/BandejaEntradaActividadDocumento — Creates a record.
- GET /api/BandejaEntradaActividadDocumento/odata — Get all by query options.
- GET /api/BandejaEntradaActividadDocumento/{id} — Get a specific record by id.
- PUT /api/BandejaEntradaActividadDocumento/{id} — Updates a record.
- DELETE /api/BandejaEntradaActividadDocumento/{id} — Deletes a specific record by id.
- GET /api/BandejaEntradaActividadDocumento/ExportCsv

## BandejaEntradaActividadNota
- GET /api/BandejaEntradaActividadNota
- POST /api/BandejaEntradaActividadNota — Creates a record.
- GET /api/BandejaEntradaActividadNota/odata — Get all by query options.
- GET /api/BandejaEntradaActividadNota/{id} — Get a specific record by id.
- PUT /api/BandejaEntradaActividadNota/{id} — Updates a record.
- DELETE /api/BandejaEntradaActividadNota/{id} — Deletes a specific record by id.
- GET /api/BandejaEntradaActividadNota/ExportCsv

## BandejaEntradaActividadRespuesta
- POST /api/BandejaEntradaActividadRespuesta/RespuestaRapida
- GET /api/BandejaEntradaActividadRespuesta
- POST /api/BandejaEntradaActividadRespuesta — Creates a record.
- GET /api/BandejaEntradaActividadRespuesta/odata — Get all by query options.
- GET /api/BandejaEntradaActividadRespuesta/{id} — Get a specific record by id.
- PUT /api/BandejaEntradaActividadRespuesta/{id} — Updates a record.
- DELETE /api/BandejaEntradaActividadRespuesta/{id} — Deletes a specific record by id.
- GET /api/BandejaEntradaActividadRespuesta/ExportCsv

## Barrio
- GET /api/Barrio/NotRepeat
- GET /api/Barrio/GetByCodSeccion
- GET /api/Barrio
- POST /api/Barrio — Creates a record.
- GET /api/Barrio/odata — Get all by query options.
- GET /api/Barrio/{id} — Get a specific record by id.
- PUT /api/Barrio/{id} — Updates a record.
- DELETE /api/Barrio/{id} — Deletes a specific record by id.
- GET /api/Barrio/ExportCsv

## Beneficiario
- POST /api/Beneficiario/CheckMiembroEnComposiciones
- GET /api/Beneficiario/GetFullProfile
- GET /api/Beneficiario/GetSimpleProfile
- GET /api/Beneficiario/GetProfileApi
- GET /api/Beneficiario/GetCasos
- GET /api/Beneficiario/find-from-miembro-personaId/{personaId}
- GET /api/Beneficiario/GetTarjetaICV
- GET /api/Beneficiario/GetProfile
- GET /api/Beneficiario
- POST /api/Beneficiario — Creates a record.
- GET /api/Beneficiario/odata — Get all by query options.
- GET /api/Beneficiario/{id} — Get a specific record by id.
- PUT /api/Beneficiario/{id} — Updates a record.
- DELETE /api/Beneficiario/{id} — Deletes a specific record by id.
- GET /api/Beneficiario/ExportCsv

## CasoInfo
- GET /api/CasoInfo/GetByCategory
- GET /api/CasoInfo
- POST /api/CasoInfo
- GET /api/CasoInfo/ExportCsv
- GET /api/CasoInfo/GenerarCasoInfoPdf/{id}
- POST /api/CasoInfo/AsociarActividadComentario
- GET /api/CasoInfo/odata — Get all by query options.
- GET /api/CasoInfo/{id} — Get a specific record by id.
- PUT /api/CasoInfo/{id} — Updates a record.
- DELETE /api/CasoInfo/{id} — Deletes a specific record by id.

## CasoInfoConfiguracionFechaVenvimiento
- GET /api/CasoInfoConfiguracionFechaVenvimiento
- POST /api/CasoInfoConfiguracionFechaVenvimiento — Creates a record.
- GET /api/CasoInfoConfiguracionFechaVenvimiento/odata — Get all by query options.
- GET /api/CasoInfoConfiguracionFechaVenvimiento/{id} — Get a specific record by id.
- PUT /api/CasoInfoConfiguracionFechaVenvimiento/{id} — Updates a record.
- DELETE /api/CasoInfoConfiguracionFechaVenvimiento/{id} — Deletes a specific record by id.
- GET /api/CasoInfoConfiguracionFechaVenvimiento/ExportCsv

## CasoInfoConfiguracionRole
- GET /api/CasoInfoConfiguracionRole
- POST /api/CasoInfoConfiguracionRole — Creates a record.
- GET /api/CasoInfoConfiguracionRole/odata — Get all by query options.
- GET /api/CasoInfoConfiguracionRole/{id} — Get a specific record by id.
- PUT /api/CasoInfoConfiguracionRole/{id} — Updates a record.
- DELETE /api/CasoInfoConfiguracionRole/{id} — Deletes a specific record by id.
- GET /api/CasoInfoConfiguracionRole/ExportCsv

## CasoInfoConfiguracionUsuario
- GET /api/CasoInfoConfiguracionUsuario
- POST /api/CasoInfoConfiguracionUsuario — Creates a record.
- GET /api/CasoInfoConfiguracionUsuario/odata — Get all by query options.
- GET /api/CasoInfoConfiguracionUsuario/{id} — Get a specific record by id.
- PUT /api/CasoInfoConfiguracionUsuario/{id} — Updates a record.
- DELETE /api/CasoInfoConfiguracionUsuario/{id} — Deletes a specific record by id.
- GET /api/CasoInfoConfiguracionUsuario/ExportCsv

## CasoInfoRespuesta
- GET /api/CasoInfoRespuesta
- POST /api/CasoInfoRespuesta
- GET /api/CasoInfoRespuesta/odata — Get all by query options.
- GET /api/CasoInfoRespuesta/{id} — Get a specific record by id.
- PUT /api/CasoInfoRespuesta/{id} — Updates a record.
- DELETE /api/CasoInfoRespuesta/{id} — Deletes a specific record by id.
- GET /api/CasoInfoRespuesta/ExportCsv

## Ciudadano
- PUT /api/Ciudadano/ResolveMergePropertyConflict
- GET /api/Ciudadano/NeedRefresh/{identification}
- GET /api/Ciudadano/SyncCiudadano
- GET /api/Ciudadano/{identifier}/attributesByIds
- GET /api/Ciudadano/{identifier}/attributes
- GET /api/Ciudadano/{identifier}/section/{code}/attributes
- GET /api/Ciudadano/{identifier}/sectionsinfo
- GET /api/Ciudadano/SyncCiudadanoAviso
- GET /api/Ciudadano/SyncCiudadanoConfig
- GET /api/Ciudadano/SyncCiudadanoConsulta
- GET /api/Ciudadano/SyncCiudadanoAudit
- GET /api/Ciudadano
- POST /api/Ciudadano — Creates a record.
- GET /api/Ciudadano/odata — Get all by query options.
- GET /api/Ciudadano/{id} — Get a specific record by id.
- PUT /api/Ciudadano/{id} — Updates a record.
- DELETE /api/Ciudadano/{id} — Deletes a specific record by id.
- GET /api/Ciudadano/ExportCsv

## Comentario
- GET /api/Comentario
- POST /api/Comentario — Creates a record.
- GET /api/Comentario/odata
- GET /api/Comentario/{id}
- PUT /api/Comentario/{id} — Updates a record.
- DELETE /api/Comentario/{id}
- GET /api/Comentario/ExportCsv

## ComponentDesignConfig
- GET /api/ComponentDesignConfig
- POST /api/ComponentDesignConfig — Creates a record.
- GET /api/ComponentDesignConfig/odata — Get all by query options.
- GET /api/ComponentDesignConfig/{id} — Get a specific record by id.
- PUT /api/ComponentDesignConfig/{id} — Updates a record.
- DELETE /api/ComponentDesignConfig/{id} — Deletes a specific record by id.
- GET /api/ComponentDesignConfig/ExportCsv

## ComponentDesignConfigAttribute
- GET /api/ComponentDesignConfigAttribute
- POST /api/ComponentDesignConfigAttribute — Creates a record.
- GET /api/ComponentDesignConfigAttribute/odata — Get all by query options.
- GET /api/ComponentDesignConfigAttribute/{id} — Get a specific record by id.
- PUT /api/ComponentDesignConfigAttribute/{id} — Updates a record.
- DELETE /api/ComponentDesignConfigAttribute/{id} — Deletes a specific record by id.
- GET /api/ComponentDesignConfigAttribute/ExportCsv

## ComponentImportConfig
- GET /api/ComponentImportConfig
- POST /api/ComponentImportConfig — Creates a record.
- GET /api/ComponentImportConfig/odata — Get all by query options.
- GET /api/ComponentImportConfig/{id} — Get a specific record by id.
- PUT /api/ComponentImportConfig/{id} — Updates a record.
- DELETE /api/ComponentImportConfig/{id} — Deletes a specific record by id.
- GET /api/ComponentImportConfig/ExportCsv

## ConfigProfile
- GET /api/ConfigProfile/default
- GET /api/ConfigProfile
- POST /api/ConfigProfile — Creates a record.
- GET /api/ConfigProfile/{id} — Get a specific record by id.
- PUT /api/ConfigProfile/{id} — Updates a record.
- DELETE /api/ConfigProfile/{id} — Deletes a specific record by id.
- GET /api/ConfigProfile/odata — Get all by query options.
- GET /api/ConfigProfile/ExportCsv

## ConfigProfileAlertGroup
- GET /api/ConfigProfileAlertGroup
- POST /api/ConfigProfileAlertGroup
- GET /api/ConfigProfileAlertGroup/odata
- GET /api/ConfigProfileAlertGroup/{id}
- PUT /api/ConfigProfileAlertGroup/{id}
- DELETE /api/ConfigProfileAlertGroup/{id}
- GET /api/ConfigProfileAlertGroup/ExportCsv

## ConfigRequiredSections
- GET /api/ConfigRequiredSections
- POST /api/ConfigRequiredSections — Creates a record.
- GET /api/ConfigRequiredSections/odata — Get all by query options.
- GET /api/ConfigRequiredSections/{id} — Get a specific record by id.
- PUT /api/ConfigRequiredSections/{id} — Updates a record.
- DELETE /api/ConfigRequiredSections/{id} — Deletes a specific record by id.
- GET /api/ConfigRequiredSections/ExportCsv

## Consulta
- GET /api/Consulta/me
- GET /api/Consulta/meSF
- GET /api/Consulta/{userId}/abierta
- PUT /api/Consulta/{id}/close
- GET /api/Consulta/ConsultaSF
- GET /api/Consulta
- POST /api/Consulta — Creates a record.
- GET /api/Consulta/odata — Get all by query options.
- GET /api/Consulta/{id} — Get a specific record by id.
- PUT /api/Consulta/{id} — Updates a record.
- DELETE /api/Consulta/{id} — Deletes a specific record by id.
- GET /api/Consulta/ExportCsv

## Cuenta
- GET /api/Cuenta
- POST /api/Cuenta — Creates a record.
- GET /api/Cuenta/odata — Get all by query options.
- GET /api/Cuenta/{id} — Get a specific record by id.
- PUT /api/Cuenta/{id} — Updates a record.
- DELETE /api/Cuenta/{id} — Deletes a specific record by id.
- GET /api/Cuenta/ExportCsv

## Direccion
- GET /api/Direccion
- POST /api/Direccion — Creates a record.
- GET /api/Direccion/odata — Get all by query options.
- GET /api/Direccion/{id} — Get a specific record by id.
- PUT /api/Direccion/{id} — Updates a record.
- DELETE /api/Direccion/{id} — Deletes a specific record by id.
- GET /api/Direccion/ExportCsv

## DistritoMunicipal
- GET /api/DistritoMunicipal/GetByCodMunicipio
- GET /api/DistritoMunicipal
- POST /api/DistritoMunicipal — Creates a record.
- GET /api/DistritoMunicipal/odata — Get all by query options.
- GET /api/DistritoMunicipal/{id} — Get a specific record by id.
- PUT /api/DistritoMunicipal/{id} — Updates a record.
- DELETE /api/DistritoMunicipal/{id} — Deletes a specific record by id.
- GET /api/DistritoMunicipal/ExportCsv

## Documento
- GET /api/Documento
- POST /api/Documento
- GET /api/Documento/odata
- GET /api/Documento/{id}
- PUT /api/Documento/{id}
- DELETE /api/Documento/{id}
- GET /api/Documento/ExportCsv

## Encuesta
- GET /api/Encuesta
- POST /api/Encuesta
- GET /api/Encuesta/SendSurvey/{id}
- GET /api/Encuesta/CheckEmailSurvey/{id}/{email}
- GET /api/Encuesta/ForwardSurvey/{id}
- GET /api/Encuesta/CheckKeySurvey/{id}/{key}
- GET /api/Encuesta/odata — Get all by query options.
- GET /api/Encuesta/{id} — Get a specific record by id.
- PUT /api/Encuesta/{id} — Updates a record.
- DELETE /api/Encuesta/{id} — Deletes a specific record by id.
- GET /api/Encuesta/ExportCsv

## EncuestaRespuesta
- GET /api/EncuestaRespuesta
- POST /api/EncuestaRespuesta
- GET /api/EncuestaRespuesta/GetAllResults/{id}
- GET /api/EncuestaRespuesta/odata — Get all by query options.
- GET /api/EncuestaRespuesta/{id} — Get a specific record by id.
- PUT /api/EncuestaRespuesta/{id} — Updates a record.
- DELETE /api/EncuestaRespuesta/{id} — Deletes a specific record by id.
- GET /api/EncuestaRespuesta/ExportCsv

## EnvioTramiteAbiertoNovedad
- GET /api/EnvioTramiteAbiertoNovedad
- POST /api/EnvioTramiteAbiertoNovedad — Creates a record.
- GET /api/EnvioTramiteAbiertoNovedad/odata — Get all by query options.
- GET /api/EnvioTramiteAbiertoNovedad/{id} — Get a specific record by id.
- PUT /api/EnvioTramiteAbiertoNovedad/{id} — Updates a record.
- DELETE /api/EnvioTramiteAbiertoNovedad/{id} — Deletes a specific record by id.
- GET /api/EnvioTramiteAbiertoNovedad/ExportCsv

## EnvioTramiteAbiertoNovedadSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/VerificarEvaluacionCiudadanoCedula
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EstadoSolicitudSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EnviarTramiteAbiertoSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EnviarTramiteAbiertoNumeroTramiteSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/CambiarEstatusAbiertoNumeroTramiteSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/CambiarEstatusAbiertoTramiteSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EnviarCedulaEvaluadoSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EnviarCedulaEvaluadoSIUBENRe
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN/EnviarCedulaEvaluadoSIUBENRel
- GET /api/EnvioTramiteAbiertoNovedadSIUBEN/JsonSiuben
- GET /api/EnvioTramiteAbiertoNovedadSIUBEN
- POST /api/EnvioTramiteAbiertoNovedadSIUBEN — Creates a record.
- GET /api/EnvioTramiteAbiertoNovedadSIUBEN/odata — Get all by query options.
- GET /api/EnvioTramiteAbiertoNovedadSIUBEN/{id} — Get a specific record by id.
- PUT /api/EnvioTramiteAbiertoNovedadSIUBEN/{id} — Updates a record.
- DELETE /api/EnvioTramiteAbiertoNovedadSIUBEN/{id} — Deletes a specific record by id.
- GET /api/EnvioTramiteAbiertoNovedadSIUBEN/ExportCsv

## EnvioTramiteAbiertoNovedadSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE/EnviarTramiteAbiertoSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE/EnviarTramiteAbiertoNumeroTramiteSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE/EnviarCedulaEvaluadoSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE/EstadoSolicitudSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE/ActualizarJefeHogar
- GET /api/EnvioTramiteAbiertoNovedadSUPERATE/JsonSuperate
- GET /api/EnvioTramiteAbiertoNovedadSUPERATE
- POST /api/EnvioTramiteAbiertoNovedadSUPERATE — Creates a record.
- GET /api/EnvioTramiteAbiertoNovedadSUPERATE/odata — Get all by query options.
- GET /api/EnvioTramiteAbiertoNovedadSUPERATE/{id} — Get a specific record by id.
- PUT /api/EnvioTramiteAbiertoNovedadSUPERATE/{id} — Updates a record.
- DELETE /api/EnvioTramiteAbiertoNovedadSUPERATE/{id} — Deletes a specific record by id.
- GET /api/EnvioTramiteAbiertoNovedadSUPERATE/ExportCsv

## External
- GET /api/External/conadis/consulta/beneficiario
- GET /api/External/ps/ciudadano/quitar-duplicados
- GET /api/External/ps/ciudadano/pruebacorreccion
- GET /api/External/ps/ciudadano/pruebainclucion
- GET /api/External/ps/ciudadano/pruebaexclucion
- GET /api/External/ps/ciudadano/SyncProfileFromSteph1
- GET /api/External/ps/hogar/quitar-duplicados
- GET /api/External/ps/ciudadano/{cedula}
- GET /api/External/ps/ciudadano/{cedula}/consultar/estado
- GET /api/External/ps/ciudadano/VerificarEstadoEnInstituciones
- GET /api/External/ps/ciudadano/ExisteMiembroEnOtroHogar
- GET /api/External/ps/ciudadano/ExisteMiembroEnOtroHogarApi
- GET /api/External/ps/ciudadano/ExisteMiembroEnOtroHogarSiuben
- GET /api/External/ps/ciudadano/{cedula}/agregar/telefono/{telefono}
- GET /api/External/ps/ciudadano/ConsultarEstadoYAgregarTelefono
- GET /api/External/ps/ciudadano/ConsultarCedulaYAgregarTelefono
- GET /api/External/ps/ciudadano/ConsultarEstadoCiudadano
- GET /api/External/ps/ciudadano/ConsultarEstadoByCedulaYAgregarTelefono
- GET /api/External/ps/actual/ususarios/sync
- GET /api/External/ps/consulta/RegistrarReclamo
- GET /api/External/ps/GetTarjetaICV
- GET /api/External/jce/consulta/ciudadano
- GET /api/External/senasa/consulta/afiliado
- POST /api/External/adess/registrar/caso
- GET /api/External/adess/consulta/casos
- GET /api/External/adess/consulta/casos/fake
- GET /api/External/adess/consulta/movimientos
- GET /api/External/adess/consulta/casos/{registroId}/historico
- GET /api/External/adess/consulta/prueba
- GET /api/External/adess/CuentasPrueba
- GET /api/External/prosoli/consulta/hogar
- GET /api/External/prosoli/consulta/hogar/{codigoHogar}/miembros
- GET /api/External/prosoli/consulta/hogarByCedula
- GET /api/External/prosoli/consulta/MiembrosHogarByNoHogarApi
- GET /api/External/prosoli/consulta/SubsidiosHogarByCuestionarioApi
- GET /api/External/prosoli/consulta/HogarAlertasbyCuestionarioApi
- GET /api/External/prosoli/consulta/ObservacionesHogarByCuestionarioApi
- GET /api/External/prosoli/consulta/SancionesHogarByCuestionarioApi
- GET /api/External/prosoli/consulta/SancionesObservacionesHogarApi
- GET /api/External/prosoli/consulta/SancionesObservacionesHogarApiBody
- GET /api/External/prosoli/consulta/SuspensionPagoHogarByCuestionarioApi
- GET /api/External/prosoli/consulta/SolicitudesByNoCedulaJefeApi
- POST /api/External/prosoli/consulta/SolicitudesByNoCedulaJefeApiMasivo
- GET /api/External/prosoli/consulta/RegistroCambioDireccion1
- GET /api/External/prosoli/consulta/RegistroCambioComposicionFamiliar1
- GET /api/External/prosoli/consulta/RegistroCambioJefe1
- POST /api/External/GetProfileMasivo
- GET /api/External/siuben/consulta/GetCiudadanoApi
- GET /api/External/siuben/consulta/ciudadanoApi
- POST /api/External/siuben/barridos
- GET /api/External/siuben/barridos/{cedula}
- GET /api/External/siuben/consulta/miembrosPrueba
- GET /api/External/siuben/consulta/ciudadanoCedula
- GET /api/External/siuben/consulta/GetCiudadanoApi/{id}
- GET /api/External/siuben/consulta/ciudadanoApi/{id}
- GET /api/External/siuben/consulta/ciudadanoByIdSolicitud
- GET /api/External/Edes/consulta/factura/{cedula}

## Externo
- GET /api/Externo/siuben/consulta/ciudadanoCedula

## Files
- POST /api/files/upload-many
- POST /api/files/upload-and-save-many
- POST /api/files/upload-and-save
- POST /api/files/upload
- GET /api/files/download
- GET /api/files/content

## Hogar
- GET /api/Hogar/FindOrSyncProsoli
- GET /api/Hogar/GetSubsidiosProsoli
- GET /api/Hogar/{codigo}/subsidios
- GET /api/Hogar/alertas/sync
- GET /api/Hogar/SyncHogarDividido
- GET /api/Hogar
- POST /api/Hogar — Creates a record.
- GET /api/Hogar/odata — Get all by query options.
- GET /api/Hogar/{id} — Get a specific record by id.
- PUT /api/Hogar/{id} — Updates a record.
- DELETE /api/Hogar/{id} — Deletes a specific record by id.
- GET /api/Hogar/ExportCsv

## HogarAlerta
- GET /api/HogarAlerta/FindOrSyncProsoli
- GET /api/HogarAlerta/FindAndSyncProsoli
- GET /api/HogarAlerta
- POST /api/HogarAlerta — Creates a record.
- GET /api/HogarAlerta/odata — Get all by query options.
- GET /api/HogarAlerta/{id} — Get a specific record by id.
- PUT /api/HogarAlerta/{id} — Updates a record.
- DELETE /api/HogarAlerta/{id} — Deletes a specific record by id.
- GET /api/HogarAlerta/ExportCsv

## HogarObservacion
- GET /api/HogarObservacion/FindOrSyncProsoli
- GET /api/HogarObservacion/FindAndSyncProsoli
- GET /api/HogarObservacion
- POST /api/HogarObservacion — Creates a record.
- GET /api/HogarObservacion/odata — Get all by query options.
- GET /api/HogarObservacion/{id} — Get a specific record by id.
- PUT /api/HogarObservacion/{id} — Updates a record.
- DELETE /api/HogarObservacion/{id} — Deletes a specific record by id.
- GET /api/HogarObservacion/ExportCsv

## HogarSancion
- GET /api/HogarSancion/FindOrSyncProsoli
- GET /api/HogarSancion/FindAndSyncProsoli
- GET /api/HogarSancion
- POST /api/HogarSancion — Creates a record.
- GET /api/HogarSancion/odata — Get all by query options.
- GET /api/HogarSancion/{id} — Get a specific record by id.
- PUT /api/HogarSancion/{id} — Updates a record.
- DELETE /api/HogarSancion/{id} — Deletes a specific record by id.
- GET /api/HogarSancion/ExportCsv

## HogarSuspension
- GET /api/HogarSuspension/FindOrSyncProsoli
- GET /api/HogarSuspension/FindAndSyncProsoli
- GET /api/HogarSuspension
- POST /api/HogarSuspension — Creates a record.
- GET /api/HogarSuspension/odata — Get all by query options.
- GET /api/HogarSuspension/{id} — Get a specific record by id.
- PUT /api/HogarSuspension/{id} — Updates a record.
- DELETE /api/HogarSuspension/{id} — Deletes a specific record by id.
- GET /api/HogarSuspension/ExportCsv

## InfraestructuraRc
- GET /api/InfraestructuraRc
- POST /api/InfraestructuraRc — Creates a record.
- GET /api/InfraestructuraRc/odata — Get all by query options.
- GET /api/InfraestructuraRc/{id} — Get a specific record by id.
- PUT /api/InfraestructuraRc/{id} — Updates a record.
- DELETE /api/InfraestructuraRc/{id} — Deletes a specific record by id.
- GET /api/InfraestructuraRc/ExportCsv

## Institucion
- GET /api/Institucion
- POST /api/Institucion — Creates a record.
- GET /api/Institucion/odata — Get all by query options.
- GET /api/Institucion/{id} — Get a specific record by id.
- PUT /api/Institucion/{id} — Updates a record.
- DELETE /api/Institucion/{id} — Deletes a specific record by id.
- GET /api/Institucion/ExportCsv

## InstitucionRc
- GET /api/InstitucionRc
- POST /api/InstitucionRc — Creates a record.
- GET /api/InstitucionRc/odata — Get all by query options.
- GET /api/InstitucionRc/{id} — Get a specific record by id.
- PUT /api/InstitucionRc/{id} — Updates a record.
- DELETE /api/InstitucionRc/{id} — Deletes a specific record by id.
- GET /api/InstitucionRc/ExportCsv

## JefeHogarAntiguo
- GET /api/JefeHogarAntiguo
- POST /api/JefeHogarAntiguo — Creates a record.
- GET /api/JefeHogarAntiguo/odata — Get all by query options.
- GET /api/JefeHogarAntiguo/{id} — Get a specific record by id.
- PUT /api/JefeHogarAntiguo/{id} — Updates a record.
- DELETE /api/JefeHogarAntiguo/{id} — Deletes a specific record by id.
- GET /api/JefeHogarAntiguo/ExportCsv

## Miembro
- GET /api/Miembro/GetAllOrSync
- GET /api/Miembro
- POST /api/Miembro — Creates a record.
- GET /api/Miembro/odata — Get all by query options.
- GET /api/Miembro/{id} — Get a specific record by id.
- PUT /api/Miembro/{id} — Updates a record.
- DELETE /api/Miembro/{id} — Deletes a specific record by id.
- GET /api/Miembro/ExportCsv

## MiembroExclusion
- GET /api/MiembroExclusion
- POST /api/MiembroExclusion — Creates a record.
- GET /api/MiembroExclusion/odata — Get all by query options.
- GET /api/MiembroExclusion/{id} — Get a specific record by id.
- PUT /api/MiembroExclusion/{id} — Updates a record.
- DELETE /api/MiembroExclusion/{id} — Deletes a specific record by id.
- GET /api/MiembroExclusion/ExportCsv

## MiembroSiuben
- GET /api/MiembroSiuben
- POST /api/MiembroSiuben — Creates a record.
- GET /api/MiembroSiuben/odata — Get all by query options.
- GET /api/MiembroSiuben/{id} — Get a specific record by id.
- PUT /api/MiembroSiuben/{id} — Updates a record.
- DELETE /api/MiembroSiuben/{id} — Deletes a specific record by id.
- GET /api/MiembroSiuben/ExportCsv

## Monitoreo
- GET /api/Monitoreo/ciudadanos/{cedula} — GetCiudadanoMonitoreo: Obtiene datos de un ciudadano por cédula.
- POST /api/Monitoreo/ciudadanos — Crea o actualiza datos básicos de monitoreo de una persona (upsert por cédula).

## Municipio
- GET /api/Municipio/GetByCodProvincia
- GET /api/Municipio
- POST /api/Municipio — Creates a record.
- GET /api/Municipio/odata — Get all by query options.
- GET /api/Municipio/{id} — Get a specific record by id.
- PUT /api/Municipio/{id} — Updates a record.
- DELETE /api/Municipio/{id} — Deletes a specific record by id.
- GET /api/Municipio/ExportCsv

## NameValues
- GET /api/NameValues/GetNameValueByCode/{code}
- GET /api/NameValues/{code}/children
- GET /api/NameValues/{code}/children/{excludeCode}/exclude
- GET /api/NameValues/{code}/children/{excludeCode}/excludes
- GET /api/NameValues/{parentCode}/child/{childCode}
- GET /api/NameValues/GetEstadosParaCreacionCaso
- GET /api/NameValues/GetEstadosParaDarRespuesta
- GET /api/NameValues/GetMecanismoRespuestaCiudadano/{puntoEntrada}
- GET /api/NameValues
- POST /api/NameValues — Creates a record.
- GET /api/NameValues/odata — Get all by query options.
- GET /api/NameValues/{id} — Get a specific record by id.
- PUT /api/NameValues/{id} — Updates a record.
- DELETE /api/NameValues/{id} — Deletes a specific record by id.
- GET /api/NameValues/ExportCsv

## Nomina
- GET /api/Nomina/GetAllMovimientosTarjeta
- GET /api/Nomina
- POST /api/Nomina — Creates a record.
- GET /api/Nomina/odata — Get all by query options.
- GET /api/Nomina/{id} — Get a specific record by id.
- PUT /api/Nomina/{id} — Updates a record.
- DELETE /api/Nomina/{id} — Deletes a specific record by id.
- GET /api/Nomina/ExportCsv

## Notificacion
- GET /api/Notificacion/{id} — Get a specific record by id.
- PUT /api/Notificacion/{id} — Updates a record.
- DELETE /api/Notificacion/{id} — Deletes a specific record by id.
- GET /api/Notificacion/LastNotifications
- GET /api/Notificacion/NotificationsReceived
- GET /api/Notificacion/NotificationsReceivedByQuantity/{quantity}/{msgLeidos}/{msgNoLeidos}
- GET /api/Notificacion/GetNotificationsReceivedTotalCount
- GET /api/Notificacion/GetNotificationsSendedTotalCount
- GET /api/Notificacion/NotificationsSended/{quantity}
- GET /api/Notificacion/NotificationsSended
- PUT /api/Notificacion/SetNotificationAsRead/{id}
- GET /api/Notificacion/GetNotificationsReaded/{criteria}
- GET /api/Notificacion/GetNotificationsUnread/{criteria}
- GET /api/Notificacion
- POST /api/Notificacion — Creates a record.
- GET /api/Notificacion/odata — Get all by query options.
- GET /api/Notificacion/ExportCsv

## NumericConfig
- GET /api/NumericConfig/GetByDocumentType/{docType}
- GET /api/NumericConfig
- POST /api/NumericConfig — Creates a record.
- GET /api/NumericConfig/odata — Get all by query options.
- GET /api/NumericConfig/{id} — Get a specific record by id.
- PUT /api/NumericConfig/{id} — Updates a record.
- DELETE /api/NumericConfig/{id} — Deletes a specific record by id.
- GET /api/NumericConfig/ExportCsv

## Oficina
- GET /api/Oficina
- POST /api/Oficina
- GET /api/Oficina/ExportCsv
- GET /api/Oficina/odata — Get all by query options.
- GET /api/Oficina/{id} — Get a specific record by id.
- PUT /api/Oficina/{id} — Updates a record.
- DELETE /api/Oficina/{id} — Deletes a specific record by id.

## Permission
- GET /api/Permission/group/category
- GET /api/Permission
- POST /api/Permission — Creates a record.
- GET /api/Permission/odata — Get all by query options.
- GET /api/Permission/{id} — Get a specific record by id.
- PUT /api/Permission/{id} — Updates a record.
- DELETE /api/Permission/{id} — Deletes a specific record by id.
- GET /api/Permission/ExportCsv

## PersonaCorreo
- GET /api/PersonaCorreo
- POST /api/PersonaCorreo
- GET /api/PersonaCorreo/odata
- GET /api/PersonaCorreo/ExportCsv
- GET /api/PersonaCorreo/{id}
- PUT /api/PersonaCorreo/{id}
- DELETE /api/PersonaCorreo/{id}

## PersonaDireccion
- GET /api/PersonaDireccion
- POST /api/PersonaDireccion
- GET /api/PersonaDireccion/odata
- GET /api/PersonaDireccion/ExportCsv
- GET /api/PersonaDireccion/{id}
- PUT /api/PersonaDireccion/{id}
- DELETE /api/PersonaDireccion/{id}

## PersonaTelefono
- GET /api/PersonaTelefono
- POST /api/PersonaTelefono
- GET /api/PersonaTelefono/odata
- GET /api/PersonaTelefono/ExportCsv
- GET /api/PersonaTelefono/{id}
- PUT /api/PersonaTelefono/{id}
- DELETE /api/PersonaTelefono/{id}
- GET /api/PersonaTelefono/GetByPersonaId/{id}
- GET /api/PersonaTelefono/GetTelefonosFecha — Obtiene los telefonos creados o actualizados despues de una fecha.
- GET /api/v{version}/PersonaTelefono/GetTelefonosFecha — Obtiene los telefonos creados o actualizados despues de una fecha.

## Personas
- GET /api/Personas/FindOrSyncJCE
- GET /api/Personas/GetFullInfo
- GET /api/Personas/Test/{id}
- GET /api/Personas
- POST /api/Personas
- GET /api/Personas/odata — Get all by query options.
- GET /api/Personas/{id} — Get a specific record by id.
- PUT /api/Personas/{id} — Updates a record.
- DELETE /api/Personas/{id} — Deletes a specific record by id.
- GET /api/Personas/ExportCsv

## ProfileAttribute
- GET /api/ProfileAttribute
- POST /api/ProfileAttribute — Creates a record.
- GET /api/ProfileAttribute/odata — Get all by query options.
- GET /api/ProfileAttribute/{id} — Get a specific record by id.
- PUT /api/ProfileAttribute/{id} — Updates a record.
- DELETE /api/ProfileAttribute/{id} — Deletes a specific record by id.
- GET /api/ProfileAttribute/ExportCsv

## Provincia
- GET /api/Provincia/GetByCodRegion
- GET /api/Provincia
- POST /api/Provincia — Creates a record.
- GET /api/Provincia/odata — Get all by query options.
- GET /api/Provincia/{id} — Get a specific record by id.
- PUT /api/Provincia/{id} — Updates a record.
- DELETE /api/Provincia/{id} — Deletes a specific record by id.
- GET /api/Provincia/ExportCsv

## PsInfoForoPost
- GET /api/PsInfoForoPost
- POST /api/PsInfoForoPost
- PUT /api/PsInfoForoPost/{id}
- DELETE /api/PsInfoForoPost/{id}
- GET /api/PsInfoForoPost/GetForoPost/{actividadId}

## PsInfoForoTopic
- GET /api/PsInfoForoTopic
- POST /api/PsInfoForoTopic
- PUT /api/PsInfoForoTopic/{id}
- DELETE /api/PsInfoForoTopic/{id}

## Region
- GET /api/Region
- POST /api/Region — Creates a record.
- GET /api/Region/odata — Get all by query options.
- GET /api/Region/{id} — Get a specific record by id.
- PUT /api/Region/{id} — Updates a record.
- DELETE /api/Region/{id} — Deletes a specific record by id.
- GET /api/Region/ExportCsv

## Role
- GET /api/Role
- POST /api/Role
- GET /api/Role/{id} — Get a specific record by id.
- PUT /api/Role/{id}
- DELETE /api/Role/{id} — Deletes a specific record by id.
- GET /api/Role/odata — Get all by query options.
- GET /api/Role/ExportCsv

## Seccion
- GET /api/Seccion/GetByCodDistritoMunicipal
- GET /api/Seccion
- POST /api/Seccion — Creates a record.
- GET /api/Seccion/odata — Get all by query options.
- GET /api/Seccion/{id} — Get a specific record by id.
- PUT /api/Seccion/{id} — Updates a record.
- DELETE /api/Seccion/{id} — Deletes a specific record by id.
- GET /api/Seccion/ExportCsv

## Section
- GET /api/Section
- POST /api/Section — Creates a record.
- GET /api/Section/odata — Get all by query options.
- GET /api/Section/{id} — Get a specific record by id.
- PUT /api/Section/{id} — Updates a record.
- DELETE /api/Section/{id} — Deletes a specific record by id.
- GET /api/Section/ExportCsv

## ServicioRc
- GET /api/ServicioRc
- POST /api/ServicioRc — Creates a record.
- GET /api/ServicioRc/odata — Get all by query options.
- GET /api/ServicioRc/{id} — Get a specific record by id.
- PUT /api/ServicioRc/{id} — Updates a record.
- DELETE /api/ServicioRc/{id} — Deletes a specific record by id.
- GET /api/ServicioRc/ExportCsv

## SituacionRc
- GET /api/SituacionRc
- POST /api/SituacionRc — Creates a record.
- GET /api/SituacionRc/odata — Get all by query options.
- GET /api/SituacionRc/{id} — Get a specific record by id.
- PUT /api/SituacionRc/{id} — Updates a record.
- DELETE /api/SituacionRc/{id} — Deletes a specific record by id.
- GET /api/SituacionRc/ExportCsv

## SolicitudCambioComposicionFamiliarCorreccion
- GET /api/SolicitudCambioComposicionFamiliarCorreccion
- POST /api/SolicitudCambioComposicionFamiliarCorreccion
- GET /api/SolicitudCambioComposicionFamiliarCorreccion/odata
- GET /api/SolicitudCambioComposicionFamiliarCorreccion/{id}
- PUT /api/SolicitudCambioComposicionFamiliarCorreccion/{id}
- DELETE /api/SolicitudCambioComposicionFamiliarCorreccion/{id}
- GET /api/SolicitudCambioComposicionFamiliarCorreccion/ExportCsv

## SolicitudCambioComposicionFamiliarDocumento
- GET /api/SolicitudCambioComposicionFamiliarDocumento
- POST /api/SolicitudCambioComposicionFamiliarDocumento
- GET /api/SolicitudCambioComposicionFamiliarDocumento/odata
- GET /api/SolicitudCambioComposicionFamiliarDocumento/{id}
- PUT /api/SolicitudCambioComposicionFamiliarDocumento/{id}
- DELETE /api/SolicitudCambioComposicionFamiliarDocumento/{id}
- GET /api/SolicitudCambioComposicionFamiliarDocumento/ExportCsv

## SolicitudCambioComposicionFamiliarExclusion
- GET /api/SolicitudCambioComposicionFamiliarExclusion
- POST /api/SolicitudCambioComposicionFamiliarExclusion
- GET /api/SolicitudCambioComposicionFamiliarExclusion/odata
- GET /api/SolicitudCambioComposicionFamiliarExclusion/{id}
- PUT /api/SolicitudCambioComposicionFamiliarExclusion/{id}
- DELETE /api/SolicitudCambioComposicionFamiliarExclusion/{id}
- GET /api/SolicitudCambioComposicionFamiliarExclusion/ExportCsv

## SolicitudCambioComposicionFamiliarInclusion
- GET /api/SolicitudCambioComposicionFamiliarInclusion
- POST /api/SolicitudCambioComposicionFamiliarInclusion
- GET /api/SolicitudCambioComposicionFamiliarInclusion/odata
- GET /api/SolicitudCambioComposicionFamiliarInclusion/{id}
- PUT /api/SolicitudCambioComposicionFamiliarInclusion/{id}
- DELETE /api/SolicitudCambioComposicionFamiliarInclusion/{id}
- GET /api/SolicitudCambioComposicionFamiliarInclusion/ExportCsv

## SolicitudEvaluacionHogarMiembro
- GET /api/SolicitudEvaluacionHogarMiembro
- POST /api/SolicitudEvaluacionHogarMiembro
- GET /api/SolicitudEvaluacionHogarMiembro/odata
- GET /api/SolicitudEvaluacionHogarMiembro/{id}
- PUT /api/SolicitudEvaluacionHogarMiembro/{id}
- DELETE /api/SolicitudEvaluacionHogarMiembro/{id}
- GET /api/SolicitudEvaluacionHogarMiembro/ExportCsv

## SolicitudEvaluacionHogarMiembroDocumento
- GET /api/SolicitudEvaluacionHogarMiembroDocumento
- POST /api/SolicitudEvaluacionHogarMiembroDocumento
- GET /api/SolicitudEvaluacionHogarMiembroDocumento/odata
- GET /api/SolicitudEvaluacionHogarMiembroDocumento/{id}
- PUT /api/SolicitudEvaluacionHogarMiembroDocumento/{id}
- DELETE /api/SolicitudEvaluacionHogarMiembroDocumento/{id}
- GET /api/SolicitudEvaluacionHogarMiembroDocumento/ExportCsv

## SolicitudReemplazoPorCorreccionDocumento
- GET /api/SolicitudReemplazoPorCorreccionDocumento
- POST /api/SolicitudReemplazoPorCorreccionDocumento — Creates a record.
- GET /api/SolicitudReemplazoPorCorreccionDocumento/odata — Get all by query options.
- GET /api/SolicitudReemplazoPorCorreccionDocumento/{id} — Get a specific record by id.
- PUT /api/SolicitudReemplazoPorCorreccionDocumento/{id} — Updates a record.
- DELETE /api/SolicitudReemplazoPorCorreccionDocumento/{id} — Deletes a specific record by id.
- GET /api/SolicitudReemplazoPorCorreccionDocumento/ExportCsv

## SolicitudUsuario
- GET /api/SolicitudUsuario
- POST /api/SolicitudUsuario
- POST /api/SolicitudUsuario/SaveAndSend
- GET /api/SolicitudUsuario/{id} — Get a specific record by id.
- PUT /api/SolicitudUsuario/{id}
- DELETE /api/SolicitudUsuario/{id} — Deletes a specific record by id.
- PUT /api/SolicitudUsuario/UpdateAndSend/{id}
- PUT /api/SolicitudUsuario/SendRequest/{id}
- PUT /api/SolicitudUsuario/DenyRequest/{id}
- PUT /api/SolicitudUsuario/AcceptRequest/{id}
- GET /api/SolicitudUsuario/odata — Get all by query options.
- GET /api/SolicitudUsuario/ExportCsv

## Tarjeta
- GET /api/Tarjeta/SyncOrGetAllMovimientosTarjeta
- GET /api/Tarjeta/movimientos
- GET /api/Tarjeta
- POST /api/Tarjeta — Creates a record.
- GET /api/Tarjeta/odata — Get all by query options.
- GET /api/Tarjeta/{id} — Get a specific record by id.
- PUT /api/Tarjeta/{id} — Updates a record.
- DELETE /api/Tarjeta/{id} — Deletes a specific record by id.
- GET /api/Tarjeta/ExportCsv

## Telefono
- GET /api/Telefono
- POST /api/Telefono
- GET /api/Telefono/odata — Get all by query options.
- GET /api/Telefono/{id} — Get a specific record by id.
- PUT /api/Telefono/{id} — Updates a record.
- DELETE /api/Telefono/{id} — Deletes a specific record by id.
- GET /api/Telefono/ExportCsv

## TestProfile
- GET /api/TestProfile/v2/{cedu}
- GET /api/TestProfile/datosHogas
- GET /api/TestProfile/direccionHogar
- GET /api/TestProfile/list/consultas
- GET /api/TestProfile/list/nominas
- GET /api/TestProfile/{cedu}
- GET /api/TestProfile/list/a
- GET /api/TestProfile/parameter/ctr

## TipoDocumento
- GET /api/TipoDocumento
- POST /api/TipoDocumento — Creates a record.
- GET /api/TipoDocumento/odata — Get all by query options.
- GET /api/TipoDocumento/{id} — Get a specific record by id.
- PUT /api/TipoDocumento/{id} — Updates a record.
- DELETE /api/TipoDocumento/{id} — Deletes a specific record by id.
- GET /api/TipoDocumento/ExportCsv

## TipoTramite
- GET /api/TipoTramite/GetAllByDisponibilidadCiudadano/{personaId}
- GET /api/TipoTramite
- POST /api/TipoTramite — Creates a record.
- GET /api/TipoTramite/odata — Get all by query options.
- GET /api/TipoTramite/{id} — Get a specific record by id.
- PUT /api/TipoTramite/{id} — Updates a record.
- DELETE /api/TipoTramite/{id} — Deletes a specific record by id.
- GET /api/TipoTramite/ExportCsv

## TipoTramiteCreacionEstado
- GET /api/TipoTramiteCreacionEstado/GetByTipoTramiteId/{id}
- GET /api/TipoTramiteCreacionEstado
- POST /api/TipoTramiteCreacionEstado — Creates a record.
- GET /api/TipoTramiteCreacionEstado/odata — Get all by query options.
- GET /api/TipoTramiteCreacionEstado/{id} — Get a specific record by id.
- PUT /api/TipoTramiteCreacionEstado/{id} — Updates a record.
- DELETE /api/TipoTramiteCreacionEstado/{id} — Deletes a specific record by id.
- GET /api/TipoTramiteCreacionEstado/ExportCsv

## TipoTramiteDocumento
- GET /api/TipoTramiteDocumento
- POST /api/TipoTramiteDocumento — Creates a record.
- GET /api/TipoTramiteDocumento/odata — Get all by query options.
- GET /api/TipoTramiteDocumento/{id} — Get a specific record by id.
- PUT /api/TipoTramiteDocumento/{id} — Updates a record.
- DELETE /api/TipoTramiteDocumento/{id} — Deletes a specific record by id.
- GET /api/TipoTramiteDocumento/ExportCsv

## TipoTramiteNameValueDocumento
- GET /api/TipoTramiteNameValueDocumento
- POST /api/TipoTramiteNameValueDocumento — Creates a record.
- GET /api/TipoTramiteNameValueDocumento/odata — Get all by query options.
- GET /api/TipoTramiteNameValueDocumento/{id} — Get a specific record by id.
- PUT /api/TipoTramiteNameValueDocumento/{id} — Updates a record.
- DELETE /api/TipoTramiteNameValueDocumento/{id} — Deletes a specific record by id.
- GET /api/TipoTramiteNameValueDocumento/ExportCsv

## TipoTramiteNota
- GET /api/TipoTramiteNota
- POST /api/TipoTramiteNota — Creates a record.
- GET /api/TipoTramiteNota/odata — Get all by query options.
- GET /api/TipoTramiteNota/{id} — Get a specific record by id.
- PUT /api/TipoTramiteNota/{id} — Updates a record.
- DELETE /api/TipoTramiteNota/{id} — Deletes a specific record by id.
- GET /api/TipoTramiteNota/ExportCsv

## TipoTramitePaso
- GET /api/TipoTramitePaso
- POST /api/TipoTramitePaso — Creates a record.
- GET /api/TipoTramitePaso/odata — Get all by query options.
- GET /api/TipoTramitePaso/{id} — Get a specific record by id.
- PUT /api/TipoTramitePaso/{id} — Updates a record.
- DELETE /api/TipoTramitePaso/{id} — Deletes a specific record by id.
- GET /api/TipoTramitePaso/ExportCsv

## TramiteAplicacionNomina
- GET /api/TramiteAplicacionNomina
- POST /api/TramiteAplicacionNomina — Creates a record.
- GET /api/TramiteAplicacionNomina/odata — Get all by query options.
- GET /api/TramiteAplicacionNomina/{id} — Get a specific record by id.
- PUT /api/TramiteAplicacionNomina/{id} — Updates a record.
- DELETE /api/TramiteAplicacionNomina/{id} — Deletes a specific record by id.
- GET /api/TramiteAplicacionNomina/ExportCsv

## TramiteBeneficiario
- GET /api/TramiteBeneficiario
- POST /api/TramiteBeneficiario
- POST /api/TramiteBeneficiario/psonline
- GET /api/TramiteBeneficiario/{id}
- PUT /api/TramiteBeneficiario/{id}
- DELETE /api/TramiteBeneficiario/{id}
- GET /api/TramiteBeneficiario/me
- GET /api/TramiteBeneficiario/meSF
- GET /api/TramiteBeneficiario/consulta/documentos
- GET /api/TramiteBeneficiario/GetLastReevaluacion/{personaId}
- GET /api/TramiteBeneficiario/GetLastEvaluacion/{personaId}
- GET /api/TramiteBeneficiario/Consulta
- GET /api/TramiteBeneficiario/consulta-perfil-ciudadano
- POST /api/TramiteBeneficiario/senasa/solicitud/afiliacion/titular
- POST /api/TramiteBeneficiario/senasa/solicitud/afiliacion/dependiente
- GET /api/TramiteBeneficiario/Comprobante/{id}
- GET /api/TramiteBeneficiario/ObtenerTramitesPorFecha/{fecha}
- GET /api/TramiteBeneficiario/GetSolicitudesEvaluacionHogarFecha — Obtiene las solicitudes de evaluación de hogar creadas después de una fecha y hora específica.
- GET /api/v{version}/TramiteBeneficiario/GetSolicitudesEvaluacionHogarFecha — Obtiene las solicitudes de evaluación de hogar creadas después de una fecha y hora específica.
- GET /api/TramiteBeneficiario/GetSolicitudesEvaluacionRechazoFecha
- GET /api/v{version}/TramiteBeneficiario/GetSolicitudesEvaluacionRechazoFecha
- GET /api/TramiteBeneficiario/GetSolicitudesEvaluacionHogarTelefonoActualizadoFecha — Obtiene evaluaciones de hogar con telefonos personales actualizados despues de una fecha.
- GET /api/TramiteBeneficiario/odata
- GET /api/TramiteBeneficiario/ExportCsv

## TramiteBeneficiarioDocumento
- GET /api/TramiteBeneficiarioDocumento/{id}
- PUT /api/TramiteBeneficiarioDocumento/{id}
- DELETE /api/TramiteBeneficiarioDocumento/{id}
- GET /api/TramiteBeneficiarioDocumento
- POST /api/TramiteBeneficiarioDocumento
- GET /api/TramiteBeneficiarioDocumento/odata
- GET /api/TramiteBeneficiarioDocumento/ExportCsv

## TramiteBeneficiarioNotification
- PUT /api/TramiteBeneficiarioNotification/MarkAsRead/{id}
- GET /api/TramiteBeneficiarioNotification/LastNotifications
- GET /api/TramiteBeneficiarioNotification/LastCommentsNotifications
- GET /api/TramiteBeneficiarioNotification
- POST /api/TramiteBeneficiarioNotification — Creates a record.
- GET /api/TramiteBeneficiarioNotification/odata — Get all by query options.
- GET /api/TramiteBeneficiarioNotification/{id} — Get a specific record by id.
- PUT /api/TramiteBeneficiarioNotification/{id} — Updates a record.
- DELETE /api/TramiteBeneficiarioNotification/{id} — Deletes a specific record by id.
- GET /api/TramiteBeneficiarioNotification/ExportCsv

## TramiteBeneficiarioResumen
- GET /api/TramiteBeneficiarioResumen/GetTramiteDireccionId
- GET /api/TramiteBeneficiarioResumen/GetCambioJefe
- GET /api/TramiteBeneficiarioResumen/GetActualizacionPerfil
- GET /api/TramiteBeneficiarioResumen/GetCasoExtraordinario
- GET /api/TramiteBeneficiarioResumen/GetSolicitudRc
- GET /api/TramiteBeneficiarioResumen/GetSolicitudEvaluacionHogar
- GET /api/TramiteBeneficiarioResumen/GetLiberacion
- GET /api/TramiteBeneficiarioResumen/GetSolicitudReemplazo
- GET /api/TramiteBeneficiarioResumen/GetSolicitudReemplazoPorCorreccion
- GET /api/TramiteBeneficiarioResumen
- POST /api/TramiteBeneficiarioResumen
- GET /api/TramiteBeneficiarioResumen/odata
- GET /api/TramiteBeneficiarioResumen/{id}
- PUT /api/TramiteBeneficiarioResumen/{id}
- DELETE /api/TramiteBeneficiarioResumen/{id}
- GET /api/TramiteBeneficiarioResumen/ExportCsv

## TramiteLiberacionDocumento
- GET /api/TramiteLiberacionDocumento
- POST /api/TramiteLiberacionDocumento
- GET /api/TramiteLiberacionDocumento/odata
- GET /api/TramiteLiberacionDocumento/{id}
- PUT /api/TramiteLiberacionDocumento/{id}
- DELETE /api/TramiteLiberacionDocumento/{id}
- GET /api/TramiteLiberacionDocumento/ExportCsv

## TramiteNovedad
- GET /api/TramiteNovedad/consulta-resumen
- POST /api/TramiteNovedad/registrar
- POST /api/v{version}/TramiteNovedad/registrar
- GET /api/TramiteNovedad/RegistroManual
- POST /api/TramiteNovedad/RegistrarNumeroSolicitud
- POST /api/v{version}/TramiteNovedad/RegistrarNumeroSolicitud
- POST /api/TramiteNovedad/cambiar-estado
- POST /api/TramiteNovedad/RechazarTramiteNUT
- GET /api/TramiteNovedad
- POST /api/TramiteNovedad — Creates a record.
- GET /api/TramiteNovedad/odata — Get all by query options.
- GET /api/TramiteNovedad/{id} — Get a specific record by id.
- PUT /api/TramiteNovedad/{id} — Updates a record.
- DELETE /api/TramiteNovedad/{id} — Deletes a specific record by id.
- GET /api/TramiteNovedad/ExportCsv

## TramiteNovedadDocumento
- GET /api/TramiteNovedadDocumento
- POST /api/TramiteNovedadDocumento — Creates a record.
- GET /api/TramiteNovedadDocumento/odata — Get all by query options.
- GET /api/TramiteNovedadDocumento/{id} — Get a specific record by id.
- PUT /api/TramiteNovedadDocumento/{id} — Updates a record.
- DELETE /api/TramiteNovedadDocumento/{id} — Deletes a specific record by id.
- GET /api/TramiteNovedadDocumento/ExportCsv

## TramiteTransaccionNoAutorizada
- GET /api/TramiteTransaccionNoAutorizada
- POST /api/TramiteTransaccionNoAutorizada — Creates a record.
- GET /api/TramiteTransaccionNoAutorizada/odata — Get all by query options.
- GET /api/TramiteTransaccionNoAutorizada/{id} — Get a specific record by id.
- PUT /api/TramiteTransaccionNoAutorizada/{id} — Updates a record.
- DELETE /api/TramiteTransaccionNoAutorizada/{id} — Deletes a specific record by id.
- GET /api/TramiteTransaccionNoAutorizada/ExportCsv

## Transaccion
- GET /api/Transaccion/GetAllMovimientosTarjeta
- GET /api/Transaccion
- POST /api/Transaccion — Creates a record.
- GET /api/Transaccion/odata — Get all by query options.
- GET /api/Transaccion/{id} — Get a specific record by id.
- PUT /api/Transaccion/{id} — Updates a record.
- DELETE /api/Transaccion/{id} — Deletes a specific record by id.
- GET /api/Transaccion/ExportCsv

## UserSession
- GET /api/UserSession/Psweb
- GET /api/UserSession/Actives
- POST /api/UserSession/ActivateUserSession
- POST /api/UserSession/DeactivateUserSession
- GET /api/UserSession
- POST /api/UserSession — Creates a record.
- GET /api/UserSession/odata — Get all by query options.
- GET /api/UserSession/{id} — Get a specific record by id.
- PUT /api/UserSession/{id} — Updates a record.
- DELETE /api/UserSession/{id} — Deletes a specific record by id.
- GET /api/UserSession/ExportCsv

## Usuario
- GET /api/Usuario
- POST /api/Usuario
- GET /api/Usuario/odata
- GET /api/Usuario/ExportCsv
- GET /api/Usuario/{id} — Get a specific record by id.
- PUT /api/Usuario/{id}
- DELETE /api/Usuario/{id}
- GET /api/Usuario/GetByUserName/{username}
- POST /api/Usuario/CreateAccountUserOnline
- GET /api/Usuario/{id}/permissions/group/category
- GET /api/Usuario/{id}/roles
- GET /api/Usuario/GetAllByRoles
- POST /api/Usuario/attach/role
- DELETE /api/Usuario/quit/role/{id}
- DELETE /api/Usuario/quit/{userId}/role/{id}
- PUT /api/Usuario/ChangePassword
- POST /api/Usuario/{userID}/upload
- PUT /api/Usuario/Disable/{id}
- PUT /api/Usuario/Enable/{id}
- GET /api/Usuario/{userName}/available
