import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useCountUp } from "./useCountUp"; // Assumes useCountUp.ts exists

// Interface for the stats
interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: number;
}

export function LeetcodeStats() {
    const leetcodeUsername = "anjanayraina";
    const [stats, setStats] = useState<LeetCodeStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Number animations
    const { count: totalCount, ref: totalRef } = useCountUp(stats?.totalSolved || 0);
    const { count: easyCount, ref: easyRef } = useCountUp(stats?.easySolved || 0);
    const { count: mediumCount, ref: mediumRef } = useCountUp(stats?.mediumSolved || 0);
    const { count: hardCount, ref: hardRef } = useCountUp(stats?.hardSolved || 0);

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${leetcodeUsername}`);
                if (!response.ok) throw new Error('Failed to fetch LeetCode stats.');
                const data = await response.json();
                if (data.message) throw new Error(data.message);
                setStats(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLeetCodeStats();
    }, [leetcodeUsername]);

    if (loading) return <div className="text-center py-10"><p className="text-muted-foreground">Loading LeetCode Stats...</p></div>;
    if (error || !stats) return <div className="text-center py-10"><p className="text-destructive">Error: {error || "Could not load stats."}</p></div>;

    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="border-amber-accent text-amber-accent mb-6 font-mono">
                        Problem Solving
                    </Badge>
                    <h2 className="font-mono mb-6">
                        <span className="text-4xl md:text-6xl bg-gradient-to-r from-amber-accent via-accent to-amber-accent bg-clip-text text-transparent">
                          LeetCode Stats
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My dedication to honing problem-solving and algorithmic skills.
                    </p>
                </div>

                {/* Main Stats Card */}
                <div className="flex justify-center mb-6">
                    <Card className="p-6 bg-card border-accent/30 text-center w-full md:w-1/3 transition-all duration-300 hover:scale-105 hover-glow-accent">
                        <h3 ref={totalRef} className="text-4xl font-mono text-accent mb-2">{totalCount}</h3>
                        <p className="text-muted-foreground font-medium">Problems Solved</p>
                    </Card>
                </div>

                {/* Difficulty Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Card className="p-4 bg-secondary/30 text-center transition-all duration-300 hover:scale-105 hover-glow-primary border-primary/30">
                        <p ref={easyRef} className="text-lg font-mono text-primary">{easyCount}</p>
                        <p className="text-sm text-primary font-medium">Easy</p>
                    </Card>
                    <Card className="p-4 bg-secondary/30 text-center transition-all duration-300 hover:scale-105 hover-glow-amber border-amber-accent/30">
                        <p ref={mediumRef} className="text-lg font-mono text-amber-accent">{mediumCount}</p>
                        <p className="text-sm text-amber-accent font-medium">Medium</p>
                    </Card>
                    <Card className="p-4 bg-secondary/30 text-center transition-all duration-300 hover:scale-105 hover-glow-red border-destructive/30">
                        <p ref={hardRef} className="text-lg font-mono text-destructive">{hardCount}</p>
                        <p className="text-sm text-destructive font-medium">Hard</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}