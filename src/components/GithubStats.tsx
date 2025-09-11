import GitHubCalendar from "react-github-calendar";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function GithubStats() {
    const githubUsername = "anjanayraina";

    return (
        <section className="py-24 px-6 bg-secondary/10">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-mono mb-6">
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              GitHub Contributions
            </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My daily coding activity and contribution graph from GitHub.
                    </p>
                </div>

                {/* GitHub Calendar Card */}
                <Card className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 flex justify-center">
                    <GitHubCalendar
                        username={githubUsername}
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                    />
                </Card>
            </div>
        </section>
    );
}