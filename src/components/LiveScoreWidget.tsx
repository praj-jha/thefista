import { Radio, ChevronRight } from 'lucide-react';
import type { LiveMatch } from '../types';

interface LiveScoreWidgetProps {
    matches: LiveMatch[];
}

export default function LiveScoreWidget({ matches }: LiveScoreWidgetProps) {
    return (
        <div className="bg-secondary text-white overflow-hidden">
            {/* Header */}
            <div className="px-5 pt-5 pb-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="live-badge bg-primary! animate-none!">
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>Live</span>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Scoreboard</span>
                    </div>
                </div>
            </div>

            {/* Matches */}
            <div className="divide-y divide-white/5">
                {matches.map((match) => (
                    <div key={match.id} className="px-5 py-4 hover:bg-white/5 transition-colors">
                        {/* Match Info */}
                        <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider mb-3">
                            <span className="font-bold text-primary">{match.sport}</span>
                            <span>·</span>
                            <span>{match.tournament}</span>
                            {match.status === 'live' && (
                                <span className="ml-auto flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    <span className="text-primary font-bold">LIVE</span>
                                </span>
                            )}
                            {match.status === 'upcoming' && (
                                <span className="ml-auto text-white/30 font-bold">UPCOMING</span>
                            )}
                        </div>

                        {/* Teams */}
                        <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-base">{match.team1.flag}</span>
                                    <span className="font-semibold text-sm text-white/90">{match.team1.shortName}</span>
                                </div>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-[10px] text-white/30">{match.team1.overs}</span>
                                    <span className="font-bold text-white text-sm min-w-12.5 text-right">{match.team1.score}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-base">{match.team2.flag}</span>
                                    <span className="font-semibold text-sm text-white/90">{match.team2.shortName}</span>
                                </div>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-[10px] text-white/30">{match.team2.overs}</span>
                                    <span className="font-bold text-white text-sm min-w-12.5 text-right">{match.team2.score}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <button className="w-full px-5 py-3.5 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-white">
                All Scores <ChevronRight className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
