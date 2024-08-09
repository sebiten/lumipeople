import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-center">
            <p className="mt-10">Lo siento el articulo no existe.</p>
            <Link href="/noticias">Volver a noticias</Link>
        </div>
    )
}