import type { ViaCep } from '../types/viacep'

export function sanitizeCep(input: string) {
  return input.replace(/\D/g, '').slice(0, 8)
}

export async function fetchCep(raw: string): Promise<ViaCep | undefined> {
  const cep = sanitizeCep(raw)
  if (cep.length !== 8) return undefined
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = (await res.json()) as ViaCep
  if ((data as any).erro) return undefined
  return data
}