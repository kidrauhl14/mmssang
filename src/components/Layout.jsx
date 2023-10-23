//전체적인 레이아웃 설정
import React from 'react'
import Header from './header/index';

export default function Layout({children}){
    return (
        <div className="layout">
            <Header />
            {children}
        </div>
    )
}
