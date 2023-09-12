"use client"
import React, { Children } from 'react'
import next from 'next/types'
import { store } from '@/app/store/store'
import { Provider } from 'react-redux'


export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        {children}
    </Provider>

}