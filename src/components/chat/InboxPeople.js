import React from 'react';
import { Sidebar } from './Sidebar';
import { SearchBox } from './SearchBox';

export const InboxPeople = () => {
    return (
        <div className="inbox_people">

            <SearchBox />

            <Sidebar />

        </div>
    );
}
