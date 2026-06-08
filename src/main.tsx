import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start/client'
import { router } from './router'
import './styles.css'

// Acorda o ecossistema do TanStack conectado ao HTML
hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
