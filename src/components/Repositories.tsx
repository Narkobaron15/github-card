import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import GithubRepo from "../models/github_repo.ts";
import http_common from "../http/axios.ts";
import {toast} from "react-toastify";
import DefaultSpinner from "../core/DefaultSpinner.tsx";
import toast_conf from "../common/toast_conf.ts";
import useDebounce from "../common/use_debounce.ts";
import RepoCard from "./RepoCard.tsx";

const DEFAULT_USER = "Narkobaron15";
const timeout = 700

export default function Repositories() {
    const [searchParams, setSearchParams] = useSearchParams()
    const u = searchParams.get('user')

    const [username, setUsername] = useState(u && u.length > 0 ? u : DEFAULT_USER)
    const [repos, setRepos] = useState<GithubRepo[] | null>(null)
    const debouncedUsername = useDebounce(username, timeout)

    const [page, setPage] = useState(1)
    const [more, setMore] = useState(true)

    const load = async (invalidate: boolean = false) => {
        try {
            const {data} = await http_common.get(`${debouncedUsername.trim()}/repos`, {
                params: {page},
            })

            if (invalidate) setRepos(data)
            else setRepos([...repos || [], ...data])

            if (data.length < 30) setMore(false)
            else setPage(page + 1)
        } catch (e) {
            toast.error(`Can't load data for @${debouncedUsername}!`, toast_conf)
        }
    }

    useEffect(() => {
        if (!debouncedUsername || !debouncedUsername.trim().length) return
        load(true).catch(console.error)
    }, [debouncedUsername])

    if (!repos) return <DefaultSpinner/>

    if (!repos.length) return (
        <div className="card text-center py-10">
            <h5>No public repositories found</h5>
            <Link to="/"
                  className="text-blue-500 hover:text-blue-600 active:text-blue-800">
                Go back
            </Link>
        </div>
    )

    return (
        <>
            <input type="text" placeholder="@username"
                   onChange={(e) => {
                       const newUser = e.target.value
                       newUser.length > 0
                           ? setSearchParams({user: newUser})
                           : searchParams.delete('user', username)
                       setUsername(newUser.length > 0 ? newUser : DEFAULT_USER)
                   }}/>
            <div className="card text-center py-10">
                {repos.map(r => <RepoCard repo={r} key={r.id}/>)}
                <div className="flex justify-center mt-8">
                    {more &&
                        <button disabled={!more} className="pill"
                                onClick={() => load(false)}>
                            Load more
                        </button>
                    }
                    <Link to={username.length ? `/?user=${username}` : '/'} className="pill ml-2">
                        Go back
                    </Link>
                </div>
            </div>
        </>
    )
}
