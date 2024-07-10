import GitHubUser from "./github_user.ts"

export default interface GithubRepo {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: GitHubUser
    description: string | null
    fork: boolean
    html_url: string
    url: string
    git_url: string
    ssh_url:string
    clone_url:string
    svn_url:string
    created_at: string
    updated_at: string
    pushed_at: string
    homepage: string | null
    size: number
    stargazers_count: number,
    watchers_count: number,
    language: string | null,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_discussions: boolean,
    forks_count: number,
    mirror_url: string | null,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: {
        key: string,
        name: string,
        spdx_id: string,
        url: string,
        node_id: string,
    },
    allow_forking: boolean,
    is_template: boolean,
    web_commit_signoff_required: boolean,
    topics: string[],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}
