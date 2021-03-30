import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {

    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("React Native!", "Top news - 7000 readers")}
            {newArticle("Redux", "Top news - 5500 readers")}
            {newArticle("Material-ui", "Top news - 2700 readers")}
            {newArticle("Firebase tools", "Top news - 2500 readers")}
            {newArticle("Javascript", "Top news - 1800 readers")}
            {newArticle("Material Design", "Top news - 1200 readers")}
        </div>
    )
}

export default Widgets
