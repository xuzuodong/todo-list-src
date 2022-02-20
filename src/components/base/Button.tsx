interface Props {
    children: React.ReactNode
    variant?: 'text' | 'contained' | 'outlined'
    className?: string
    style?: React.CSSProperties
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const baseStyles = {
    fontWeight: '500',
    minwidth: '64px',
    fontSize: '0.875rem',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
}

const containedStyles = {
    ...baseStyles,
    backgroundColor: '#42a5f5',
    border: 'none',
    color: 'white',
}

const outlinedStyles = {
    ...baseStyles,
    backgroundColor: 'white',
    border: '1px solid #42a5f5',
    color: '#42a5f5',
}

const textStyles = {
    ...baseStyles,
    backgroundColor: 'white',
    color: '#42a5f5',
}

export function Button({ children, onClick, ...props }: Props) {
    const styles =
        props.variant === 'contained' ? containedStyles : props.variant === 'outlined' ? outlinedStyles : textStyles
    return (
        <button
            {...props}
            style={{ ...styles, ...props.style }}
            className={props.className}
            onClick={(e) => onClick?.(e)}
        >
            {children}
        </button>
    )
}
