'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import {
	createContext,
	useContext,
	useCallback,
	useEffect,
	useState,
	ReactNode,
} from 'react'

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
	const { theme, setTheme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	const toggleTheme = useCallback(() => {
		const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

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
	}, [resolvedTheme, setTheme])

	if (!mounted) return <>{children}</>

	return (
		<ThemeTransitionContext.Provider
			value={{ theme: resolvedTheme, toggleTheme }}
		>
			<div onClick={toggleTheme}>{children}</div>
		</ThemeTransitionContext.Provider>
	)
}

type ThemeCtx = {
	theme: string | undefined
	toggleTheme: () => void
}
