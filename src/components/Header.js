import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderBottom: '1px solid #ddd' }}>
            <h2><Link to='/'>MyShop</Link></h2>
            <SearchBar />
            <div>
                <Link to='/cart'>Cart</Link> | <Link to='/login'>Login</Link>
            </div>
        </header>
    );
}
