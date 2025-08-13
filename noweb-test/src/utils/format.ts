export const formatCEP = (v: string) =>
  v.replace(/\D/g, '').slice(0,8).replace(/(\d{5})(\d{0,3})/, (_, a, b) => (b ? `${a}-${b}` : a))