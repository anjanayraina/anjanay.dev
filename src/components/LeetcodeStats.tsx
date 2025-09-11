import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

// Updated interface to match the new API response structure
interface LeetCodeStats {
    solvedProblem: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
}

export function LeetcodeStats() {
    const leetcodeUsername = "anjanayraina"; // <-- IMPORTANT: Change this to your LeetCode username!
    const [stats, setStats] = useState<LeetCodeStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                // Updated API endpoint
                const response = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`);
                if (!response.ok) {
                    throw new Error('Failed to fetch LeetCode stats. Please check the username.');
                }
                const data = await response.json();

                // Directly set the stats from the new API structure
                setStats({
                    solvedProblem: data.solvedProblem,
                    easySolved: data.easySolved,
                    mediumSolved: data.mediumSolved,
                    hardSolved: data.hardSolved,
                });
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeStats();
    }, [leetcodeUsername]);

    if (loading) {
        return (
            <div className="text-center py-10">
                <p className="text-muted-foreground">Loading LeetCode Stats...</p>
            </div>
        );
    }

    if (error || !stats) {
        return (
            <div className="text-center py-10">
                <p className="text-destructive">Error: {error || "Could not load stats."}</p>
            </div>
        );
    }

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

                {/* Updated Stats Cards Layout */}
                <div className="flex justify-center mb-6">
                    <Card className="p-6 bg-card border-border text-center w-full md:w-1/3">
                        <h3 className="text-5xl font-mono text-accent mb-2">{stats.solvedProblem}</h3>
                        <p className="text-muted-foreground">Total Problems Solved</p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Card className="p-4 bg-secondary/30 text-center">
                        <p className="text-lg font-mono text-green-400">{stats.easySolved}</p>
                        <p className="text-sm text-muted-foreground">Easy</p>
                    </Card>

                    <Card className="p-4 bg-secondary/30 text-center">
                        <p className="text-lg font-mono text-yellow-400">{stats.mediumSolved}</p>
                        <p className="text-sm text-muted-foreground">Medium</p>
                    </Card>

                    <Card className="p-4 bg-secondary/30 text-center">
                        <p className="text-lg font-mono text-red-400">{stats.hardSolved}</p>
                        <p className="text-sm text-muted-foreground">Hard</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}