import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Cpu,
  Layers,
  Send,
  Target,
  Wrench,
  Sparkles
} from 'lucide-react';

export const DetailProjectPage: React.FC = () => {
  const { projectList, selectedProjectSlug, navigate, openPermohonanModal } = useApp();

  const project = projectList.find((p) => p.slug === selectedProjectSlug) || projectList[0];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. BANNER & HEADER */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <button
            onClick={() => navigate('project')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Portofolio Project</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="uppercase tracking-wider">{project.category} · {project.year}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building size={14} className="text-blue-400" />
                  <span>Klien: {project.client}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openPermohonanModal('Layanan Manufaktur')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Send size={15} />
                  <span>Konsultasikan Proyek Serupa</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[16/10]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. DESKRIPSI, CHALLENGE & SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Case Study */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Ikhtisar Pengerjaan Proyek
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenge Box */}
              <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                  <Target size={18} />
                  <span>Tantangan Utama (The Challenge)</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 space-y-3">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
                  <Wrench size={18} />
                  <span>Solusi Rekayasa (The Solution)</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* 3. HASIL & DAMPAK TERUKUR */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-500" />
                <span>Hasil & Dampak Terukur (Measured Results)</span>
              </h3>
              <div className="space-y-2.5">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. GALERI FOTO PROYEK */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Dokumentasi Galeri Workshop & Lapangan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden aspect-[4/3] border border-slate-200 dark:border-slate-800 shadow-sm group">
                    <img
                      src={img}
                      alt={`${project.title} - Foto ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Specs & Technologies */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Box */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">
                <Cpu size={18} className="text-blue-600" />
                <span>Teknologi & Peralatan Digunakan</span>
              </div>

              <div className="space-y-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details Snapshot */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                Metadata Proyek
              </h4>
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">Kategori:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.category}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">Klien:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.client}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">Tahun:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{project.year}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Lokasi:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.location}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
