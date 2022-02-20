const containerStyle = {
    width: '400px',
    margin: '0 auto',
}

export function Layout({ children }) {
    return (
        <div style={containerStyle} className="space-y-4 pt-4">
            {children}
        </div>
    )
}
