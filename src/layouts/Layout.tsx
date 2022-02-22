const containerStyle = {
    width: '400px',
    margin: '0 auto',
}

export function Layout({ children }) {
    return (
        <div style={containerStyle} className="h-screen space-y-4 flex flex-col">
            {children}
        </div>
    )
}
