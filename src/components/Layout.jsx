//전체적인 레이아웃 설정
import React from 'react'

export default function Layout({children}){
    return (
        <div className="layout">
            {children}
        </div>
    )
}
