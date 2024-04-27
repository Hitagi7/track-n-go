import React from 'react'
import './Settings.css'
import SideNavigation from '../SideNavigation'
import SettingsTitle from './SettingsTitle';
import SettingsBody from './SettingsBody';

function Settings() {
    return (
    <div className="Settings">
        <div className="side-navigation">
            <SideNavigation />

            <div className="settings-pane">
                <div className="settings-title">
                    <SettingsTitle />
                </div>
                <div className="settings-body">
                    <SettingsBody />
                </div>
            </div>
            
        </div>
    </div>
    );
}



export default Settings