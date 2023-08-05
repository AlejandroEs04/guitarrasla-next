import ListadoPosts from "@/components/ListadoPosts";

export default async function BlogPage() {
    return (
        <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <ListadoPosts />
        </main>
    )
    }
