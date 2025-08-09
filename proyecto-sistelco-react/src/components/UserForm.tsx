import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, User, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { tiposSolicitud, tiposDetallados, mediosAtencion, relacionesEmpresa } from '../data/dataSISTELCO';

interface FormData {
  fechaDiligenciamiento: string;
  nombresApellidos: string;
  numeroContacto: string;
  correoElectronico: string;
  tipoSolicitud: string;
  tipoDetallado: string;
  medioAtencion: string;
  relacionEmpresa: string;
  descripcionDetallada: string;
}

interface FormErrors {
  [key: string]: string;
}

const PQR: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fechaDiligenciamiento: new Date().toISOString().split('T')[0],
    nombresApellidos: '',
    numeroContacto: '',
    correoElectronico: '',
    tipoSolicitud: '',
    tipoDetallado: '',
    medioAtencion: '',
    relacionEmpresa: '',
    descripcionDetallada: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombresApellidos.trim()) {
      newErrors.nombresApellidos = 'Nombres y apellidos son requeridos';
    }

    if (!formData.numeroContacto.trim()) {
      newErrors.numeroContacto = 'Número de contacto es requerido';
    } else if (!/^\+?[\d\s-()]{7,15}$/.test(formData.numeroContacto.trim())) {
      newErrors.numeroContacto = 'Número de contacto inválido';
    }

    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'Correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico.trim())) {
      newErrors.correoElectronico = 'Correo electrónico inválido';
    }

    if (!formData.tipoSolicitud) {
      newErrors.tipoSolicitud = 'Debe seleccionar el tipo de solicitud';
    }

    if (!formData.tipoDetallado) {
      newErrors.tipoDetallado = 'Debe seleccionar el tipo detallado';
    }

    if (!formData.medioAtencion) {
      newErrors.medioAtencion = 'Debe seleccionar el medio de atención';
    }

    if (!formData.relacionEmpresa) {
      newErrors.relacionEmpresa = 'Debe seleccionar su relación con la empresa';
    }

    if (!formData.descripcionDetallada.trim()) {
      newErrors.descripcionDetallada = 'Debe proporcionar una descripción detallada';
    } else if (formData.descripcionDetallada.trim().length < 20) {
      newErrors.descripcionDetallada = 'La descripción debe tener al menos 20 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateEmailContent = (): string => {
    const tipoSolicitudLabel = tiposSolicitud.find(t => t.value === formData.tipoSolicitud)?.label || formData.tipoSolicitud;
    const tipoDetalladoLabel = tiposDetallados.find(t => t.value === formData.tipoDetallado)?.label || formData.tipoDetallado;
    const medioAtencionLabel = mediosAtencion.find(m => m.value === formData.medioAtencion)?.label || formData.medioAtencion;
    const relacionEmpresaLabel = relacionesEmpresa.find(r => r.value === formData.relacionEmpresa)?.label || formData.relacionEmpresa;

    return `
PRESENTACIÓN DE PETICIONES, QUEJAS O RECLAMOS AÑO 2025
========================================================

INFORMACIÓN DEL SOLICITANTE:
---------------------------
Fecha de Diligenciamiento: ${formData.fechaDiligenciamiento}
Nombres y Apellidos: ${formData.nombresApellidos}
Número de Contacto: ${formData.numeroContacto}
Correo Electrónico: ${formData.correoElectronico}

DETALLES DE LA SOLICITUD:
------------------------
Tipo de Solicitud: ${tipoSolicitudLabel}
Tipo Detallado: ${tipoDetalladoLabel}
Medio de Atención: ${medioAtencionLabel}
Relación con la Empresa: ${relacionEmpresaLabel}

DESCRIPCIÓN DETALLADA:
---------------------
${formData.descripcionDetallada}

========================================================
Formulario enviado desde el sitio web de SISTELCO
Fecha de envío: ${new Date().toLocaleString('es-CO')}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Usar el servicio simple
      const { sendSimplePQR } = await import('../data/emailService');
      
      // Enviar formulario
      const result = await sendSimplePQR(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Limpiar formulario después de 4 segundos
        setTimeout(() => {
          setFormData({
            fechaDiligenciamiento: new Date().toISOString().split('T')[0],
            nombresApellidos: '',
            numeroContacto: '',
            correoElectronico: '',
            tipoSolicitud: '',
            tipoDetallado: '',
            medioAtencion: '',
            relacionEmpresa: '',
            descripcionDetallada: ''
          });
          setSubmitStatus('idle');
        }, 4000);
        
      } else {
        throw new Error(result.message);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  const errorClasses = "border-red-500 focus:ring-red-500";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <section id="PQR" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Presentación de PQR
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Peticiones, Quejas y Reclamos - Año 2025
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 text-left rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-3">RECUERDE QUE...</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Señor usuario, si tiene algún inconveniente con su facturación, terminación y/o modificación del contrato, 
                suspensión, cambio de plan, mensajes de contenidos y aplicaciones, negativa del contrato o cualquier petición 
                asociada a la prestación del servicio, recuerde contactarnos ya que somos el primer canal para darle una solución. 
                Los plazos para dar respuesta a sus PQR están establecidos en un tiempo de hasta 15 días hábiles.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Fecha */}
              <div>
                <label htmlFor="fechaDiligenciamiento" className={labelClasses}>
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Fecha de Diligenciamiento *
                </label>
                <input
                  type="date"
                  id="fechaDiligenciamiento"
                  name="fechaDiligenciamiento"
                  value={formData.fechaDiligenciamiento}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.fechaDiligenciamiento ? errorClasses : ''}`}
                  required
                />
                {errors.fechaDiligenciamiento && (
                  <p className="text-red-500 text-sm mt-1">{errors.fechaDiligenciamiento}</p>
                )}
              </div>

              {/* Nombres y Apellidos */}
              <div>
                <label htmlFor="nombresApellidos" className={labelClasses}>
                  <User className="inline w-4 h-4 mr-2" />
                  Nombres y Apellidos *
                </label>
                <input
                  type="text"
                  id="nombresApellidos"
                  name="nombresApellidos"
                  value={formData.nombresApellidos}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.nombresApellidos ? errorClasses : ''}`}
                  placeholder="Ingrese sus nombres y apellidos completos"
                  required
                />
                {errors.nombresApellidos && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombresApellidos}</p>
                )}
              </div>

              {/* Número de Contacto */}
              <div>
                <label htmlFor="numeroContacto" className={labelClasses}>
                  <Phone className="inline w-4 h-4 mr-2" />
                  Número de Contacto *
                </label>
                <input
                  type="tel"
                  id="numeroContacto"
                  name="numeroContacto"
                  value={formData.numeroContacto}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.numeroContacto ? errorClasses : ''}`}
                  placeholder="Ej: 3001234567 o +57 300 123 4567"
                  required
                />
                {errors.numeroContacto && (
                  <p className="text-red-500 text-sm mt-1">{errors.numeroContacto}</p>
                )}
              </div>

              {/* Correo Electrónico */}
              <div>
                <label htmlFor="correoElectronico" className={labelClasses}>
                  <Mail className="inline w-4 h-4 mr-2" />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.correoElectronico ? errorClasses : ''}`}
                  placeholder="ejemplo@correo.com"
                  required
                />
                {errors.correoElectronico && (
                  <p className="text-red-500 text-sm mt-1">{errors.correoElectronico}</p>
                )}
              </div>

              {/* Tipo de Solicitud */}
              <div>
                <label htmlFor="tipoSolicitud" className={labelClasses}>
                  Tipo de Solicitud *
                </label>
                <select
                  id="tipoSolicitud"
                  name="tipoSolicitud"
                  value={formData.tipoSolicitud}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.tipoSolicitud ? errorClasses : ''}`}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  {tiposSolicitud.map(tipo => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
                {errors.tipoSolicitud && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoSolicitud}</p>
                )}
              </div>

              {/* Tipo Detallado */}
              <div>
                <label htmlFor="tipoDetallado" className={labelClasses}>
                  Tipo Detallado *
                </label>
                <select
                  id="tipoDetallado"
                  name="tipoDetallado"
                  value={formData.tipoDetallado}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.tipoDetallado ? errorClasses : ''}`}
                  required
                >
                  <option value="">Seleccione el tipo específico</option>
                  {tiposDetallados.map(tipo => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
                {errors.tipoDetallado && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoDetallado}</p>
                )}
              </div>

              {/* Medio de Atención */}
              <div>
                <label htmlFor="medioAtencion" className={labelClasses}>
                  Medio de Atención *
                </label>
                <select
                  id="medioAtencion"
                  name="medioAtencion"
                  value={formData.medioAtencion}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.medioAtencion ? errorClasses : ''}`}
                  required
                >
                  <option value="">¿Cuál fue el medio de atención?</option>
                  {mediosAtencion.map(medio => (
                    <option key={medio.value} value={medio.value}>
                      {medio.label}
                    </option>
                  ))}
                </select>
                {errors.medioAtencion && (
                  <p className="text-red-500 text-sm mt-1">{errors.medioAtencion}</p>
                )}
              </div>

              {/* Relación con la Empresa */}
              <div>
                <label htmlFor="relacionEmpresa" className={labelClasses}>
                  Relación con la Empresa *
                </label>
                <select
                  id="relacionEmpresa"
                  name="relacionEmpresa"
                  value={formData.relacionEmpresa}
                  onChange={handleInputChange}
                  className={`${inputClasses} ${errors.relacionEmpresa ? errorClasses : ''}`}
                  required
                >
                  <option value="">Seleccione su relación</option>
                  {relacionesEmpresa.map(relacion => (
                    <option key={relacion.value} value={relacion.value}>
                      {relacion.label}
                    </option>
                  ))}
                </select>
                {errors.relacionEmpresa && (
                  <p className="text-red-500 text-sm mt-1">{errors.relacionEmpresa}</p>
                )}
              </div>
            </div>

            {/* Descripción Detallada */}
            <div className="mt-6">
              <label htmlFor="descripcionDetallada" className={labelClasses}>
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Descripción Detallada *
              </label>
              <textarea
                id="descripcionDetallada"
                name="descripcionDetallada"
                value={formData.descripcionDetallada}
                onChange={handleInputChange}
                rows={6}
                className={`${inputClasses} resize-vertical ${errors.descripcionDetallada ? errorClasses : ''}`}
                placeholder="Describa detalladamente su petición, queja o reclamo. Incluya fechas, números de contrato, nombres de funcionarios y cualquier información relevante que pueda ayudar a resolver su caso."
                required
              />
              <div className="flex justify-between items-center mt-2">
                {errors.descripcionDetallada && (
                  <p className="text-red-500 text-sm">{errors.descripcionDetallada}</p>
                )}
                <p className="text-gray-500 text-sm ml-auto">
                  {formData.descripcionDetallada.length} caracteres (mínimo 20)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Formulario'
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-800 font-semibold">
                    ¡PQR enviada exitosamente!
                  </span>
                </div>
                <p className="text-green-700 text-sm">
                  Hemos recibido su solicitud y le hemos enviado una confirmación por email. 
                  Recibirá una respuesta en un máximo de 15 días hábiles.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-red-800">
                  Hubo un error al enviar el formulario. Por favor, inténtelo nuevamente o contáctenos directamente.
                </span>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default PQR;