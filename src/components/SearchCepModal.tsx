import { useEffect, useRef, useState } from 'react'
import { useUiStore } from '../store/useUiStore'
import { fetchCep } from '../lib/viacep'
import { formatCEP } from '../utils/format'

export default function SearchCepModal() {
  const { isSearchOpen, closeSearch, setSearchResult, result, history, lastQuery } = useUiStore()
  const [cep, setCep] = useState(lastQuery ?? '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (isSearchOpen && !d.open) d.showModal()
    if (!isSearchOpen && d.open) d.close()
  }, [isSearchOpen])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(undefined)
    setLoading(true)
    try {
      const data = await fetchCep(cep)
      if (!data) {
        setSearchResult(cep, undefined)
        setError('CEP não encontrado ou inválido.')
      } else {
        setSearchResult(cep, data)
      }
    } catch {
      setError('Falha ao consultar a API. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <dialog ref={dialogRef} className="backdrop:bg-black/50 rounded-2xl p-0 w-full max-w-xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Buscar CEP</h3>
          <button onClick={closeSearch} aria-label="Fechar" className="text-muted hover:text-black">✕</button>
        </div>

        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            value={formatCEP(cep)}
            onChange={(e) => setCep(e.target.value)}
            inputMode="numeric"
            placeholder="Digite o CEP (03323-000 ou 03323000)"
            className="flex-1 rounded-xl border px-3 py-2"
          />
          <button
            disabled={loading}
            className="rounded-xl px-4 py-2 bg-primary text-black font-medium disabled:opacity-60">
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

        {/* Resultado atual */}
        {result && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Logradouro" value={result.logradouro} />
            <Field label="Complemento" value={result.complemento} />
            <Field label="Bairro" value={result.bairro} />
            <Field label="UF" value={result.uf} />
            <Field label="Estado" value={result.localidade} />
            <Field label="CEP" value={result.cep} />
          </div>
        )}

        {/* Histórico de buscas */}
        {history.length > 1 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Buscas recentes</h4>
            <ul className="flex flex-wrap gap-2">
              {history.map((h, i) => (
                <li key={h.cep + i} className="text-xs">
                  <button
                    className="px-2 py-1 rounded border hover:bg-zinc-50"
                    onClick={() => setCep(h.cep)}>
                    {h.cep}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </dialog>
  )
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <label className="text-sm">
      <span className="block text-muted mb-1">{label}</span>
      
      <input value={value ?? ''} readOnly className="w-full rounded-lg border px-3 py-2 bg-zinc-100 cursor-not-allowed" />
    </label>
  )
}