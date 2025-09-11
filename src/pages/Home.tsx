import { Hero } from "../components/Hero";
import { AuditsRankings } from "../components/AuditsRankings";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { GithubStats } from "../components/GithubStats";
import { LeetcodeStats } from "../components/LeetcodeStats";

export function HomePage() {
    return (
        <>
            <Hero />
            <AuditsRankings />
            <Experience />
            <Skills />
            <GithubStats />
            <LeetcodeStats />
        </>
    );
}