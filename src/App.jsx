import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Building2, 
  Bot, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertTriangle, 
  Search, 
  ShieldCheck, 
  FileSpreadsheet,
  LogOut
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSede, setSelectedSede] = useState('global');

  const mockParticipantes = [
    { id: 1, codigo: 'PA-2026-001', nombre: 'José Ramírez', curso: 'Programación II', faltas: 1, estado: 'Aprobado', sede: 'Sede San Salvador' },
    { id: 2, codigo: 'PA-2026-002', nombre: 'María Hernández', curso: 'Robótica Básica', faltas: 3, estado: 'Riesgo Deserción', sede: 'Sede San Miguel' },
    { id: 3, codigo: 'PA-2026-003', nombre: 'Carlos Toledo', curso: 'Ciberseguridad 101', faltas: 0, estado: 'Aprobado', sede: 'Sede Santa Ana' },
  ];

  const mockKardex = [
    { id: 101, insumo: 'Kits Arduino Uno', categoria: 'Electrónica', stock: 45, stockMin: 10, estado: 'Normal' },
    { id: 102, insumo: 'Cable UTP Cat 6 (m)', categoria: 'Redes', stock: 8, stockMin: 20, estado: 'Crítico' },
    { id: 103, insumo: 'Laptops de Taller', categoria: 'Equipos', stock: 15, stockMin: 5, estado: 'Normal' },
  ];

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between shadow-xl">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <div className="bg-sky-500 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight">EduCentral</h1>
              <span className="text-xs text-sky-400 font-medium">v1.0c.a.m</span>
            </div>
          </div>

          <div className="px-4 py-3 bg-slate-800/50 m-3 rounded-lg border border-slate-700/50">
            <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
              Sede:
            </label>
            <select 
              value={selectedSede} 
              onChange={(e) => setSelectedSede(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="global">Consolidado</option>
              <option value="san_salvador">San Salvador</option>
              <option value="soyapango">Sede San Miguel</option>
              <option value="santa_ana">Sede Santa Ana</option>
            </select>
          </div>

          <nav className="mt-2 px-3 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard' ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" /> Dashboard
            </button>

            <button
              onClick={() => setActiveTab('academico')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'academico' ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Users className="h-4 w-4" /> Control académico
            </button>

            <button
              onClick={() => setActiveTab('inventario')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'inventario' ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Package className="h-4 w-4" /> Inventario
            </button>

            <button
              onClick={() => setActiveTab('multisede')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'multisede' ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Building2 className="h-4 w-4" /> Configuración sedes
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/40">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 text-[11px] font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" /> Security activate
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-200">Camila Martínez</p>
              <p className="text-[10px] text-slate-400">Jefatura de Sede</p>
            </div>
            <button className="text-slate-400 hover:text-red-400 transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 capitalize">
              {activeTab === 'dashboard' && 'Dashboard Principal & Asistente IA'}
              {activeTab === 'academico' && 'Módulo de Gestión Académica'}
              {activeTab === 'inventario' && 'Control de Inventario y Kardex'}
              {activeTab === 'multisede' && 'Administración Multisede'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Vista<span className="font-semibold text-slate-700 capitalize">{selectedSede.replace('_', ' ')}</span>
            </p>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar registro..." 
                className="pl-9 pr-4 py-1.5 text-xs bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:border-sky-500"
              />
            </div>
            <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1.5 rounded-lg font-medium border border-emerald-200 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> Online
            </span>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Total Participantes</p>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-1">1,248</h3>
                <span className="text-emerald-600 text-xs font-semibold flex items-center mt-2">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> +12% este mes
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Riesgo de Deserción</p>
                <h3 className="text-2xl font-extrabold text-amber-600 mt-1">14</h3>
                <span className="text-amber-600 text-xs font-semibold flex items-center mt-2">
                  <AlertTriangle className="h-3 w-3 mr-1" /> &gt;= 3 inasistencias
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Insumos Críticos Kardex</p>
                <h3 className="text-2xl font-extrabold text-red-600 mt-1">3</h3>
                <span className="text-red-600 text-xs font-semibold flex items-center mt-2">
                  <ArrowDownRight className="h-3 w-3 mr-0.5" /> Stock bajo mínimo
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Sedes Operativas</p>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-1">3 / 3</h3>
                <span className="text-sky-600 text-xs font-semibold flex items-center mt-2">
                  Sincronización &lt; 2s
                </span>
              </div>
            </div>

            {/* WIDGET DEL ASISTENTE DE IA (OLLAMA LOCAL) */}
            <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-xl p-6 text-white shadow-xl border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-sky-400" />
                  <h3 className="font-bold text-base">Asistente de Consulta Local (Ollama)</h3>
                </div>
                <span className="bg-sky-500/20 text-sky-300 text-xs px-2.5 py-1 rounded-full border border-sky-400/30">
                  Modelo: Llama3 Local
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Pregunta en lenguaje natural sobre las métricas académicas o inventarios de cualquier sede.
              </p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ej: ¿Cuántos estudiantes están en riesgo de deserción en Soyapango?" 
                  className="flex-1 bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
                />
                <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg text-xs font-bold transition-colors">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academico' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
              <div>
                <h3 className="font-bold text-sm text-slate-800">Importación de participantes</h3>
                <p className="text-xs text-slate-500">Archivos Excel (.xlsx)</p>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <FileSpreadsheet className="h-4 w-4" /> Cargar Excel
              </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Código</th>
                    <th className="p-4">Nombre del Estudiante</th>
                    <th className="p-4">Curso</th>
                    <th className="p-4">Sede</th>
                    <th className="p-4 text-center">Faltas</th>
                    <th className="p-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockParticipantes.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="p-4 font-mono text-slate-500">{p.codigo}</td>
                      <td className="p-4 font-bold text-slate-800">{p.nombre}</td>
                      <td className="p-4 text-slate-600">{p.curso}</td>
                      <td className="p-4 text-slate-600">{p.sede}</td>
                      <td className="p-4 text-center font-bold">{p.faltas}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          p.faltas >= 3 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {p.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inventario' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-sm text-slate-800"> Inventario en tiempo real</h3>
                <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                  + Registrar movimiento
                </button>
              </div>
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Nombre del insumo</th>
                    <th className="p-4">Categoría</th>
                    <th className="p-4 text-center">Stock actual</th>
                    <th className="p-4 text-center">Stock mínimo</th>
                    <th className="p-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockKardex.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-4 font-mono text-slate-500">#INS-{item.id}</td>
                      <td className="p-4 font-bold text-slate-800">{item.insumo}</td>
                      <td className="p-4 text-slate-600">{item.categoria}</td>
                      <td className="p-4 text-center font-bold">{item.stock}</td>
                      <td className="p-4 text-center text-slate-500">{item.stockMin}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          item.stock <= item.stockMin ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {item.stock <= item.stockMin ? 'Stock Crítico' : 'Normal'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'multisede' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-base text-slate-800 mb-2">Consolidación de sedes</h3>
            <p className="text-xs text-slate-500 mb-6">
              Estado de cada sede: 
            </p>

            <div className="grid grid-cols-3 gap-4">
              {['San Salvador', 'Soyapango', 'Santa Ana'].map((sede, idx) => (
                <div key={idx} className="border border-slate-200 p-4 rounded-lg bg-slate-50">
                  <h4 className="font-bold text-sm text-slate-800 mb-1">Sede {sede}</h4>
                  <p className="text-[11px] text-slate-500">Estado: <span className="text-emerald-600 font-bold">Activo</span></p>
                  <div className="mt-3 text-xs space-y-1 text-slate-600">
                    <p>• Inscritos: 400+</p>
                    <p>• Servidor local: Sincronizado</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}