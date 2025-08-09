// simpleEmailService.ts - Versión súper simplificada
import { dataSISTELCO } from './dataSISTELCO';

// Tipos básicos
export interface SimpleFormData {
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

export interface SimpleEmailResponse {
  success: boolean;
  message: string;
  ticketNumber?: string;
}

// Generar ticket simple
const generateSimpleTicket = (): string => {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 999).toString().padStart(3, '0');
  return `PQR${date}${random}`;
};

// Crear contenido de email simple
const createEmailContent = (formData: SimpleFormData, ticket: string): string => {
  return `
NUEVA PQR - TICKET: ${ticket}
==============================

DATOS DEL USUARIO:
- Nombre: ${formData.nombresApellidos}
- Teléfono: ${formData.numeroContacto}  
- Email: ${formData.correoElectronico}
- Fecha: ${formData.fechaDiligenciamiento}

TIPO DE SOLICITUD: ${formData.tipoSolicitud.toUpperCase()}
CATEGORÍA: ${formData.tipoDetallado}
MEDIO: ${formData.medioAtencion}
RELACIÓN: ${formData.relacionEmpresa}

DESCRIPCIÓN:
${formData.descripcionDetallada}

==============================
Enviado desde: ${window.location.origin}
Hora: ${new Date().toLocaleString('es-CO')}
  `.trim();
};

// OPCIÓN 1: EmailJS Súper Simple
export const sendWithEmailJS = async (formData: SimpleFormData): Promise<SimpleEmailResponse> => {
  try {
    // Verificar si EmailJS existe
    if (!(window as any).emailjs) {
      throw new Error('EmailJS no configurado');
    }

    const ticket = generateSimpleTicket();
    const emailjs = (window as any).emailjs;

    // Enviar con parámetros mínimos
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',      // Cambiar por tu Service ID
      'YOUR_TEMPLATE_ID',     // Cambiar por tu Template ID  
      {
        to_email: dataSISTELCO.company.contactEmail,
        to_email2: dataSISTELCO.company.pruebaemail,
        from_name: formData.nombresApellidos,
        from_email: formData.correoElectronico,
        subject: `Nueva PQR ${formData.tipoSolicitud} - ${ticket}`,
        message: createEmailContent(formData, ticket)
      },
      'YOUR_PUBLIC_KEY'       // Cambiar por tu Public Key
    );

    if (result.status === 200) {
      return {
        success: true,
        message: 'PQR enviada exitosamente',
        ticketNumber: ticket
      };
    } else {
      throw new Error('Error en EmailJS');
    }

  } catch (error) {
    return {
      success: false,
      message: 'Error al enviar. Inténtelo nuevamente.'
    };
  }
};

// OPCIÓN 2: FormSubmit Súper Simple  
export const sendWithFormSubmit = async (formData: SimpleFormData): Promise<SimpleEmailResponse> => {
  try {
    const ticket = generateSimpleTicket();
    
    // Crear FormData para FormSubmit
    const submitData = new FormData();
    submitData.append('_to', dataSISTELCO.company.pruebaemail);
    submitData.append('_subject', `Nueva PQR ${formData.tipoSolicitud} - ${ticket}`);
    submitData.append('_captcha', 'false');
    submitData.append('_template', 'box');
    
    // Agregar datos del formulario
    submitData.append('Ticket', ticket);
    submitData.append('Nombre', formData.nombresApellidos);
    submitData.append('Teléfono', formData.numeroContacto);
    submitData.append('Email', formData.correoElectronico);
    submitData.append('Tipo', formData.tipoSolicitud);
    submitData.append('Categoría', formData.tipoDetallado);
    submitData.append('Descripción', formData.descripcionDetallada);

    // Enviar a FormSubmit
    const response = await fetch(`https://formsubmit.co/${dataSISTELCO.company.pruebaemail}`, {
      method: 'POST',
      body: submitData
    });

    if (response.ok) {
      return {
        success: true,
        message: 'PQR enviada exitosamente',
        ticketNumber: ticket
      };
    } else {
      throw new Error('Error en FormSubmit');
    }

  } catch (error) {
    return {
      success: false,
      message: 'Error al enviar. Inténtelo nuevamente.'
    };
  }
};

// OPCIÓN 3: Simulado para desarrollo
export const sendSimulated = async (formData: SimpleFormData): Promise<SimpleEmailResponse> => {
  const ticket = generateSimpleTicket();
  
  // Simular delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Log para ver los datos
  console.log('📧 EMAIL SIMULADO:', {
    ticket,
    para: dataSISTELCO.company.pruebaemail,
    de: formData.correoElectronico,
    asunto: `Nueva PQR ${formData.tipoSolicitud} - ${ticket}`,
    contenido: createEmailContent(formData, ticket)
  });

  // 95% éxito, 5% fallo para testing
  if (Math.random() > 0.05) {
    return {
      success: true,
      message: 'PQR enviada exitosamente (simulado)',
      ticketNumber: ticket
    };
  } else {
    return {
      success: false,
      message: 'Error simulado para testing'
    };
  }
};

// FUNCIÓN PRINCIPAL - Súper Simple
export const sendSimplePQR = async (formData: SimpleFormData): Promise<SimpleEmailResponse> => {
  // Si es localhost, usar simulado
  if (window.location.hostname === 'localhost') {
    return await sendSimulated(formData);
  }
  
  // En producción, intentar FormSubmit (más simple)
  return await sendWithFormSubmit(formData);
};