import { Radio } from 'lucide-react';
import type { LiveMatch } from '../types';

interface LiveScoreWidgetProps {
    matches: LiveMatch[];
}

export default function LiveScoreWidget({ matches }: LiveScoreWidgetProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
                <div className="live-badge">
                    <Radio className="w-3 h-3" />
                    <span>Live Match</span>
                </div>
            </div>

            <div className="space-y-6">
                {matches.map((match) => (
                    <div key={match.id} className="border-b border-neutral-100 last:border-0 pb-6 last:pb-0">
                        {/* Match Info */}
                        <div className="text-xs text-neutral-500 mb-3">
                            <span className="font-medium text-secondary">{match.sport}</span>
                            <span className="mx-1">•</span>
                            <span>{match.tournament}</span>
                            {match.innings && (
                                <>
                                    <span className="mx-1">•</span>
                                    <span>{match.innings}</span>
                                </>
                            )}
                            {match.venue && (
                                <>
                                    <span className="mx-1">•</span>
                                    <span>{match.venue}</span>
                                </>
                            )}
                        </div>

                        {/* Teams */}
                        <div className="space-y-3">
                            {/* Team 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{match.team1.flag}</span>
                                    <span className="font-semibold text-secondary">{match.team1.shortName}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-neutral-500">{match.team1.overs}</span>
                                    <span className="font-bold text-secondary ml-2">{match.team1.score}</span>
                                </div>
                            </div>

                            {/* Team 2 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{match.team2.flag}</span>
                                    <span className="font-semibold text-secondary">{match.team2.shortName}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-neutral-500">{match.team2.overs}</span>
                                    <span className="font-bold text-secondary ml-2">{match.team2.score}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-secondary font-semibold py-3 rounded-lg transition-colors">
                More
            </button>
        </div>
    );
}
