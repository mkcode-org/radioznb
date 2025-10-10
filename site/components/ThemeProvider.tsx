'use client'

import Library from '@/app/library/page'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { BgOverlay } from './BgOverlay'
import { usePlayer } from './PlayerBar/PlayerContext'
import { stream } from './PlayerBar/Controls'

const ThemeTransitionContext = createContext<ThemeCtx | null>(null)

export const useThemeTransition = () => {
	const ctx = useContext(ThemeTransitionContext)
	if (!ctx)
		throw new Error('useThemeTransition must be used within ThemeProvider')
	return ctx
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<NextThemesProvider attribute='class'>
			<ThemeTransitionInner>{children}</ThemeTransitionInner>
		</NextThemesProvider>
	)
}

const ThemeTransitionInner = ({ children }: { children: ReactNode }) => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	const { play } = usePlayer()
	useEffect(() => setMounted(true), [])

	const toggleTheme = useCallback(() => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		play(
			newTheme === 'dark'
				? {
						title: `моки – мок`,
						src: `http://127.0.0.1:3210/api/storage/37e771f2-aa77-46a3-9b09-85c08696cdf9`,
					}
				: stream
		)

		// View Transition API
		if (document.startViewTransition) {
			document.documentElement.classList.add('theme-transition')
			const transition = document.startViewTransition(() => {
				setTheme(newTheme)
			})

			transition.finished.finally(() => {
				document.documentElement.classList.remove('theme-transition')
			})
		} else {
			// fallback
			setTheme(newTheme)
		}
	}, [theme, setTheme])

	if (!mounted) return <>{children}</>

	return (
		<ThemeTransitionContext.Provider value={{ theme, toggleTheme }}>
			<BgOverlay />
			<div
				onClick={toggleTheme}
				className={`fixed sm:w-20 w-12 cursor-pointer z-10 dark:bg-white hover:translate-x-0 transition duration-300 ${theme === 'dark' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4 animate-bg'} top-0 bottom-0`}
			/>
			{children}
		</ThemeTransitionContext.Provider>
	)
}

type ThemeCtx = {
	theme: string | undefined
	toggleTheme: () => void
}
