import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient,QueryClientProvider}from '@tanstack/react-query';
import './index.css';
import { AppProvider } from './context';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
    const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <AppProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={true}/>
    </AppProvider>
    </QueryClientProvider>
);
