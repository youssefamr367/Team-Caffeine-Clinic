import { useEffect } from 'react'

const typeColors = {
    info: '#3182ce',
    success: '#38a169',
    warning: '#dd6b20',
    error: '#e53e3e'
}

const Toast = ({
    isOpen,
    title,
    description,
    hasAutoDismiss = false,
    hasCloseBtn = false,
    closeCallback,
    duration = 5000,
    classNames = []
}) => {
    useEffect(() => {
        if (!isOpen || !hasAutoDismiss || !closeCallback) {
            return
        }
        const timer = setTimeout(closeCallback, duration)
        return () => clearTimeout(timer)
    }, [isOpen, hasAutoDismiss, closeCallback, duration])

    if (!isOpen) {
        return null
    }

    const accent = typeColors[classNames[0]] || typeColors.info

    return (
        <div
            className={['toast', ...classNames].join(' ')}
            style={{
                position: 'relative',
                background: '#fff',
                borderLeft: `4px solid ${accent}`,
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                padding: '12px 36px 12px 16px',
                marginBottom: '10px',
                maxWidth: '360px'
            }}
        >
            {title && <div style={{ fontWeight: 600, marginBottom: '4px' }}>{title}</div>}
            {description && <div style={{ fontSize: '0.9rem' }}>{description}</div>}
            {hasCloseBtn && (
                <button
                    type="button"
                    aria-label="Close notification"
                    onClick={closeCallback}
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        lineHeight: 1
                    }}
                >
                    &times;
                </button>
            )}
        </div>
    )
}

export default Toast
