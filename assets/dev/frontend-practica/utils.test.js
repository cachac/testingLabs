import { calculateStatus, formatTime } from './utils.js';

describe('Pruebas unitarias de utils.js', () => {
  
  describe('calculateStatus', () => {
    it('debería retornar "Success" para puntajes de 90 o más', () => {
      expect(calculateStatus(95)).toBe('Success');
      expect(calculateStatus(90)).toBe('Success');
    });

    it('debería retornar "Warning" para puntajes entre 70 y 89', () => {
      expect(calculateStatus(85)).toBe('Warning');
      expect(calculateStatus(70)).toBe('Warning');
    });

    it('debería retornar "Error" para puntajes menores a 70', () => {
      // ESTA PRUEBA FALLA A PROPÓSITO:
      // La función retorna 'Error', pero el test espera 'Fallo'
      // El estudiante debe corregir la expectativa o la función.
      expect(calculateStatus(50)).toBe('Fallo');
    });
  });

  describe('formatTime', () => {
    it('debería devolver un string en formato HH:MM', () => {
      const date = new Date('2023-10-15T08:05:00');
      expect(formatTime(date)).toBe('08:05');
    });
  });
});
