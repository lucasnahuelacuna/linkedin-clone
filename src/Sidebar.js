import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20201010/pngtree-watercolor-gradient-yellow-orange-background-image_409268.jpg" 
                     alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">
                        2,248
                    </p>  
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
