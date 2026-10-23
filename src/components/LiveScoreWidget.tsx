import type { LiveMatch } from '../types';

interface LiveScoreWidgetProps {
    matches: LiveMatch[];
}

const statusLabel: Record<LiveMatch['status'], string> = {
    live: 'Live',
    completed: 'Result',
    upcoming: 'Upcoming',
};

export default function LiveScoreWidget({ matches }: LiveScoreWidgetProps) {
    return (
        <div>
            <div className="section-head mb-0">
                <h2 className="section-head-title">Scores</h2>
                {matches.some(m => m.status === 'live') && (
                    <span className="live-badge">
                        <span className="w-1.5 h-1.5 rounded-full bg-white breaking-pulse" /> Live
                    </span>
                )}
            </div>

            <ul className="divide-y divide-neutral-200">
                {matches.map((match) => (
                    <li key={match.id} className="py-3">
                        <div className="flex items-baseline justify-between gap-3 mb-2">
                            <span className="text-[13px] italic text-neutral-500 truncate">{match.tournament}</span>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.1em] shrink-0 ${match.status === 'live' ? 'text-primary' : 'text-neutral-400'}`}>
                                {statusLabel[match.status]}
                            </span>
                        </div>
                        <div className="space-y-1">
                            {[match.team1, match.team2].map((team, i) => (
                                <div key={i} className="flex items-center justify-between gap-3 text-[15px]">
                                    <span className="flex items-center gap-2 min-w-0">
                                        <span aria-hidden="true">{team.flag}</span>
                                        <span className="font-bold truncate">{team.name}</span>
                                    </span>
                                    <span className="tabular-nums shrink-0">
                                        <span className="font-bold">{team.score}</span>
                                        {team.overs && <span className="text-[12px] text-neutral-500 ml-1.5">{team.overs}</span>}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
