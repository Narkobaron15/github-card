import GithubRepo from "../models/github_repo.ts";
import {Eye, GitFork, Star} from "lucide-react";
import {Link} from "react-router-dom";

export default function RepoCard({repo}: { repo: GithubRepo }) {
    return (
        <div className="py-3 px-4 grid grid-cols-2">
            <div>
                <h5>
                    <Link to={repo.html_url} className="link">
                        {repo.name}
                    </Link>
                </h5>
                {
                    repo.description &&
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {
                            repo.description.length > 20
                                ? repo.description.substring(0, 18) + "..."
                                : repo.description
                        }
                        {repo.language && (
                            <span className="badge ml-1">
                              {repo.language}
                        </span>
                        )}
                    </p>
                }
            </div>
            <div className="stats">
                <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1"/>
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center justify-center">
                    <GitFork className="w-4 h-4 mr-1"/>
                    <span>{repo.forks_count}</span>
                </div>
                <div className="flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-1"/>
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </div>
    )
}
