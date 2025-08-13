const items = [
  { value: '35k+', label: 'Project Complete' },
  { value: '10k+', label: 'Happy Customers' },
  { value: '25+',  label: 'Years Experiences' },
  { value: '88',   label: 'Awards Achievement' },
]
export default function Metrics() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="p-6 rounded-2xl border bg-white">
            <div className="text-3xl font-bold">{it.value}</div>
            <div className="text-sm text-muted">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}