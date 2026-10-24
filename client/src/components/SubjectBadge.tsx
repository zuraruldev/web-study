import React from 'react';
import {
  Code2,
  Database,
  Network,
  Cpu,
  TerminalSquare,
  BookOpen,
  ShieldCheck,
  Binary
} from 'lucide-react';

interface SubjectBadgeProps {
  slug: string;
  name?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function getSubjectMeta(slug: string) {
  switch (slug) {
    case 'alpro':
      return {
        label: 'Alpro',
        fullName: 'Algoritma dan Pemrograman',
        icon: Code2,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        glow: 'group-hover:border-emerald-500/40'
      };
    case 'basdat':
      return {
        label: 'Basdat',
        fullName: 'Basis Data',
        icon: Database,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        glow: 'group-hover:border-cyan-500/40'
      };
    case 'psi':
      return {
        label: 'PSI',
        fullName: 'Pengantar Sistem Informasi',
        icon: Network,
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        glow: 'group-hover:border-violet-500/40'
      };
    case 'arsikom':
      return {
        label: 'Arsikom',
        fullName: 'Arsitektur Komputer',
        icon: Cpu,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        glow: 'group-hover:border-amber-500/40'
      };
    case 'ketkom':
      return {
        label: 'Ketkom',
        fullName: 'Keterampilan Komputer',
        icon: TerminalSquare,
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/20',
        glow: 'group-hover:border-teal-500/40'
      };
    case 'bindo':
      return {
        label: 'B. Indo',
        fullName: 'Bahasa Indonesia',
        icon: BookOpen,
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/20',
        glow: 'group-hover:border-rose-500/40'
      };
    case 'pancasila':
      return {
        label: 'Pancasila',
        fullName: 'Pancasila',
        icon: ShieldCheck,
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        glow: 'group-hover:border-red-500/40'
      };
    case 'matdas':
      return {
        label: 'Matdas',
        fullName: 'Matematika Dasar',
        icon: Binary,
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        glow: 'group-hover:border-indigo-500/40'
      };
    default:
      return {
        label: slug.toUpperCase(),
        fullName: slug,
        icon: Code2,
        color: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/20',
        glow: 'group-hover:border-slate-500/40'
      };
  }
}

export const SubjectBadge: React.FC<SubjectBadgeProps> = ({
  slug,
  name,
  showIcon = true,
  size = 'md',
  className = ''
}) => {
  const meta = getSubjectMeta(slug);
  const Icon = meta.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors ${meta.bg} ${meta.border} ${meta.color} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <Icon size={iconSizes[size]} />}
      <span>{name || meta.label}</span>
    </span>
  );
};
