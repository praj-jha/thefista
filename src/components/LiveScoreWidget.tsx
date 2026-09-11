import { Radio, ChevronRight } from 'lucide-react';
import type { LiveMatch } from '../types';

interface LiveScoreWidgetProps {
    matches: LiveMatch[];
}

export default function LiveScoreWidget({ matches }: LiveScoreWidgetProps) {
    return (
        <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <span className="live-badge">
                        <Radio className="w-3 h-3 breaking-pulse" />
                        Live
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-500">Scoreboard</span>
                </div>
            </div>

            {/* Matches */}
            <div className="divide-y divide-neutral-100">
                {matches.map((match) => (
                    <div key={match.id} className="px-5 py-4 hover:bg-neutral-50 transition-colors">
                        <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-wider mb-3 font-semibold">
                            <span className="text-primary">{match.sport}</span>
                            <span className="text-neutral-300">·</span>
                            <span className="truncate">{match.tournament}</span>
                            {match.status === 'live' && (
                                <span className="ml-auto flex items-center gap-1 shrink-0">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full breaking-pulse" />
                                    <span className="text-primary font-extrabold">LIVE</span>
                                </span>
                            )}
                            {match.status === 'upcoming' && (
                                <span className="ml-auto text-neutral-300 font-extrabold shrink-0">UPCOMING</span>
                            )}
                            {match.status === 'completed' && (
                                <span className="ml-auto text-neutral-400 font-extrabold shrink-0">RESULT</span>
                            )}
                        </div>

                        <div className="space-y-2.5">
                            {[match.team1, match.team2].map((team, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">{team.flag}</span>
                                        <span className="font-bold text-sm text-secondary">{team.shortName}</span>
                                    </div>
                                    <div className="text-right flex items-center gap-2">
                                        <span className="text-[10px] text-neutral-400">{team.overs}</span>
                                        <span className="font-extrabold text-secondary text-sm min-w-12.5 text-right">{team.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <button className="w-full px-5 py-3.5 bg-neutral-50 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-500">
                All Scores <ChevronRight className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
