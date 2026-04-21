import { useState } from 'react'
import {
  Info, GitBranch, Workflow, Truck, Users2, Phone,
} from 'lucide-react'
import { useLang } from '../i18n/context'
import type { CompanyData } from '../data/types'

interface CompanyProps {
  company: CompanyData
}

type Tab = 'overview' | 'orgchart' | 'processes' | 'suppliers' | 'clients' | 'contacts'

const CATEGORY_COLORS: Record<string, string> = {
  client: 'bg-blue-100 text-blue-800',
  supplier: 'bg-orange-100 text-orange-800',
  internal: 'bg-purple-100 text-purple-800',
  info: 'bg-gray-100 text-gray-800',
}

export function Company({ company }: CompanyProps) {
  const { t } = useLang()
  const [tab, setTab] = useState<Tab>('overview')

  const tabs: { id: Tab; label: string; icon: typeof Info }[] = [
    { id: 'overview', label: t.overview, icon: Info },
    { id: 'orgchart', label: t.orgChart, icon: GitBranch },
    { id: 'processes', label: t.processes, icon: Workflow },
    { id: 'suppliers', label: t.suppliers, icon: Truck },
    { id: 'clients', label: t.clients, icon: Users2 },
    { id: 'contacts', label: t.contacts, icon: Phone },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Tabs */}
      <div className="no-print flex gap-1 bg-gray-100 p-1 rounded-xl mb-6 overflow-x-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              tab === id ? 'bg-white shadow text-brand-700' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {tab === 'overview' && <Overview company={company} t={t} />}
      {tab === 'orgchart' && <OrgChart company={company} t={t} />}
      {tab === 'processes' && <Processes company={company} t={t} />}
      {tab === 'suppliers' && <Suppliers company={company} t={t} />}
      {tab === 'clients' && <Clients company={company} t={t} />}
      {tab === 'contacts' && <Contacts company={company} t={t} />}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Overview({ company, t }: { company: CompanyData; t: any }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
            <p className="text-brand-600 font-medium">{company.tagline}</p>
          </div>
          <div className="ml-auto flex flex-wrap gap-3 text-sm text-gray-600">
            <span>📍 {company.headquarters}</span>
            <span>📅 {t.founded} {company.founded}</span>
            <span>👥 {company.employees} {t.employees.toLowerCase()}</span>
            <span>💶 {company.revenue}</span>
          </div>
        </div>
        <p className="text-gray-700 whitespace-pre-line">{company.description}</p>
      </div>

      <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
        <h3 className="font-semibold text-brand-800 mb-2">{t.ourMission}</h3>
        <p className="text-brand-900 italic">{company.mission}</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-3">{t.ourValues}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-brand-700 mb-1">{v.title}</h4>
              <p className="text-sm text-gray-600">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-3">{t.activitySegments}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {company.segments.map((s) => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{s.name}</h4>
                <span className="text-xl font-bold text-brand-600">{s.share}</span>
              </div>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-3">{t.keyFigures}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {company.keyFigures.map((kf) => (
            <div key={kf.label} className="bg-white border border-gray-200 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-brand-700">{kf.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{kf.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OrgChart({ company, t: _t }: { company: CompanyData; t: any }) {
  const { ceo, departments } = company.orgChart
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 overflow-x-auto">
      <div className="min-w-[700px]">
        {/* CEO */}
        <div className="flex justify-center mb-6">
          <div className="bg-brand-700 text-white rounded-xl px-6 py-3 text-center shadow-md">
            <div className="font-bold">{ceo.name}</div>
            <div className="text-brand-200 text-sm">{ceo.title}</div>
          </div>
        </div>

        {/* Connector line */}
        <div className="flex justify-center mb-0">
          <div className="w-0.5 h-6 bg-gray-300" />
        </div>
        <div className="border-t border-gray-300 mb-0 mx-4" />

        {/* Departments */}
        <div
          className="grid gap-4 mt-6"
          style={{ gridTemplateColumns: `repeat(${Math.min(departments.length, 3)}, 1fr)` }}
        >
          {departments.map((dept) => (
            <div key={dept.name} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-100 px-4 py-2">
                <div className="font-semibold text-brand-800 text-sm">{dept.name}</div>
                <div className="text-brand-700 text-xs">{dept.head} · {dept.headTitle}</div>
              </div>
              <div className="px-4 py-2 space-y-1">
                {dept.members.map((m) => (
                  <div key={m.name} className="text-xs text-gray-600 flex items-start gap-1">
                    <span className="text-gray-400 mt-0.5">›</span>
                    <span>{m.name}{m.title ? ` – ${m.title}` : ''}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Processes({ company, t }: { company: CompanyData; t: any }) {
  return (
    <div className="space-y-4">
      {company.processes.map((proc, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-3 text-lg">{proc.title}</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">{t.responsible}</p>
              <p className="text-sm text-blue-900">{proc.responsible}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 sm:col-span-2">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">{t.typicalDelay}</p>
              <p className="text-sm text-green-900">{proc.delay}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.steps}</p>
            <ol className="space-y-1">
              {proc.steps.map((step, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-0.5 w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {j + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Suppliers({ company, t }: { company: CompanyData; t: any }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Fournisseur / Leverancier / Supplier</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.country}</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.products}</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">Contact</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.leadTime}</th>
          </tr>
        </thead>
        <tbody>
          {company.suppliers.map((s, i) => (
            <tr key={s.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium text-gray-800">{s.name}</td>
              <td className="px-4 py-3 text-gray-600">{s.country}</td>
              <td className="px-4 py-3 text-gray-600">{s.products}</td>
              <td className="px-4 py-3 text-gray-600">{s.contact}</td>
              <td className="px-4 py-3 text-gray-600">{s.leadTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Clients({ company, t }: { company: CompanyData; t: any }) {
  return (
    <div className="space-y-4">
      {company.topClients.map((c) => (
        <div key={c.name} className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex flex-wrap gap-2 items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.sector}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${CATEGORY_COLORS.client}`}>
              {c.annualVolume}
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="font-semibold text-gray-500">{t.keyAccountManager} :</span>{' '}
              <span className="text-gray-800">{c.kam}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500">{t.since} :</span>{' '}
              <span className="text-gray-800">{c.since}</span>
            </div>
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-sm text-amber-800">
            <span className="font-semibold">{t.notes} :</span> {c.notes}
          </div>
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Contacts({ company, t }: { company: CompanyData; t: any }) {
  const departments = [...new Set(company.contacts.map((c) => c.department))]

  return (
    <div className="space-y-4">
      {departments.map((dept) => (
        <div key={dept} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
            <h3 className="font-semibold text-gray-700">{dept}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {company.contacts
              .filter((c) => c.department === dept)
              .map((c) => (
                <div key={c.email} className="bg-white px-4 py-3">
                  <div className="font-semibold text-gray-800">{c.name}</div>
                  <div className="text-sm text-brand-600">{c.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    <span>{t.email} : </span>
                    <span className="font-mono">{c.email}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <span>{t.phone} : </span>
                    <span>{c.phone}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
