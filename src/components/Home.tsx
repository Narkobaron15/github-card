import {useEffect, useState} from "react";
import http_common from "../http/axios.ts";
import {toast} from "react-toastify";
import GithubUser from "../models/github_user.ts";
import {Link, useSearchParams} from "react-router-dom";
import DefaultSpinner from "../core/DefaultSpinner.tsx";

const DEFAULT_USER = "Narkobaron15";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()

    const u = searchParams.get('user')
    const [username, setUsername] = useState(u && u.length > 0 ? u : DEFAULT_USER)
    const [user, setUser] = useState<GithubUser>()

    useEffect(() => {
        http_common.get(username)
            .then((response) => {
                setUser(response.data)
            })
            .catch(() => {
                toast.error(`Can't load data for @${username}!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
    }, [username]);

    if (!user) return <DefaultSpinner/>

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
            <div className="card text-center">
                <div className="background-image">
                    <img src={user.avatar_url} alt="Card's background image"/>
                </div>
                <div className="container">
                    <Link target="_blank" to={user.html_url}>
                        <img className="avatar" src={user.avatar_url} alt="User's image"/>
                    </Link>
                    <h5>
                        <Link target="_blank" to={user.html_url}>
                            {
                                user.name === null
                                    ? <span>{user.login}<i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i></span>
                                    : user.name
                            }
                        </Link>
                    </h5>
                    <h6 className="gray">
                        <Link target="_blank" to={user.html_url}>
                            {
                                user.name === null
                                    ? ''
                                    : (
                                        <span>
                                        @{user.login}
                                            <i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
                                        </span>
                                    )
                            }
                        </Link>
                    </h6>
                    <span className="gray mt-4 space-x-3 md:mt-6">
                    {user.bio}
                </span>
                    <div className="stats">
                        <span className="font-bold">
                            <Link target="_blank" to={user.html_url + '?tab=followers'}>
                                {user.followers}
                            </Link>
                        </span>
                        <span className="font-bold">
                            <Link target="_blank" to={user.html_url + '?tab=following'}>
                                {user.following}
                            </Link>
                        </span>
                        <span className="font-bold">
                            <Link target="_blank" to={`/repos?user=${username}`}>
                                {user.public_repos}
                            </Link>
                        </span>
                        <span>
                            <Link target="_blank" to={user.html_url + '?tab=followers'}>
                                Followers
                            </Link>
                        </span>
                        <span>
                            <Link target="_blank" to={user.html_url + '?tab=following'}>
                                Following
                            </Link>
                        </span>
                        <span>
                            <Link to={`/repos?user=${username}`}>
                                Repositories
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
