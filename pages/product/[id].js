import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function avos1() {
    const { query: { id } } = useRouter()
    const [avos, setAvos] = useState()

    const peticion = async () => {
        const res = await fetch(`/api/avo/${id}`)
        const avis = await res.json()
        setAvos(avis)
    }
    useEffect(() => {
        peticion()
    }, [id])
    console.log(avos)

    return (
        <div>
            <h1>{avos?.name}</h1>
            <img src={avos?.image} />
            <p> {avos?.price}</p>
            <Link href="/product">
                <a>volver atras</a>
            </Link>
        </div>
    )
}