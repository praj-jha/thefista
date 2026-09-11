import { Radio, ChevronRight } from 'lucide-react';
import type { LiveMatch } from '../types';

interface LiveScoreWidgetProps {
    matches: LiveMatch[];
}

export default function LiveScoreWidget({ matches }: LiveScoreWidgetProps) {
    return (
        <div className="rounded-[4px] border border-neutral-200 bg-white overflow-hidden">
            {/* Header */}
            <div className="px-4 py-2.5 bg-neutral-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <span className="live-badge">
                        <Radio className="w-3 h-3 breaking-pulse" />
                        Live
                    </span>
                    <span className="font-cond text-[13px] font-bold uppercase tracking-wide text-white">Cricket Scores</span>
                </div>
            </div>

            {/* Matches */}
            <div className="divide-y divide-neutral-100">
                {matches.map((match) => (
                    <div key={match.id} className="px-4 py-3 hover:bg-neutral-50 transition-colors">
                        <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-wide mb-2.5 font-cond font-bold">
                            <span className="text-primary">{match.sport}</span>
                            <span className="text-neutral-300">·</span>
                            <span className="truncate">{match.tournament}</span>
                            {match.status === 'live' && (
                                <span className="ml-auto flex items-center gap-1 shrink-0">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full breaking-pulse" />
                                    <span className="text-primary font-bold">LIVE</span>
                                </span>
                            )}
                            {match.status === 'upcoming' && (
                                <span className="ml-auto text-neutral-300 font-bold shrink-0">UPCOMING</span>
                            )}
                            {match.status === 'completed' && (
                                <span className="ml-auto text-neutral-400 font-bold shrink-0">RESULT</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            {[match.team1, match.team2].map((team, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">{team.flag}</span>
                                        <span className="font-bold text-sm text-secondary">{team.shortName}</span>
                                    </div>
                                    <div className="text-right flex items-center gap-2">
                                        <span className="text-[10px] text-neutral-400">{team.overs}</span>
                                        <span className="font-bold text-secondary text-sm min-w-12.5 text-right">{team.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <button className="w-full px-4 py-3 border-t-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wide text-secondary font-cond">
                All Scores <ChevronRight className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
