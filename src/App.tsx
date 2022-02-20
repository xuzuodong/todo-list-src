import { Layout } from './layouts/Layout'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { List } from './components/list/List'
import { Footer } from './components/Footer'

export function App() {
    return (
        <Layout>
            <Header />
            <Input />
            <List />
            <Footer />
        </Layout>
    )
}
