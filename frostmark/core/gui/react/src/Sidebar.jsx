import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import fetch from 'node-fetch';

import Logo from './Logo';
import SidebarItem from './SidebarItem';


class Sidebar extends Component {
    render() {
        return <div className='sidebar'>
            <Logo />
            <SidebarItem text='Import' className='not-implemented' />
            <SidebarItem
                text='Export'
                action={event => {
                    const win = window.open(
                        '/api/export_bookmarks',
                        '_blank'
                    );
                    win.focus();
                }}
            />
            <Link to='/bookmark-list'>
                <SidebarItem text='List bookmarks' />
            </Link>
            <SidebarItem
                text='List profiles'
                action={event => {
                    fetch(
                        '/api/list_profiles',
                        { mode: "cors" }
                    ).then(response => response.json()).then(data => {
                        console.log(data);
                    });
                }}
            />
            <SidebarItem
                text='Contribute'
                action={event => {
                    const win = window.open(
                        'https://github.com/KeyWeeUsr/frostmark',
                        '_blank'
                    );
                    win.focus();
                }}
            />
            <SidebarItem text='About' className='not-implemented' />
        </div>;
    }
}


export default Sidebar;
